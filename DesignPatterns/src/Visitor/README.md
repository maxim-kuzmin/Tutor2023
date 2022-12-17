# Паттерн "Посетитель" (Visitor)

## Описание

Добавление объекту новой операции без внесения в него изменений.

## Участники

**Element** // Элемент

    (+) Accept(visitor: Visitor)

**FirstElement: Element** // Первый элемент

    (+) Accept(visitor: Visitor)

        visitor.VisitFirstElement(.)

**SecondElement: Element** // Второй элемент

    (+) Accept(visitor: Visitor)

        visitor.VisitSecondElement(.)

**Visitor** // Посетитель

    (+) VisitFirstElement(element: FirstElement)

    (+) VisitSecondElement(element: SecondElement)

**FirstVisitor: Visitor** // Первый посетитель

    (+) VisitFirstElement(element: FirstElement)

        Console.WriteLine("FirstVisitor - FirstElement")

    (+) VisitSecondElement(element: SecondElement)

        Console.WriteLine("FirstVisitor - SecondElement")

**SecondVisitor: Visitor** // Второй посетитель

    (+) VisitFirstElement(element: FirstElement)

        Console.WriteLine("SecondVisitor - FirstElement")

    (+) VisitSecondElement(element: SecondElement)

        Console.WriteLine("SecondVisitor - SecondElement")

**ObjectStructure** // Структура объектов

    (-) elements: List<Element> = new()

    (+) Accept(visitor: Visitor)

        (foreach element in elements).Accept(visitor)

    (+) Add(element: Element)

        .elements.Add(element)

    (+) Remove(element: Element)

        .elements.Remove(element)

**Client** // Клиент

    (-) Main()

        ObjectStructure objectStructure = new ObjectStructure()

        Element firstElement = new FirstElement()

        Element secondElement = new SecondElement()

        Visitor firstVisitor = new FirstVisitor()

        Visitor secondVisitor = new SecondVisitor()

        objectStructure.Add(firstElement)

        objectStructure.Add(secondElement)

        objectStructure.Accept(firstVisitor)

        objectStructure.Accept(secondVisitor)

        objectStructure.Remove(firstElement)

        objectStructure.Accept(firstVisitor)

        objectStructure.Accept(secondVisitor)

## Пример

Для двух типов документов (Element) - кассовый чек (FirstElement) и товарный чек (SecondElement), хранящихся в архиве (ObjectStructure), нужно получить представление (Visitor) в двух форматах - XML (FirstVisitor) и JSON (SecondVisitor).