-- Перевод групп столбцов в строки

DECLARE @t TABLE
(
    Id   INT PRIMARY KEY,

    Foo1 INT, Foo2 INT, Foo3 INT,
    Bar1 INT, Bar2 INT, Bar3 INT
);

INSERT INTO @t
	(Id, Foo1, Foo2, Foo3, Bar1, Bar2, Bar3)
VALUES
	(1, 111, 112, 113, 121, 122, 123),
	(2, 211, 212, 213, 221, 222, 223),
	(3, 311, 312, 313, 321, 322, 323)
;

SELECT
	Id,
	Foo,
	Bar
FROM
	@t
    CROSS APPLY
	(
		VALUES
			(Foo1, Bar1),
            (Foo2, Bar2),
            (Foo3, Bar3)
	) V(Foo, Bar)
; 