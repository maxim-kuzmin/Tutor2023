# Паттерн "Интерпретатор" (Interpreter)

## Описание

Получение результата вычислений в иерархическом дереве выражений.

Выражения, которые размещаются в листовых узлах дерева, называются терминальными (terminal), остальные – нетерминальными (non terminal).

Выражение в каждом узле дерева вычисляет свой результат на основе результатов, полученных от вычисления выражений в его дочерних узлах.

Результат вычисления выражения в корне дерева является конечным результатом вычисления всего дерева выражений.

Значения, необходимые для вычислений, хранятся в контексте – специальном классе, предоставляющем возможность добавления и получения этих значений.

При вычислении результата выражения получают доступ к контексту.

## Участники

**Context** // Контекст

	(-) valueLookup: Dictionary<string, int> = new()

	(+) AddValue(name: string, value: int)
		
		.valueLookup[name] = value
	
	(+) GetValue(name: string): int
		
		return .valueLookup[name]

**Expression** // Выражение

	(+) Interpret(context: Context): int

**TerminalExpression: Expression** // Терминальное выражение

	(-) name: string

	(+) (name: string)
		
		.name = name
	
	(+) Interpret(context: Context): int
		
		return context.GetValue(.name)

**NonTerminalExpression: Expression** // Нетерминальное выражение

	(-) expression1: Expression
	
	(-) expression2: Expression
	
	(+) (expression1: Expression, expression2: Expression)
		
		.expression1 = expression1
	
		.expression2 = expression2
	
	(+) Interpret(context: Context): int
	
		return .expression1.Interpret(context) + .expression2.Interpret(context)

**Client** // Клиент

	Main()
	
		Context context = new Context()

		context.AddValue(“x”, 1)
		
		context.AddValue(“y”, 2)
		
		Expression x = new TerminalExpression(“x”)
		
		Expression y = new TerminalExpression(“y”)
		
		Expression x_plus_y = new NonTerminalExptrssion(x, y)
		
		int result = x_plus_y.Interpret(context)

## Пример

Электронная таблица (Client) вычисляет арифметическое выражение (Expression) в виде формулы "x + y – z", частями которой являются операции "+" и "-" (NonTerminalExpression) и переменные "x", "y" и "z" (TerminalExpression), значения которых хранятся в ячейках таблицы (Context).