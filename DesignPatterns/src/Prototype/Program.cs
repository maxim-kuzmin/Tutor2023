// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

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

var client = new Client(firstPrototype, secondPrototype);

client.Operation();
