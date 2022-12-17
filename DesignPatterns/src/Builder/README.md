# Паттерн "Строитель" (Builder)

## Описание

Построение объектов по сложному алгоритму.

## Участники

**Product** // Продукт

    FirstPart: string

    SecondPart: string

**Builder** // Строитель

    (+) get Result: Product = new()

    (+) BuildFirstPart()

    (+) BuildSecondPart()

**ConcreteBuilder: Builder** // Конкретный строитель
    
    (+) BuildFirstPart()

        .Result.FirstPart = "ConcreteBuilder - BuildFirstPart"

    (+) BuildSecondPart()

        .Result.SecondPart = "ConcreteBuilder - BuildSecondPart"

**Director** // Распорядитель

    (-) builder: Builder

    (+) (builder: Builder)

        .builder = builder

    (+) Construct()

        .builder.BuildFirstPart()

        .builder.BuildSecondPart()

**Program**

    (-) Main()
            
        Builder builder = new ConcreteBuilder()

        Director director = new Director(builder)

        director.Construct()

        Console.WriteLine(builder.Result);

## Пример

Строитель (Builder) строит дом (Product) на стройплощадке (Director) по частям.

Каждый строитель (ConcreteBuilder) строит каждую из частей дома так, как умеет.