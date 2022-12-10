// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

IState firstState = new FirstState();

var context = new Context(firstState);

context.RequestTransferToSecondState();

context.RequestTransferToFirstState();
