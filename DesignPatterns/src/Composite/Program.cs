// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

Component root = new CompositeComponent("root");

Component node1 = new CompositeComponent("1");
Component node2 = new CompositeComponent("2");
Component node3 = new LeafComponent("3");

root.Add(node1);
root.Add(node2);
root.Add(node3);

Component node11 = new CompositeComponent("1.1");
Component node12 = new CompositeComponent("1.2");

Component node21 = new CompositeComponent("2.1");
Component node22 = new CompositeComponent("2.2");

node1.Add(node11);
node1.Add(node12);

node2.Add(node21);
node2.Add(node22);

root.Display();