// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

using Prototype.Parts;
using Prototype.Parts.Prototypes;

var firstPrototypeData = new PrototypeData
{
    Prop1 = "111",
    Prop2 = "222"
};

var firstPrototype = new FirstPrototype(firstPrototypeData);

var secondPrototypeData = new PrototypeData
{
    Prop1 = "333",
    Prop2 = "444"
};

var secondPrototype = new SecondPrototype(secondPrototypeData);

IPrototype firstPrototypeClone = firstPrototype.Clone();
IPrototype secondPrototypeClone = secondPrototype.Clone();

Show("Originals:", firstPrototype, secondPrototype);
Show("Clones:", firstPrototypeClone, secondPrototypeClone);

void Show(string title, IPrototype firstPrototype, IPrototype secondPrototype)
{
    Console.WriteLine(title);

    firstPrototype.Show();
    secondPrototype.Show();
    
    Console.WriteLine();
}
