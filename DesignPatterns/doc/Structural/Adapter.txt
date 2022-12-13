# Паттерн "Адаптер" (Adapter)

## Описание

Используется для преобразования интерфейса одного класса в интерфейс другого.

## Участники

**Adaptee** // Адаптированное

	(+) SpecificRequest()

**Target** // Цель

	(+) Request()

**Adapter: Target** // Адаптер (переходник)

	(-) adaptee: Adaptee

	(+) (adaptee: Adaptee)

		.adaptee = adaptee

	(+) Request()
		
		.adaptee.SpecificRequest()

**Client** // Клиент

	(+) Request(target: Target)

		target.Request()

**Program**

	(-) Main()

		Adaptee adaptee = new Adaptee()

		Target adapter = new Adapter(adaptee)

		Client client = new Client()

		client.Request(adapter)

## Пример


Для общения с иностранцем (Target) по телефону (Client) нужен переводчик (Adapter).
