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

channel.ExchangeDeclare(
    exchange: localConfig.Exchange,
    type: ExchangeType.Topic);

string routingKey = (args.Length > 0) ? args[0] : "anonymous.info";

string message = (args.Length > 1) ? string.Join(" ", args.Skip(1).ToArray()) : "Hello World!";

byte[] body = Encoding.UTF8.GetBytes(message);

channel.BasicPublish(
    exchange: localConfig.Exchange,
    routingKey: routingKey,
    basicProperties: null,
    body: body);

Console.WriteLine(" [x] Sent '{0}':'{1}'", routingKey, message);

