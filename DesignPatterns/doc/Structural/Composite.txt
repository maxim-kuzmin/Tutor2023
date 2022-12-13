# Паттерн "Компоновщик" (Composite)

## Описание

Объединяет объекты в древовидную структуру.

## Участники

**Component** // Компонент

	(+) Name: string

	(+) (name: string)

		.Name = name

	(+) Add(component: Component)

	(+) Display()

		Console.WriteLine(.Name)

	(+) Remove(component: Component)

**CompositeComponent** // Составной компонент

	(-) children: List<Component> = new()

	(+) Add(component: Component)

		.children.Add(component)

	(+) Display()

		base.Display()

		(foreach component in components).Display()

	(+) Remove(component: Component)

		.children.Remove(component)

**LeafComponent** // Листовой компонент

	(+) Add(component: Component)

		empty

	(+) Remove(component: Component)

		empty

**Client** // Клиент

	(-) Main()

		Component root = new CompositeComponent("root")

		Component node1 = new CompositeComponent("1")

		Component node2 = new CompositeComponent("2")
		
		Component node3 = new LeafComponent("3")

		root.Add(node1)

		root.Add(node2)
		
		root.Add(node3)

		Component node11 = new CompositeComponent("1.1")

		Component node12 = new CompositeComponent("1.2")

		Component node21 = new CompositeComponent("2.1")
		
		Component node22 = new CompositeComponent("2.2")

		node1.Add(node11)

		node1.Add(node12)

		node2.Add(node21)

		node2.Add(node22)

		root.Display()

## Пример

Воинские подразделения (Component) имеют древовидную структуру.

Рота (CompositeComponent) состоит взводов (CompositeComponent), взводы состоят из отделений (CompositeComponent), отделение состоит из солдат (LeafComponent).

Роты формируются в штабе батальона (Client).