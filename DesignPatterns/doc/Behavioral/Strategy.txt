# Паттерн "Стратегия" (Strategy)

## Описание

Замена одной реализации алгоритма на другую в процессе выполнения программы.

## Участники

**Strategy** // Стратегия

    (+) Alghoritm()

**FirstStrategy: Strategy** // Первая стратегия

    (+) Alghoritm()

        Console.WriteLine("First strategy")

**SecondStrategy: Strategy** // Вторая стратегия

    (+) Alghoritm()

        Console.WriteLine("Second strategy")

**Context** // Контекст

    (+) Strategy: Strategy

    (+) SetStrategy(strategy: Strategy)

        .Strategy = strategy

    (+) ExecuteAlghoritm()

        .strategy.Alghoritm()

**Program**

    (-) Main()

        Strategy firstStrategy = new FirstStrategy()

        Strategy secondStrategy = new SecondStrategy()

        Context context = new Context(firstStrategy)

        context.ExecuteAlghoritm()

        context.Strategy = secondStrategy

        context.ExecuteAlghoritm()
        
## Пример

Коллекция (Context) может использовать разные алгоритмы сотрировки (Strategy).
