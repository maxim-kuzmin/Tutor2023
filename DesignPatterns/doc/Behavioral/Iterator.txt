# Паттерн "Итератор" (Iterator)

## Описание

Последовательный доступ к элементам составного объекта без раскрытия его внутренней структуры.

Алгоритм перебора сосредоточен в отдельном объекте - итераторе, который имеет доступ к составному объекту - агрегату.

За создание итератора отвечает сам агрегат.

При создании агрегата в него передаётся набор элементов, которые необходимо перебрать.

Перебор этих элементов можно осуществлять разными способами в зависимости от выбранного агрегата.

## Участники

**Iterator** // Итератор (перечислитель)

    (+) Current(): object

    (+) First(): object

    (+) IsDone(): bool

    (+) Next(): object

**Aggregate** // Агрегат (составной объект)

    (+) get Count: int
        
    (+) GetItemByIndex(index: int): object

    (+) GetIterator(): Iterator

**ConcreteIterator** // Конкретный итератор

    (-) aggregate: Aggregate

    (-) currentIndex: int

    (+) (aggregate: Aggregate)

        .aggregate = aggregate

        .currentIndex = 0

    (+) Current(): object

        return .aggregate.GetItemByIndex(.currentIndex)

    (+) First(): object

        return .aggregate.GetItemByIndex(0)

    (+) IsDone(): bool

        return .currentIndex == .aggregate.Count - 1

    (+) Next(): object

        return .aggregate.GetItemByIndex(++.currentIndex)

**ConcreteAggregate: Aggregate** // Конкретный агрегат

    (-) items: object[]

    (+) get Count: int

        return items.Length

    (+) (items: object[])

        .items = items

    (+) GetIterator(): Iterator

        return new ConcreteIterator(.)        

**Client** // Клиент

    (-) Main()

        object[] items = new object [] {...}

        Aggregate aggregate = new ConcreteAggregate(items)

        Iterator iterator = aggregate.GetIterator();

        object firstItem = iterator.First()

        while (!iterator.IsDone())
        {
            object nextItem = iterator.Next()
        }

        object lastItem = iterator.Current()

## Пример

Библиотека (Aggregate) содержит книги (Набор элементов), которые можно перебрать с помощью каталога (Iterator).