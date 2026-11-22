select title,LEN(title)
from [dbo].[disney_plus_titles]

select UPPER( director)
from [dbo].[disney_plus_titles]

select *
from [dbo].[disney_plus_titles]
where title like '%e%'
and release_year between 2017 and 2019

select Concat(director,listed_in)
from [dbo].[disney_plus_titles]
where release_year between 2015 and 2020
order by release_year





select *
from [dbo].[DsOne_orders]

select product_name ,sales,ROUND(sales,0)
from [dbo].[DsOne_orders]

select sub_category,product_name,ROUND(unit_cost,0) round_unit_cost
from [dbo].[DsOne_orders]
where sub_category like 's%'

select *
from [dbo].[DsOne_orders]
where product_name like '%e%'
and LEN(product_name)>7
order by LEN(product_name) desc