select [category], count([order_id]) count_cat
from [dbo].[DsOne_orders]
group by [category]

select month([order_date]), avg(datediff(day,[order_date], [ship_date])) avg_date
from [dbo].[DsOne_orders]
group by month([order_date])
order by avg_date

select max([unit_cost])
from [dbo].[DsOne_orders]
where month([order_date])=10

select [city] ,max([unit_cost])
from [dbo].[DsOne_orders]
where year([order_date])=2019
and [state ]='Illinois'
group by [city]
order by max([unit_cost]) desc

select [customer_id],[customer_name] , count(distinct [product_id])
from [dbo].[DsOne_orders]
where [product_name] like 'm%'
group by [customer_id],[customer_name] 
HAVING COUNT(DISTINCT [product_id]) >= 2
order by count(distinct [product_id]) desc

select [category], min([unit_cost])
from [dbo].[DsOne_orders]
group by [category]
having min([unit_cost])<1

select month([order_date]), avg([sales])
from [dbo].[DsOne_orders]
where [state ]='texas'
group by month([order_date])
order by month([order_date])

select [states], count([order_id])
from [dbo].[DsOne_returns]
group by [states]
having count([order_id])>10

select  [category],count([order_id])
from [dbo].[DsOne_returns]
where [states]='Indiana'
group by [category]
order by count([order_id]) desc

