-- ������� ������� ��������: LAG, LEAD, FIRST_VALUE, LAST_VALUE

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
	('����', '1 ��������', '������', 4),
	('����', '2 ��������', '������', 3),
	('����', '3 ��������', '������', 4),
	('����', '4 ��������', '������', 5)
;

SELECT
	[name],
	quartal,
	[subject],
	grade,
	LAG(grade) OVER (ORDER BY quartal) [LAG], -- ���������� grade
	LEAD(grade) OVER (ORDER BY quartal) [LEAD], -- ��������� grade
	FIRST_VALUE(grade) OVER (ORDER BY quartal) [FIRST_VALUE], -- ������ grade
	LAST_VALUE(grade) OVER (ORDER BY quartal) [LAST_VALUE] -- ��������� grade	
FROM
	@grades_quartal
;