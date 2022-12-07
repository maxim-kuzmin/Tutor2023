// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var firstAdaptee = new FirstAdaptee();
var secondAdaptee = new SecondAdaptee();

ITarget firstAdapter = new FirstAdapter(firstAdaptee);
ITarget secondAdapter = new SecondAdapter(secondAdaptee);

var client = new Client();

client.Request(firstAdapter);
client.Request(secondAdapter);
