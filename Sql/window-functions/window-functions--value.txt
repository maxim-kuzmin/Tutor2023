-- Оконные функции смещения: LAG, LEAD, FIRST_VALUE, LAST_VALUE

DECLARE @grades_quartal TABLE
(
	[name] VARCHAR(50),
	quartal VARCHAR(50),
	[subject] VARCHAR(50),
	grade INT
);

INSERT INTO @grades_quartal
	([name], quartal, [subject], grade)
VALUES
	('Петя', '1 четверть', 'физика', 4),
	('Петя', '2 четверть', 'физика', 3),
	('Петя', '3 четверть', 'физика', 4),
	('Петя', '4 четверть', 'физика', 5)
;

SELECT
	[name],
	quartal,
	[subject],
	grade,
	LAG(grade) OVER (ORDER BY quartal) [LAG], -- предыдущий grade
	LEAD(grade) OVER (ORDER BY quartal) [LEAD], -- следующий grade
	FIRST_VALUE(grade) OVER (ORDER BY quartal) [FIRST_VALUE], -- первый grade
	LAST_VALUE(grade) OVER (ORDER BY quartal) [LAST_VALUE] -- последний grade	
FROM
	@grades_quartal
;