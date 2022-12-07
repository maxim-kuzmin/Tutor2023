// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var context = new Context();

const string x_expression_name = "x";
const string y_expression_name = "y";
const string z_expression_name = "z";

context.AddValue(x_expression_name, 10);
context.AddValue(y_expression_name, 2);
context.AddValue(z_expression_name, 3);

IExpression x = new TerminalExpression(x_expression_name);
IExpression y = new TerminalExpression(y_expression_name);
IExpression z = new TerminalExpression(z_expression_name);

IExpression x_plus_y = new PlusOperationNonTerminalExpression(x, y);
IExpression x_plus_y_minus_z = new MinusOperationNonTerminalExpression(x_plus_y, z);

int result = x_plus_y_minus_z.Interpret(context);

Console.WriteLine(result);