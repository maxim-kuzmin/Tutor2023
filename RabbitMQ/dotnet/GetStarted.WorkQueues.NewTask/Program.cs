﻿// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

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
    durable: true,
    exclusive: false,
    autoDelete: false,
    arguments: null);

string message = GetMessage(args);

byte[] body = Encoding.UTF8.GetBytes(message);

var basicProperties = channel.CreateBasicProperties();

basicProperties.Persistent = true;

channel.BasicPublish(
    exchange: "",
    routingKey: localConfig.Queue,
    basicProperties: basicProperties,
    body: body);

Console.WriteLine(" [x] Sent {0}", message);

Console.WriteLine(" Press [enter] to exit.");

Console.ReadLine();

static string GetMessage(string[] args)
{
    return (args.Length > 0) ? string.Join(" ", args) : "Hello World!";
}
