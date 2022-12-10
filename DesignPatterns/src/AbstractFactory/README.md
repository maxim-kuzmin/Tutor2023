# Паттерн "Абстрактная фабрика" (Abstract Factory)

## Описание

Создание семейства взаимосвязанных объектов в виде экземпляров их интерфейсов.

## Участники

**FirstProduct** // Первый продукт

**SecondProduct** // Второй продукт

**AbstractFactory** // Абстрактная фабрика

	(+) CreateFirstProduct(): FirstProduct

	(+) CreateSecondProduct(): SecondProduct

**FirstKindFirstProduct: FirstProduct** // Первый продукт первого семейства

**FirstKindSecondProduct: SecondProduct** // Второй продукт первого семейства

**FirstKindFactory: AbstractFactory** // Фабрика для создания первого семейства продуктов

	(+) CreateFirstProduct(): FirstProduct

		return new FirstKindFirstProduct()

	(+) CreateSecondProduct(): SecondProduct

		return new FirstKindSecondProduct()

**SecondKindFirstProduct: FirstProduct** // Первый продукт второго семейства

**SecondKindSecondProduct: SecondProduct** // Второй продукт второго семейства

**SecondKindFactory: AbstractFactory** // Фабрика для создания второго семейства продуктов

	(+) CreateFirstProduct(): FirstProduct

		return new SecondKindFirstProduct()

	(+) CreateSecondProduct(): SecondProduct

		return new SecondKindSecondProduct()

**Client**

	(-) firstProduct: FirstProduct

	(-) secondProduct: SecondProduct

	(+) (factory: AbstractFactory)

		.firstProduct = factory.CreateFirstProduct()

		.secondProduct = factory.CreateSecondProduct()

	(+) Run()

		Console.WriteLine(.firstProduct)

		Console.WriteLine(.secondProduct)

## Пример

Автомобильный завод (AbstractFactory) может выпускать грузовые (FirstProduct) и легковые (SecondProduct) автомобили.

Автомобильные заводы могут принадлежать разным компаниям: FirstKindFactory и SecondKindFactory.

Автомобильный завод компании FirstKindFactory выпускает свои грузовые (FirstKindFirstProduct) и легковые (FirstKindSecondProduct) автомобили, а автомобильный завод компании SecondKindFactory свои: SecondKindFirstProduct и SecondKindSecondProduct.

Официальный дилер компании (Client) получает автомобили с её автомобильного завода (AbstractFactory).

