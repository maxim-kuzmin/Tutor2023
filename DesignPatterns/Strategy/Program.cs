// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IStrategy firstStrategy = new FirstStrategy();
IStrategy secondStrategy = new SecondStrategy();

var context = new Context(firstStrategy);

context.ExecuteAlghoritm();

context.Strategy = secondStrategy;

context.ExecuteAlghoritm();