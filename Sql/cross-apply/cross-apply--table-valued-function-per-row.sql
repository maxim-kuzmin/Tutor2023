-- Вызов табличной функции для каждой строки

SELECT
	*
FROM
	sys.dm_exec_query_stats qs
	CROSS APPLY sys.dm_exec_query_plan(qs.plan_handle)
;