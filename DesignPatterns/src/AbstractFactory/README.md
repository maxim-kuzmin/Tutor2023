# Паттерн "Абстрактная фабрика" (Abstract Factory)


## Описание

Создание семейства взаимосвязанных объектов в виде экземпляров их интерфейсов.

## Участники

**AbstractProductA** // Абстрактный продукт А

**FirstKindProductA: AbstractProductA** // Продукт А первого семейства

**SecondKindProductA: AbstractProductA** // Продукт А второго семейства

**AbstractProductB** // Абстрактный продукт Б

**FirstKindProductB: AbstractProductB** // Продукт Б первого семейства

**SecondKindProductB: AbstractProductB** // Продукт Б второго семейства

**AbstractFactory** // Абстрактная фабрика

	(+) CreateProductA(): AbstractProductA

	(+) CreateProductB(): AbstractProductB

**FirstKindConcreteFactory: AbstractFactory** // Конкретная фабрика для создания первого семейства продуктов

	(+) CreateProductA(): AbstractProductA

		return new FirstKindProductA()

	(+) CreateProductB(): AbstractProductB

		return new FirstKindProductB()

**SecondKindConcreteFactory: AbstractFactory** // Конкретная фабрика для создания второго семейства продуктов

	(+) CreateProductA(): AbstractProductA

		return new SecondKindProductA()

	(+) CreateProductB(): AbstractProductB

		return new SecondKindProductB()

**Client**

	(-) productA: AbstractProductA

	(-) productB: AbstractProductB

	(+) (factory: AbstractFactory)

		.productA = factory.CreateProductA()

		.productB = factory.CreateProductB()

	(+) Run()

		use .productA and .productB

## Пример

Автомобильный завод (AbstractFactory) может выпускать грузовые (AbstractProductA) и легковые (AbstractProductA) автомобили.

Автомобильные заводы могут принадлежать разным компаниям: FirstKindConcreteFactory и SecondKindConcreteFactory.

Автомобильный завод компании FirstKindConcreteFactory выпускает свои грузовые (FirstKindProductA) и легковые (FirstKindProductB) автомобили, а автомобильный завод компании SecondKindConcreteFactory свои: SecondKindProductA и SecondKindProductB.

Официальный дилер компании (Client) получает автомобили с её автомобильного завода (AbstractFactory).

