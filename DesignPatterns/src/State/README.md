# Паттерн "Состояние" (State)

## Описание

Перевод объекта из одного состояния в другое без анализа его текущего состояния.

## Участники

**State** // Состояние

    (+) HandleTransferToFirstState(context: Context)

    (+) HandleTransferToSecondState(context: Context)

**Context** // Контекст

    (+) State: State

    (+) (state: State)

        .state = state

    (+) RequestTransferToFirstState()

        .State.HandleTransferToFirstState(.)

    (+) RequestTransferToSecondState()

        .State.HandleTransferToSecondState(.)

**FirstState: State** // Первое состояние

    (+) HandleTransferToFirstState(context: Context)

        empty

    (+) HandleTransferToSecondState(context: Context)

        context.State = new SecondState()

        Console.WriteLine("State changed to second")

**SecondState: State** // Второе состояние

    (+) HandleTransferToFirstState(context: Context)

        context.State = new FirstState()

        Console.WriteLine("State changed to first")

    (+) HandleTransferToSecondState(context: Context)

        empty

**Program**

    (-) Main()

        State firstState = new FirstState()

        Context context = new ConcreteContext(firstState)

        context.RequestTransferToSecondState()

        context.RequestTransferToFirstState()

## Пример

Переход задачи (Context) из одного статуса (State) в другой.