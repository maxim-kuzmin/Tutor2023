# Паттерн "Фабричный метод" (Factory Method)

## Описание

Создание экземпляра интерфейса объекта в подклассе.

## Участники

**Product** // Продукт

**FirstProduct: Product** // Первый продукт

**SecondProduct: Product** // Второй продукт

**Creator** // Создатель

	(+) CreateProduct(): Product

**FirstCreator: Creator** // Первый создатель

	(+) CreateProduct(): Product

		return new FirstProduct()

**SecondCreator: Creator** // Второй создатель

	(+) CreateProduct(): Product

		return new SecondProduct()

**Program**

	(-) Main()

		Creator firstCreator = new FirstCreator()

		Creator secondCreator = new SecondCreator()

		Product firstProduct = firstCreator.CreateProduct();

		Product secondProduct = secondCreator.CreateProduct();

		Console.WriteLine(firstProduct)

		Console.WriteLine(secondProduct)

## Пример

Дома (Product) могут быть деревянными (FirstProduct) и кирпичными (SecondProduct).

Одна строительная компания (Creator) специализируется на постройке деревянных (FirstCreator), а вторая на постройке кирпичных (SecondCreator) домов.