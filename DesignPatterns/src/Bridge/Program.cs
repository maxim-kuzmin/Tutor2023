// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IImplementor firstImplementor = new FirstImplementor();
IImplementor secondImplementor = new SecondImplementor();

IAbstraction firstAbstraction = new FirstAbstraction(firstImplementor);
IAbstraction secondAbstraction = new SecondAbstraction(firstImplementor);

Show(firstAbstraction, secondImplementor);

Console.WriteLine();
Console.WriteLine("----------");
Console.WriteLine();

Show(secondAbstraction, secondImplementor);

static void Show(IAbstraction abstraction, IImplementor secondImplementor)
{
    abstraction.Operation();

    Console.WriteLine();

    abstraction.Implementor = secondImplementor;

    abstraction.Operation();
}