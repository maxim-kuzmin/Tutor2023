// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var globalConfig = new GlobalConfig();
var localConfig = new LocalConfig();

var factory = new ConnectionFactory()
{
    HostName = globalConfig.HostName,
    UserName = globalConfig.UserName,
    Password = globalConfig.Password
};

using var connection = factory.CreateConnection();

using var channel = connection.CreateModel();

channel.QueueDeclare(
    queue: localConfig.Queue,
    durable: false,
    exclusive: false,
    autoDelete: false,
    arguments: null);

channel.BasicQos(0, 1, false);

var consumer = new EventingBasicConsumer(channel);

channel.BasicConsume(
    queue: localConfig.Queue,
    autoAck: false,
    consumer: consumer);

Console.WriteLine(" [x] Awaiting RPC requests");

consumer.Received += (model, ea) =>
{
    string response = "";

    byte[] body = ea.Body.ToArray();

    var basicProperties = ea.BasicProperties;

    var replyBasicProperties = channel.CreateBasicProperties();

    replyBasicProperties.CorrelationId = basicProperties.CorrelationId;

    try
    {
        string message = Encoding.UTF8.GetString(body);

        int n = int.Parse(message);

        Console.WriteLine(" [.] fib({0})", message);

        response = fib(n).ToString();
    }
    catch (Exception e)
    {
        Console.WriteLine(" [.] " + e.Message);
    }
    finally
    {
        byte[] responseBytes = Encoding.UTF8.GetBytes(response);

        channel.BasicPublish(
            exchange: "",
            routingKey: basicProperties.ReplyTo,
            basicProperties: replyBasicProperties,
            body: responseBytes);
        
        channel.BasicAck(
            deliveryTag: ea.DeliveryTag,
            multiple: false);
    }
};

Console.WriteLine(" Press [enter] to exit.");

Console.ReadLine();

/// <summary>
/// Assumes only valid positive integer input.
/// Don't expect this one to work for big numbers, and it's probably the slowest recursive implementation possible.
/// </summary>
static int fib(int n)
{
    if (n == 0 || n == 1)
    {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}