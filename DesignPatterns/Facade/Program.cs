// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var firstSubsystem = new FirstSubsystem();
var secondSubsystem = new SecondSubsystem();

var facade = new Facade.Parts.Facade(firstSubsystem, secondSubsystem);

facade.Operation();
