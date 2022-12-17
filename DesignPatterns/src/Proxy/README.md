# Паттерн "Заместитель" (Proxy)

## Описание

Замена объекта его фальшивой копией.

## Участники

**Subject** // Субъект

	(+) Request()

**RealSubject: Subject** // Настоящий субъект

	(+) Request()

		Console.WriteLine("RealSubject")

**ProxySubject: Subject** // Замещающий субъект

	(-) realSubject: Subject

	(+) Request()

		if realSubject not exists:
			
			.realSubject = new RealSubject()

		.realSubject.Request()

		Console.WriteLine("ProxySubject")

**Client** // Клиент

	(-) Main()

		Subject subject = new ProxySubject()

		subject.Request()

## Пример

Посетитель (Client) общается с работником (Subject) в должности секретаря (ProxySubject) до тех пор, пока не наступает момент принятия решения начальником (RealSubject).