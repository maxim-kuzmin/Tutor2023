// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var firstBuilder = new FirstBuilder();
var secondBuilder = new SecondBuilder();

var firstDirector = new Director(firstBuilder);
var secondDirector = new Director(secondBuilder);

firstDirector.Construct();
secondDirector.Construct();

Console.WriteLine(firstBuilder.Result);
Console.WriteLine(secondBuilder.Result);