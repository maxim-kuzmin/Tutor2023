// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var flyweightFactory = new FlyweightFactory();

IFlyweight sharedFlyweight11 = flyweightFactory.GetFlyweight("First");
IFlyweight sharedFlyweight21 = flyweightFactory.GetFlyweight("Second");
IFlyweight sharedFlyweight31 = flyweightFactory.GetFlyweight("Third");

IFlyweight sharedFlyweight12 = flyweightFactory.GetFlyweight("First");
IFlyweight sharedFlyweight22 = flyweightFactory.GetFlyweight("Second");
IFlyweight sharedFlyweight32 = flyweightFactory.GetFlyweight("Third");

IFlyweight unshredFlyweight1 = new UnsharedFlyweight();
IFlyweight unshredFlyweight2 = new UnsharedFlyweight();

sharedFlyweight11.Operation("AAA");
sharedFlyweight21.Operation("BBB");
sharedFlyweight31.Operation("CCC");

Console.WriteLine();

sharedFlyweight12.Operation("DDD");
sharedFlyweight22.Operation("EEE");
sharedFlyweight32.Operation("FFF");

Console.WriteLine();

unshredFlyweight1.Operation("GGG");
unshredFlyweight2.Operation("HHH");
