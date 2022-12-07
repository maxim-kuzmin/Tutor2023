// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var mediator = new Mediator.Parts.Mediator();

var firstColleague = new FirstColleague(mediator);
var secondColleague = new SecondColleague(mediator);

mediator.FirstColleague = firstColleague;
mediator.SecondColleague = secondColleague;

firstColleague.Send("1111");
secondColleague.Send("2222");
