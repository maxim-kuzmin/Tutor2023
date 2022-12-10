// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

using Visitor.Parts.Visitors;

ObjectStructure objectStructure = new ObjectStructure();

IElement firstElement = new FirstElement();
IElement secondElement = new SecondElement();

IVisitor firstVisitor = new FirstVisitor();
IVisitor secondVisitor = new SecondVisitor();

objectStructure.Add(firstElement);
objectStructure.Add(secondElement);

objectStructure.Accept(firstVisitor);
objectStructure.Accept(secondVisitor);

objectStructure.Remove(firstElement);

objectStructure.Accept(firstVisitor);
objectStructure.Accept(secondVisitor);
