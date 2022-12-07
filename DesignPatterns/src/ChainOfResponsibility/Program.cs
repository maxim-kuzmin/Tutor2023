// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

Handler nullDataHandler = new NullDataHandler(null);
Handler notNullDataHandler = new NotNullDataHandler(nullDataHandler);

var request = new Request(null);

notNullDataHandler.Handle(request);

Console.WriteLine();

request = new Request("");

notNullDataHandler.Handle(request);