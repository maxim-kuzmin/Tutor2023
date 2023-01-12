-- ������������ ������� �������: SUM, AVG, COUNT, MIN, MAX

DECLARE @student_grades TABLE
(
	[name] VARCHAR(50),
	[subject] VARCHAR(50),
	grade INT
);

INSERT INTO @student_grades
	([name], [subject], grade)
VALUES
	('����', '����������', 3),
	('����', '�������', 4),
	('����', '������', 5),
	('����', '�������', 4),
	('����', '����������', 4),
	('����', '�������', 3),
	('����', '������', 5),
	('����', '�������', 3)
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