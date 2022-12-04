// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

ICreator firstCreator = new FirstCreator();
ICreator secondCreator = new SecondCreator();

IProduct firstProduct = firstCreator.FactoryMethod();
IProduct secondProduct = secondCreator.FactoryMethod();

Console.WriteLine(firstProduct);
Console.WriteLine(secondProduct);