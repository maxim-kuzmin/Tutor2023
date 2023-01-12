-- Агрегирующие оконные функции: SUM, AVG, COUNT, MIN, MAX

DECLARE @student_grades TABLE
(
	[name] VARCHAR(50),
	[subject] VARCHAR(50),
	grade INT
);

INSERT INTO @student_grades
	([name], [subject], grade)
VALUES
	('Петя', 'математика', 3),
	('Петя', 'русский', 4),
	('Петя', 'физика', 5),
	('Петя', 'история', 4),
	('Маша', 'математика', 4),
	('Маша', 'русский', 3),
	('Маша', 'физика', 5),
	('Маша', 'история', 3)
;

SELECT
	[name],
	[subject],
	grade,
	SUM(grade) OVER (PARTITION BY [name]) sum_grade,
	AVG(grade) OVER (PARTITION BY [name]) avg_grade,
	COUNT(grade) OVER (PARTITION BY [name]) count_grade,
	MIN(grade) OVER (PARTITION BY [name]) min_grade,
	MAX(grade) OVER (PARTITION BY [name]) max_grade
FROM
	@student_grades
;