# Паттерн "Наблюдатель" (Observer)

## Описание

Оповещение одним объектом других о возникновении некоего события, чтобы другие объекты могли вовремя на него отреагировать.

## Участники

**Observer** // Наблюдатель

    (+) Update()

**ConcreteObserver: Observer** // Конкретный наблюдатель

    (+) Update()

        Console.WriteLine("Observer updated")

**Observable** // Наблюдаемый

    (+) AddObserver(observer: Observer)

    (+) NotifyObservers()

    (+) RemoveObserver(observer: Observer)

**ConcreteObservable: Observable** // Кокретный наблюдаемый

    (-) observers: List<Observer> = new()

    (+) AddObserver(observer: Observer)

        .observers.Add(observer)

    (+) NotifyObservers()

        (foreach observer in .observers).Update()

    (+) RemoveObserver(observer: Observer)

        .observers.Remove(observer)

**Program**

    (-) Main()

        Observer firstObserver = new ConcreteObserver()

        Observer secondObserver = new ConcreteObserver()

        Observable observable = new ConcreteObservable()

        observable.AddObserver(firstObserver)

        observable.AddObserver(secondObserver)

        observable.NotifyObservers()

## Пример

Начальник (Observable) отдаёт приказ сразу всем своим подчинённым (Observer).

