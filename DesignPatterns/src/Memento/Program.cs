// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var caretacker = new Caretacker();

var originator = new Originator();

originator.ChangeState();

originator.ShowState();

var memento = originator.CreateMemento();

caretacker.Push(memento);

originator.ChangeState();

originator.ShowState();

memento = caretacker.Pop();

originator.SetMemento(memento);

originator.ShowState();
