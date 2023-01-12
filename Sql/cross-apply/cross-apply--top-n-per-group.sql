-- Для каждой записи в таблице t1 выбрать связанные с ней последние три записи таблицы t2,
-- отсортированной по полю position.
-- В случае отсутствия связанных записей в таблице t2 запись таблицы t1 не выводится.
-- Вариант с "CROSS APPLY" работает быстрее варианта с "INNER JOIN" и фильтрацией по "ROW_NUMBER".

DECLARE @t1 TABLE
(
	id INT
);

DECLARE @t2 TABLE
(
	id int,
	t1_id INT,
	position INT
);

INSERT INTO @t1
	(id)
VALUES
	(1),(2),(3)
;

INSERT INTO @t2
	(id, t1_id, position)
VALUES
	(1, 1, 1),(2, 1, 2),(3, null, 3),(4, null, 4),(5, null, 5),(6, null, 6),
	(7, 2, 1),(8, 2, 2),(9, 2, 3),(10, 2, 4),(11, 2, 5),(13, 2, 6),
	(14, null, 1),(15, null, 2),(16, null, 3),(17, null, 4),(18, null, 5),(19, null, 6)
;

SELECT 
	t1.id t1_id,
	t2o.id t2_id,
	t2o.position
FROM
	@t1 t1
	CROSS APPLY
	(
		SELECT TOP 3
			*
		FROM
			@t2 t2
		WHERE
			t2.t1_id = t1.id
		ORDER BY
			t2.position DESC
	) t2o
;

WITH t2o AS
(
	SELECT
		t2.*,
		ROW_NUMBER() OVER (PARTITION BY t2.t1_id ORDER BY position DESC) AS rn
    FROM
		@t2 t2
)
SELECT
	t1.*,
	t2o.*
FROM
	@t1 t1
	INNER JOIN t2o ON t2o.t1_id = t1.id
		AND t2o.rn <= 3
;
