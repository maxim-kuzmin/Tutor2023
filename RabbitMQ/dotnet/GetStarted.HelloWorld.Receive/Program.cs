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

var consumer = new EventingBasicConsumer(channel);

consumer.Received += (model, ea) =>
{
    byte[] body = ea.Body.ToArray();

    string message = Encoding.UTF8.GetString(body);

    Console.WriteLine(" [x] Received {0}", message);
};

channel.BasicConsume(
    queue: localConfig.Queue,
    autoAck: true,
    consumer: consumer);

Console.WriteLine(" Press [enter] to exit.");

Console.ReadLine();
