# Паттерн "Команда" (Command)

## Описание

Обработка запроса на выполнение определённого действия через посредника, называемого командой.

Получатель запроса является инициатором команды, а обработчик запроса - её получателем.

Команда может позволять не только выполнять действия, но и отменять их, а также может содержать в себе несколько команд, которые выполняются и отменяются по очереди.

Команда, содержащая несколько команд, называется макрокомандой.Она имеет тот же интерфейс, что и другие команды. 

## Участники

**Receiver** // Получатель команды

	(+) ExecuteOperation()
	
	(+) UndoOperation()

**Command** // Команда

	(+) Execute() 
	
	(+) Undo()

**ConcreteCommand: Command** // Конкретная команда

    (-) receiver: Receiver
	
	(+) (receiver: Receiver)

		.receiver = receiver

	(+) Execute() 

		.receiver.ExecuteOperation()

	(+) Undo()
		
		.receiver.UndoOperation()
	
**MacroCommand: Command** // Макрокоманда

    (-) commands: Command[] 

	(+) (commands: Command[])
		
		.commands = commands

	(+) Execute()

		(foreach command in .commands).Execute()

	(+) Undo()

		(foreach command in .commands).Undo()

**Invoker** // Инициатор команды

    (-) command: Command

    (+) SetCommand(command: Command)

        .command = command
    
	(+) Run()
    
	    .command.Execute()
    
	(+) Cancel()
    
	    .command.Undo()

**Client** // Клиент

	(-) Main()
	
		Receiver receiver = new Receiver()
	
		Command command = new ConcreteCommand(receiver)
	
		Invoker invoker = new Invoker()
	
		invoker.SetCommand(command)
	
		invoker.Run()
	
		invoker.Cancel()
	
		Command macroCommand = new MacroCommand([command])
	
		invoker.Run()
	
		invoker.Cancel()

## Пример

Кнопка включения/выключения пульта управления (Invoker) может быть настроена для разных моделей телевизоров (Receiver) с помощью инструкции (Command) по работе с конкретной моделью телевизора.

В инструкциях по настройке телевизоров каждой из моделей есть разделы "Включение" и "Выключение", где описывается, какой набор сигналов нужно подать на вход телевизора, чтобы он выполнил указанное действие.


