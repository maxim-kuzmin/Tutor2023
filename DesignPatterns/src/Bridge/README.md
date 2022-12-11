# Паттерн "Мост" (Bridge)

## Описание

Отделение абстракции от реализации таким образом, чтобы их можно было изменять независимо друг от друга.

## Участники

**Implementation** // Исполнитель (реализация)

	(+) Operation1()

	(+) Operation2()

**Abstraction** // Абстракция

	(+) Implementation: Implementation

	(+) (implementation: Implementation)

		.Implementation = implementation
	
	(+) Operation()

**FirstAbstraction: Abstraction** // Первая абстракция

	(+) Operation()

		Console.WriteLine("FirstAbstraction - Operation")

		.Implementation.Operation1()

		.Implementation.Operation2()

**SecondAbstraction: Abstraction** // Вторая абстракция

	(+) Operation()

		Console.WriteLine("SecondAbstraction - Operation")

		.Implementation.Operation2()

		.Implementation.Operation1()

**FirstImplementation** // Первый исполнитель

	(+) Operation1()

		Console.WriteLine("FirstImplementation - Operation1")

	(+) Operation2()

		Console.WriteLine("FirstImplementation - Operation2")

**SecondImplementation** // Второй исполнитель

	(+) Operation1()

		Console.WriteLine("SecondImplementation - Operation1")

	(+) Operation2()

		Console.WriteLine("SecondImplementation - Operation2")

**Client** // Клиент

	(-) Main()

		Implementation firstImplementation = new FirstImplementation()

		Implementation secondImplementation = new SecondImplementation()

		Abstraction firstAbstraction = new FirstAbstraction(firstImplementation)

		Abstraction secondAbstraction = new SecondAbstraction(firstImplementation)

		firstAbstraction.Operation()

		secondAbstraction.Operation()

		firstAbstraction.Implementation = secondImplementation

		secondAbstraction.Implementation = secondImplementation

		firstAbstraction.Operation()

		secondAbstraction.Operation()

## Пример

В клинике (Abstraction) работают врачи (Implementation). Они могут быть начинающие (FirstImplementation) и опытные (SecondImplementation).

Клиники бывают бесплатные (FirstAbstraction) и платные (SecondAbstraction).

Больной (Client) может обратиться в любую из них, но не факт, что в платной его будут лечить лучше, чем в бесплатной, так как многое зависит от опыта врача.