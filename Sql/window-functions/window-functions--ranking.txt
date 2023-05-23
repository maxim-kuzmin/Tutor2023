-- Ранжирующие оконные функции: ROW_NUMBER, RANK, DENSE_RANK

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
	ROW_NUMBER() OVER (PARTITION BY [name] ORDER BY grade desc) [ROW_NUMBER],
	RANK() OVER (PARTITION BY [name] ORDER BY grade desc) [RANK],
	DENSE_RANK() OVER (PARTITION BY [name] ORDER BY grade desc) [DENSE_RANK]
FROM
	@student_grades
;