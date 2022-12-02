// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var context = new Context();

const string x_variable_name = "x";
const string y_variable_name = "y";
const string z_variable_name = "z";

context.AddVariableValue(x_variable_name, 10);
context.AddVariableValue(y_variable_name, 2);
context.AddVariableValue(z_variable_name, 3);

IExpression x = new VariableTerminalExpression(x_variable_name);
IExpression y = new VariableTerminalExpression(y_variable_name);
IExpression z = new VariableTerminalExpression(z_variable_name);

IExpression x_plus_y = new PlusOperationNonTerminalExpression(x, y);
IExpression x_plus_y_minus_z = new MinusOperationNonTerminalExpression(x_plus_y, z);

int result = x_plus_y_minus_z.Interpret(context);

Console.WriteLine(result);