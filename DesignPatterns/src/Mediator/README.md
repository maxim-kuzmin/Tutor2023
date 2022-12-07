# Паттерн "Посредник" (Mediator)

## Описание

Взаимодействие множества объектов не напрямую, а через специально выделенный объект - посредник.

Посредник принимает сообщения от желающих взаимодействовать друг с другом объектов - коллег.

В зависимости от того, какой коллега прислал сообщение, посредник принимает решение о передаче его другим коллегам.

Это позволяет коллегам не подозревать о существовании друг друга и упростить логику взаимодействия между ними, сосредоточив её в одном месте - в посреднике.

## Участники

**Colleague** // Коллега

    (+) Notify(message: string)

**Mediator** // Посредник

    (+) Send(message: string, colleague: Colleague)

**ConcreteColleague: Colleague** // Конкретный коллега

    (-) mediator: Mediator

    (+) (mediator: Mediator)
        
        .mediator = mediator

    (+) Notify(message: string)

        use message

    (+) Send(message: string)
        
        .mediator.Send(message, .)

**ConcreteMediator: Mediator** // Конкретный посредник

    (+) Colleague1: ConcreteColleague1

    (+) Colleague2: ConcreteColleague1

    (+) Send(message: string, colleague: Colleague)

        (one of .Colleague1 or .Colleague2 which != colleague).Notify(message)

**Client**

    (-) Main()

        Mediator mediator = new ConcreteMediator()

        Colleague colleague1 = new ConcreteColleague1()

        Colleague colleague2 = new ConcreteColleague2()

        mediator.Colleague1 = colleague1

        mediator.Colleague2 = colleague2

        colleague1.Send("message from colleague1")

        colleague2.Send("message from colleague2")

## Пример

Менеджер (Mediator) берёт на себя коммуникации между исполнителями (Colleague), которые не подозревают о существовании друг друга.