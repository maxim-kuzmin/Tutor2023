# Паттерн "Декоратор" (Decorator)

## Описание

Расширение или сужение функциональных возможностей объектов в процессе выполнения программы.

## Участники

**Component** // Компонент

	(+) Operation()

**FirstComponent: Component** // Первый  компонент

	(+) Operation()

		Console.WriteLine("FirstComponent")

**SecondComponent: Component** // Второй компонент

	(+) Operation()

		Console.WriteLine("SecondComponent")

**Decorator: Component** // Декоратор

	(-) component: Component

	(+) (component: Component)

		.SetComponent(component)

	(+) Operation()

		.component.Operation()

	(+) SetComponent(component: Component)

		.component = component

**FirstDecorator: Decorator** // Первый декоратор

	(+) Operation()

		base.Operation()

		Console.WriteLine("FirstDecorator")

**SecondDecorator: Decorator** // Второй декоратор

	(+) Operation()

		base.Operation()

		Console.WriteLine("SecondDecorator")

**Program**

	(-) Main()

		Component firstComponent = new FirstComponent()

		Component secondComponent = new SecondComponent()

		Decorator firstDecorator = new FirstDecorator(firstComponent)

		Decorator secondDecorator = new SecondDecorator(firstComponent)

		firstDecorator.Operation()

		secondDecorator.Operation()

		firstDecorator.SetComponent(secondComponent)

		secondDecorator.SetComponent(secondComponent)

		firstDecorator.Operation()

		secondDecorator.Operation()

## Пример

Воинское подразделение (Component) может быть сводным (Decorator), то есть укомплектованным под определённую задачу другими воинскими подразделениями.

Минёрами (FirstComponent) и снайперами (SecondComponent) могут быть укомплектованы сводные отряды десантников (FirstDecorator) и морских пехотинцев (SecondDecorator).