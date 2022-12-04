// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var receiver = new Receiver();

var firstCommand = new FirstCommand(receiver);
var secondCommand = new SecondCommand(receiver);
var macroCommand = new MacroCommand(new ICommand[] { firstCommand, secondCommand });

var invocker = new Invoker();

Invoke(invocker, firstCommand);
Invoke(invocker, secondCommand);
Invoke(invocker, macroCommand);

void Invoke(Invoker invocker, ICommand command)
{
    invocker.SetCommand(command);
    invocker.Run();
    invocker.Cancel();
    Console.WriteLine();
}
