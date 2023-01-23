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

channel.ExchangeDeclare(
    exchange: localConfig.Exchange,
    type: ExchangeType.Direct);

// declare a server-named queue
string queueName = channel.QueueDeclare(queue: "").QueueName;

if (args.Length < 1)
{
    Console.Error.WriteLine("Usage: {0} [info] [warning] [error]", Environment.GetCommandLineArgs()[0]);

    Console.WriteLine(" Press [enter] to exit.");
    
    Console.ReadLine();
    
    Environment.ExitCode = 1;
    
    return;
}

foreach (string severity in args)
{
    channel.QueueBind(
        queue: queueName,
        exchange: localConfig.Exchange,
        routingKey: severity);
}

Console.WriteLine(" [*] Waiting for messages.");

var consumer = new EventingBasicConsumer(channel);

consumer.Received += (model, ea) =>
{
    byte[] body = ea.Body.ToArray();

    string message = Encoding.UTF8.GetString(body);

    string routingKey = ea.RoutingKey;

    Console.WriteLine(" [x] Received '{0}':'{1}'", routingKey, message);
};

channel.BasicConsume(
    queue: queueName,
    autoAck: true,
    consumer: consumer);

Console.WriteLine(" Press [enter] to exit.");

Console.ReadLine();