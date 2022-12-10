# Паттерн "Хранитель" (Memento)

## Описание

Извлечение внутреннего состояние объекта для последующего сохранения во внешнем хранилище и возможного восстановления внутреннего состояния объекта из внешнего хранилища.

## Участники

**Memento** // Хранитель (напоминание)

    (+) State: string

    (+) (state: string)

        .state = state

**Originator** // Создатель (автор)

    (-) state: string // Внутреннее состояние

    (+) CreateMemento(): Memento

        return new Memento(.state)

    (+) SetMemento(memento: Memento)

        .state = memento.State

    (+) ChangeState()

        .state = Guid.NewGuid().ToString()

    (+) ShowState()

        Console.WriteLine(.state)

**Caretaker: Stack<Memento>** // Смотритель

**Program**

    (-) Main()

        Caretaker caretacker = new Caretaker()

        Originator originator = new Originator()

        originator.ChangeState()

        Memento memento = originator.CreateMemento()

        caretacker.Push(memento)

        originator.ChangeState()

        originator.ShowState()

        memento = caretacker.Pop()

        originator.SetMemento(memento)

        originator.ShowState()

## Пример

База данных (Originator) периодически нуждается в сохранении своего внутреннего состояния в виде резервной копии (Memento), которая сохраняется в архиве (Caretacker). В случае необходимости база данных может быть восстановлена из резервной копии, взятой из архива.