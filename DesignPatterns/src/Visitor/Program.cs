// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

using Visitor.Parts.Visitors;

var structure = new ObjectStructure();

structure.AddElement(new FirstElement("1.1", "1.2"));
structure.AddElement(new SecondElement("2.1", "2.2"));

var jsonVisitor = new JsonVisitor(HandleVisitResult);
var xmlVisitor = new XmlVisitor(HandleVisitResult);

Console.WriteLine("Visit results:");

structure.Accept(jsonVisitor);
structure.Accept(xmlVisitor);

#region Methods

static void HandleVisitResult(string visitResult)
{
    Console.WriteLine();
    Console.WriteLine(visitResult);
}

#endregion Methods
