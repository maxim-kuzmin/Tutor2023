// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var mediator = new Mediator.Parts.Mediator();

var firstColleague = new FirstColleague(mediator);
var secondColleague = new SecondColleague(mediator);

mediator.FirstColleague = firstColleague;
mediator.SecondColleague = secondColleague;

firstColleague.Send("1111");

Print("After the First Colleague sended a message:", firstColleague, secondColleague);

secondColleague.Send("2222");

Print("After the Second Colleague sended a message:", firstColleague, secondColleague);

static void Print(string title, Colleague firstColleague, Colleague secondColleague)
{
    Console.WriteLine(title);
    Console.WriteLine();
    Console.WriteLine($$"""The First Colleague Notification: "{{firstColleague.Notification}}" """);
    Console.WriteLine();
    Console.WriteLine($$"""The Second Colleague Notification: "{{secondColleague.Notification}}" """);
    Console.WriteLine();
}