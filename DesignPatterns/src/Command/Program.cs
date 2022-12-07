// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var receiver = new Receiver();

var firstCommand = new FirstCommand(receiver);
var secondCommand = new SecondCommand(receiver);
var macroCommand = new MacroCommand(new ICommand[] { firstCommand, secondCommand });

var invoker = new Invoker();

Invoke(invoker, firstCommand);
Invoke(invoker, secondCommand);
Invoke(invoker, macroCommand);

void Invoke(Invoker invocker, ICommand command)
{
    invocker.SetCommand(command);
    invocker.Run();
    invocker.Cancel();
    Console.WriteLine();
}
