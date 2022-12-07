// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IState firstState = new FirstState();

var context = new Context(firstState);

Console.WriteLine(context.State);

context.RequestTransferToSecondState();

Console.WriteLine(context.State);

context.RequestTransferToFirstState();

Console.WriteLine(context.State);
