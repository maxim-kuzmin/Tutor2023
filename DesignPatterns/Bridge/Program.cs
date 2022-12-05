// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IImplementor firstImplementor = new FirstImplementor();
IImplementor secondImplementor = new SecondImplementor();

Show(new FirstAbstraction(firstImplementor), secondImplementor);

Console.WriteLine();
Console.WriteLine("----------");
Console.WriteLine();

Show(new SecondAbstraction(firstImplementor), secondImplementor);

static void Show(Abstraction abstraction, IImplementor secondImplementor)
{
    abstraction.Operation();

    Console.WriteLine();

    abstraction.Implementor = secondImplementor;

    abstraction.Operation();
}