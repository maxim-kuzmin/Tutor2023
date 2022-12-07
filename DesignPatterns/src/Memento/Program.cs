// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var mementoHistory = new Stack<Memento.Parts.Memento>();

var originator = new Originator();

originator.ChangeState();

var memento = originator.CreateMemento();
Console.WriteLine(memento.State);
mementoHistory.Push(memento);

originator.ChangeState();

memento = originator.CreateMemento();
Console.WriteLine(memento.State);
mementoHistory.Push(memento);

originator.SetMemento(mementoHistory.Pop());
memento = originator.CreateMemento();
Console.WriteLine(memento.State);

originator.SetMemento(mementoHistory.Pop());
memento = originator.CreateMemento();
Console.WriteLine(memento.State);
