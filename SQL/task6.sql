select *
from [dbo].[pokemon]
where [name] like '%r%'

select *
from [dbo].[pokemon]
order by [weight] desc

select LOWER([name])
from [dbo].[pokemon]

select count([name])
from [dbo].[pokemon]
where [height]>70

SELECT AVG(DATEDIFF(DAY, [order_date], [ship_date]))
FROM [dbo].[DsOne_orders]
WHERE [category] = 'Office Supplies'
AND YEAR([ship_date]) = 2019;

SELECT AVG(LEN([product_name]))
FROM [dbo].[DsOne_orders]
WHERE [order_weekday] = 'Monday'

select top 1 [city] ,sum([sales]), [state ]
from [dbo].[DsOne_orders]
group by [city], [state ]
order by max([sales]) desc

select [city],count(distinct[customer_id])
from [dbo].[DsOne_orders]
where [customer_name] like '%c%'
and
[state ]=(
	select top 1 [state ]
	from [dbo].[DsOne_orders]
	where [customer_name] like '%c%'
	group by [state ]
	order by count(distinct[customer_id]) desc
)
group by [city]
order by count([customer_id]) desc
