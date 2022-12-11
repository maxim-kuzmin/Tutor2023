# Паттерн "Декоратор" (Decorator)

## Описание

Расширение или сужение функциональных возможностей объектов в процессе выполнения программы.

## Участники

**Component**

	(+) Operation()

**FirstComponent: Component**

	(+) Operation()

		Console.WriteLine("FirstComponent")

**SecondComponent: Component**

	(+) Operation()

		Console.WriteLine("SecondComponent")

**Decorator: Component**

	(-) component: Component

	(+) (component: Component)

		.SetComponent(component)

	(+) Operation()

		.component.Operation()

	(+) SetComponent(component: Component)

		.component = component

**FirstDecorator: Decorator**

	(+) Operation()

		base.Operation()

		Console.WriteLine("FirstDecorator")

**SecondDecorator: Decorator**

	(+) Operation()

		base.Operation()

		Console.WriteLine("SecondDecorator")

## Пример

Воинское подразделение (Component) может быть сводным (Decorator), то есть укомплектованным под определённую задачу другими воинскими подразделениями.

Минёрами (FirstComponent) и снайперами (SecondComponent) могут быть укомплектованы сводные отряды десантников (FirstDecorator) и морских пехотинцев (SecondDecorator).