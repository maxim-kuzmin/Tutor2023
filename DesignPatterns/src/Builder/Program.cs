// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var firstBuilder = new FirstBuilder();
var secondBuilder = new SecondBuilder();

var firstDirector = new Director(firstBuilder);
var secondDirector = new Director(secondBuilder);

firstDirector.Construct();
secondDirector.Construct();

Show(firstBuilder.Result);
Show(secondBuilder.Result);

static void Show(Product product)
{
    Console.WriteLine(product.Prop1);
    Console.WriteLine(product.Prop2);
    Console.WriteLine(product.Prop3);

    Console.WriteLine();
}


