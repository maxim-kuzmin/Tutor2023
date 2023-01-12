-- Переиспользование псевдонимов столбцов

SELECT
	number,
    doubled_number,
    doubled_number_plus_one
FROM
	master..spt_values
	CROSS APPLY (SELECT 2 * CAST(number AS BIGINT)) CA1(doubled_number)  
	CROSS APPLY (SELECT doubled_number + 1) CA2(doubled_number_plus_one)
;