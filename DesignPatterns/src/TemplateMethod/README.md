# Паттерн "Шаблонный метод" (Template Method)

## Описание

Переопределение частей алгоритма в подклассе.

## Участники

**AbstractClass** // Абстрактный класс

    (+) TemplateMethod()

        .FirstOperation()

        .SecondOperation()

    (-) FirstOperation()

    (-) SecondOperation()

**ConcreteClass: AbstractClass** // Конкретный класс

    (-) FirstOperation()

        Console.WriteLine("First operation")

    (-) SecondOperation()

        Console.WriteLine("Second operation")

**Program**

    AbstractClass instance = new ConcreteClass()

    instance.TemplateMethod()

## Пример

Этапы строительства дома (AbstractClass) одинаковы для деревянного и кирпичного зданий (ConcreteClass), но используемые материалы и техники строительства разные.

