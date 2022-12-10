// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IFactory firstKindFactory = new FirstKindFactory();
IFactory secondKindFactory = new SecondKindFactory();

Client firstKindClient = new Client(firstKindFactory);
Client secondKindClient = new Client(secondKindFactory);

firstKindClient.Run();

Console.WriteLine();

secondKindClient.Run();