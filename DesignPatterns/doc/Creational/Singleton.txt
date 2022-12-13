# Паттерн "Одиночка" (Singleton)

## Описание

Получение гарантированно единственного экземпляра объекта, который создаётся в момент первого обращения к нему.

## Участники

**Singleton** // Одиночка

	**Nested** // Вложенный класс

		(-) static singleton = new Singleton()

		(+) static ()

	(+) get Instance: Singleton

		return Nested.singleton

	(-) ()

## Пример

Президент (Singleton) в стране должен быть только один.