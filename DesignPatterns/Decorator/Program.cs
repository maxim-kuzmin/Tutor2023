// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.


IComponent firstComponent = new FirstComponent();
IComponent secondComponent = new SecondComponent();

Show(new FirstDecorator(firstComponent), secondComponent);

Console.WriteLine();
Console.WriteLine("-----------");
Console.WriteLine();

Show(new SecondDecorator(firstComponent), secondComponent);

static void Show(Decorator.Parts.Decorator decorator, IComponent secondComponent)
{
    decorator.Operation();

    Console.WriteLine();

    decorator.SetComponent(secondComponent);

    decorator.Operation();

    Console.WriteLine();

    decorator.SetComponent(null);

    decorator.Operation();
}
