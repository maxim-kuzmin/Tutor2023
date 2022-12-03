// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

object[] items = new object[] { 1, 2, 3 };

IAggregate forwardAggregate = new ForwardAggregate(items);
IAggregate reverseAggregate = new ReverseAggregate(items);

IIterator forwardIterator = forwardAggregate.CreateIterator();
IIterator reverseIterator = reverseAggregate.CreateIterator();

Iterate(forwardIterator);
Iterate(reverseIterator);

forwardIterator.First();
reverseIterator.First();

Iterate(forwardIterator);
Iterate(reverseIterator);

void Iterate(IIterator iterator)
{
    while (!iterator.IsDone)
    {
        Console.WriteLine(iterator.Current);

        iterator.Next();
    }

    Console.WriteLine(iterator.Current);

    Console.WriteLine();
}
