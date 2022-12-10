// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IObserver firstObserver = new FirstObserver();
IObserver secondObserver = new SecondObserver();

var observable = new Observable();

observable.AddObserver(firstObserver);
observable.AddObserver(secondObserver);

observable.NotifyObservers();