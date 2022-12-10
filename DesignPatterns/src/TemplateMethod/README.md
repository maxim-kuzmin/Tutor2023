# Паттерн "Шаблонный метод" (Template Method)

## Описание

Переопределение частей алгоритма в подклассе.

## Участники

**AbstractClass**

    (+) TemplateMethod()

        .FirstOperation()

        .SecondOperation()

    (-) FirstOperation()

    (-) SecondOperation()

**ConcreteClass: AbstractClass**

    (-) FirstOperation()

        Console.WriteLine("First operation")

    (-) SecondOperation()

        Console.WriteLine("Second operation")

**Program**

    AbstractClass instance = new ConcreteClass()

    instance.TemplateMethod()

## Пример

Этапы строительства дома (AbstractClass) одинаковы для деревянного и кирпичного зданий (ConcreteClass), но используемые материалы и техники строительства разные.

