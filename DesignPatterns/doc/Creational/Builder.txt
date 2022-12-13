# Паттерн "Строитель" (Builder)

## Описание

Построение объектов по сложному алгоритму.

## Участники

**Product** // Продукт

    FirstPart: string

    SecondPart: string

**Builder** // Строитель

    (+) BuildFirstPart()

    (+) BuildSecondPart()

    (+) GetResult(): Product

**ConcreteBuilder: Builder** // Конкретный строитель
    
    (-) result: Product = new()

    (+) BuildFirstPart()

        .result.FirstPart = "ConcreteBuilder - BuildFirstPart"

    (+) BuildSecondPart()

        .result.SecondPart = "ConcreteBuilder - BuildSecondPart"

    (+) GetResult(): Product

        return .result

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

Строитель (Builder) строит дом (Product) на фабрике (Director) по частям.

Каждый строитель (ConcreteBuilder) строит каждую из частей дома так, как умеет.