# Паттерн "Фасад" (Facade)

## Описание

Позволяет скрыть сложность системы, предоставляя упрощённый интерфейс для взаимодействия с ней.

## Участники

**FirstSubsystem** // Первая подсистема

	(+) Operation1()

		Console.WriteLine("FirstSubsystem - Operation1")

	(+) Operation2()

		Console.WriteLine("FirstSubsystem - Operation2")

**SecondSubsystem** // Вторая подсистема

	(+) Operation1()

		Console.WriteLine("SecondSubsystem - Operation1")

	(+) Operation2()

		Console.WriteLine("SecondSubsystem - Operation2")

**Facade** // Фасад

	(-) firstSubsystem: FirstSubsystem

	(-) secondSubsystem: SecondSubsystem

	(+) (firstSubsystem: FirstSubsystem, secondSubsystem: SecondSubsystem)

		.firstSubsystem = firstSubsystem

		.secondSubsystem = secondSubsystem

	(+) Operation()

		Console.WriteLine("Facade - Operation")

		firstSubsystem.Operation()

		secondSubsystem.Operation()

**Client** // Клиент

	(-) Main()

		FirstSubsystem firstSubsystem = new FirstSubsystem()

		SecondSubsystem secondSubsystem = new SecondSubsystem()

		Facade facade = new Facade(firstSubsystem, secondSubsystem)

		facade.Operation()		

## Пример

Правоохранительная система состоит из множества учреждений (Subsystem) - отделов (FirstSubsystem) и опорных пунктов (SecondSubsystem) полиции.

Жертва преступления (Client) не должен помнить телефон каждого из них, так как есть "Служба 02" (Facade), принимающая звонки по единому телефонному номеру и организующая помощь позвонившему, самостоятельно связываясь с тем полицейским учреждением, которое способно оказать помощь как можно быстрее. 