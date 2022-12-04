// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IObserver firstObserver = new FirstObserver();
IObserver secondObserver = new SecondObserver();

var observable = new Observable();

observable.AddObserver(firstObserver);
observable.AddObserver(secondObserver);

observable.Data = "111";
observable.NotifyObservers();
Console.WriteLine();

observable.Data = "222";
observable.NotifyObservers();
Console.WriteLine();

observable.RemoveObserver(firstObserver);

observable.Data = "333";
observable.NotifyObservers();
Console.WriteLine();
