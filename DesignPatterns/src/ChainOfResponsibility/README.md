# Паттерн "Цепочка обязанностей" (Chain of responsibility)

## Описание

Передача запроса одному из нескольких обработчиков в том случае, когда неважно, кто в действительности обработает запрос, и когда количество обработчиков может меняться.

Для этого обработчики выстаиваются в цепочку и запрос передаётся вдоль всей цепочки до тех пор, пока не будет обработан одним из её звеньев, либо не будет достигнут её конец.

## Участники

**Handler** // Обработчик

    (+) Handle(request: object)

**ConcreteHandler: Handler** // Конкретный обработчик

    (-) successor?: Handler // Преемник

    (+) (successor?: Handler)
    
        .successor = successor
    
    (+) Handle(request: object)

        use request or .successor.Handle(request)
        
**Client** // Клиент

    (-) Main()
    
        Handler h1 = new ConcreteHandler1()
    
        Handler h2 = new ConcreteHandler2(h1)
    
        object request = new() { … }
    
        h2.Handle(request)

## Пример

Руководитель (Client) передаёт Приказ (Request) вниз по иерархии своих Подчинённых (Handler), каждый из которых имеет ровно по одному Подчинённому (Successor), либо не имеет такового.

Если Подчинённый не может выполнить Приказ, он передаёт его своему Подчинённому.
