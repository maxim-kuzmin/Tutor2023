// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var globalConfig = new GlobalConfig();

PublishMessagesIndividually(globalConfig);
PublishMessagesInBatch(globalConfig);
HandlePublishConfirmsAsynchronously(globalConfig);

static int GetMessageCount()
{
    return 50_000;
}

static IConnection CreateConnection(GlobalConfig globalConfig)
{
    var factory = new ConnectionFactory()
    {
        HostName = globalConfig.HostName,
        UserName = globalConfig.UserName,
        Password = globalConfig.Password
    };

    return factory.CreateConnection();
}

static void PublishMessagesIndividually(GlobalConfig globalConfig)
{
    using var connection = CreateConnection(globalConfig);

    using var channel = connection.CreateModel();

    // declare a server-named queue
    string queueName = channel.QueueDeclare(queue: "").QueueName;

    channel.ConfirmSelect();

    int messageCount = GetMessageCount();

    var timer = new Stopwatch();

    timer.Start();

    for (int i = 0; i < messageCount; i++)
    {
        byte[] body = Encoding.UTF8.GetBytes(i.ToString());

        channel.BasicPublish(
            exchange: "",
            routingKey: queueName,
            basicProperties: null,
            body: body);

        channel.WaitForConfirmsOrDie(new TimeSpan(0, 0, 5));
    }

    timer.Stop();

    Console.WriteLine($"Published {messageCount:N0} messages individually in {timer.ElapsedMilliseconds:N0} ms");
}

static void PublishMessagesInBatch(GlobalConfig globalConfig)
{
    using var connection = CreateConnection(globalConfig);

    using var channel = connection.CreateModel();

    // declare a server-named queue
    string queueName = channel.QueueDeclare(queue: "").QueueName;

    channel.ConfirmSelect();

    int batchSize = 100;
    int outstandingMessageCount = 0;

    int messageCount = GetMessageCount();

    var timer = new Stopwatch();

    timer.Start();

    for (int i = 0; i < messageCount; i++)
    {
        byte[] body = Encoding.UTF8.GetBytes(i.ToString());

        channel.BasicPublish(
            exchange: "",
            routingKey: queueName,
            basicProperties: null,
            body: body);

        outstandingMessageCount++;

        if (outstandingMessageCount == batchSize)
        {
            channel.WaitForConfirmsOrDie(new TimeSpan(0, 0, 5));

            outstandingMessageCount = 0;
        }
    }

    if (outstandingMessageCount > 0)
    {
        channel.WaitForConfirmsOrDie(new TimeSpan(0, 0, 5));
    }

    timer.Stop();

    Console.WriteLine($"Published {messageCount:N0} messages in batch in {timer.ElapsedMilliseconds:N0} ms");
}

static void HandlePublishConfirmsAsynchronously(GlobalConfig globalConfig)
{
    using var connection = CreateConnection(globalConfig);

    using var channel = connection.CreateModel();

    // declare a server-named queue
    string queueName = channel.QueueDeclare(queue: "").QueueName;

    channel.ConfirmSelect();

    var outstandingConfirms = new ConcurrentDictionary<ulong, string>();

    void cleanOutstandingConfirms(ulong sequenceNumber, bool multiple)
    {
        if (multiple)
        {
            var confirmed = outstandingConfirms.Where(k => k.Key <= sequenceNumber);
            
            foreach (var entry in confirmed)
            {
                outstandingConfirms.TryRemove(entry.Key, out _);
            }
        }
        else
        {
            outstandingConfirms.TryRemove(sequenceNumber, out _);
        }
    }

    channel.BasicAcks += (sender, ea) => cleanOutstandingConfirms(ea.DeliveryTag, ea.Multiple);

    channel.BasicNacks += (sender, ea) =>
    {
        outstandingConfirms.TryGetValue(ea.DeliveryTag, out string? body);

        Console.WriteLine($"Message with body {body} has been nack-ed. Sequence number: {ea.DeliveryTag}, multiple: {ea.Multiple}");
        
        cleanOutstandingConfirms(ea.DeliveryTag, ea.Multiple);
    };

    int messageCount = GetMessageCount();

    var timer = new Stopwatch();

    timer.Start();
    
    for (int i = 0; i < messageCount; i++)
    {
        string body = i.ToString();

        outstandingConfirms.TryAdd(channel.NextPublishSeqNo, i.ToString());

        channel.BasicPublish(
            exchange: "",
            routingKey: queueName,
            basicProperties: null,
            body: Encoding.UTF8.GetBytes(body));
    }

    if (!WaitUntil(60, () => outstandingConfirms.IsEmpty))
    {
        throw new Exception("All messages could not be confirmed in 60 seconds");
    }

    timer.Stop();
    
    Console.WriteLine($"Published {messageCount:N0} messages and handled confirm asynchronously {timer.ElapsedMilliseconds:N0} ms");
}

static bool WaitUntil(int numberOfSeconds, Func<bool> condition)
{
    int waited = 0;

    while (!condition() && waited < numberOfSeconds * 1000)
    {
        Thread.Sleep(100);

        waited += 100;
    }

    return condition();
}
