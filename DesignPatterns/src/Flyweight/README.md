# Паттерн "Приспособленец" (Flyweight)

## Описание

Совместное использование объектов за счёт разделения их состояния на внутреннее и внешнее.

## Участники

**Flyweight** // Приспособленец

	(+) Operation(extrinsicState: string)

**SharedFlyweight** // Pазделяемый приспособленец

	(+) get IntrinsicState: string

	(+) (intrinsicState: string)

		.IntrinsicState = intrinsicState

	(+) Operation(extrinsicState: string)

		Console.WriteLine("SharedFlyweight: " + IntrinsicState + ": " + extrinsicState)

**UnsharedFlyweight** // Неразделяемый приспособленец

	(+) get AllState: string

	(+) Operation(extrinsicState: string)

		.AllState = extrinsicState

		Console.WriteLine("UnsharedFlyweight: " + .AllState)

**FirstSharedFlyweight: SharedFlyweight** // Первый разделяемый приспособленец

	(+) () : ("First")

**SecondSharedFlyweight: Flyweight** // Второй разделяемый приспособленец

	(+) () : ("Second")

**FlyweightFactory** // Фабрика приспособленцев

	(-) flyweightLookup: Dictionary<string, SharedFlyweight> = new()

	(+) ()

		flyweightLookup.Add("First", new FirstSharedFlyweight())

		flyweightLookup.Add("Second", new SecondSharedFlyweight())

	(+) GetFlyweight(key: string)

		if not exists .flyweightLookup[key]:

			.flyweightLookup.Add(key, new SharedFlyweight(key))

			Console.WriteLine("SharedFlyweight: " + key.IntrinsicState + " created")

		return .flyweightLookup[key]
	
**Client** // Клиент

	(-) Main()

		FlyweightFactory factory = new FlyweightFactory()

		Flyweight firstSharedFlyweight = factory.GetFlyweight("First")

		Flyweight secondSharedFlyweight = factory.GetFlyweight("Second")

		Flyweight thirdSharedFlyweight = factory.GetFlyweight("Third")

		firstSharedFlyweight.Operation()

		secondSharedFlyweight.Operation()

		thirdSharedFlyweight.Operation()
		
		Flyweight unsharedFlyweight = new UnsharedFlyweight()

		unsharedFlyweight.Operation()

## Пример

Буквы (Flyweight) в текстовом редакторе (Client) являются разделяемыми приспособленцами (SharedFlyweight), экземпляров которых создаётся ровно столько, сколько букв в алфавите, а при отображении текста в редакторе каждая следующая буква берётся из алфавита (FlyweightFactory) и отрисовывается в месте нахождения курсора.

Картинок (UnsharedFlyweight) может быть сколько угодно и они все разные, поэтому нет смысла составлять отдельную коллекцию для их хранения и многократного использования.