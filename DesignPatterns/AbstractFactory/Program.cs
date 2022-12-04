// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IFactory firstTypeFactory = new FirstTypeFactory();
IFactory secondTypeFactory = new SecondTypeFactory();

var firstTypeClient = new Client(firstTypeFactory);
var secondTypeClient = new Client(secondTypeFactory);

firstTypeClient.Run();

Console.WriteLine();

secondTypeClient.Run();