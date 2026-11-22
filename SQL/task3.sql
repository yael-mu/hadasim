SELECT DAY(order_date) AS order_day
FROM [dbo].[DsOne_orders]
ORDER BY order_day

select month(order_date) order_month
from [dbo].[DsOne_orders]
where category = 'Office Supplies'

select month(order_date) order_month,month(ship_date) ship_month
from [dbo].[DsOne_orders]
where sub_category = 'phones'
order by ship_month

SELECT DATEDIFF(DAY, order_date, ship_date) AS days_to_ship
FROM [dbo].[DsOne_orders]
ORDER BY days_to_ship

SELECT order_date, DATEADD(YEAR, 2, order_date) AS order_date_plus_2_years
FROM [dbo].[DsOne_orders]

select CAST(DATEDIFF(DAY, order_date, ship_date) AS CHAR(10)) AS days_to_ship
from [dbo].[DsOne_orders]
where month(ship_date)=1

select *
from DsOne_orders
