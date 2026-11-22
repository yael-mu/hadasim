select i.Country , count(i.[Client ID])
from [dbo].[DsThree_store_customer_ids] i
full join
[dbo].[DsThree_store_customer_sales] s 
on s.[Client ID]= i.[Client ID]
where s.[Product 1]='Microwave'
group by i.Country

select count(i.[Client ID])
from [dbo].[DsThree_store_customer_ids] i
full join
[dbo].[DsThree_store_customer_sales] s 
on s.[Client ID]= i.[Client ID]
where i.Country='Australia'
and s.Price>100

select *
from [dbo].[DsThree_store_customer_ids] i
join
[dbo].[DsThree_store_customer_sales] s 
on s.[Client ID]= i.[Client ID]
join
[dbo].[DsThree_store_customer_contact] c
on s.[Client ID]=c.[Client ID]
where s.[Product 1] like 'TV%'

select count(*)
from [dbo].[DsThree_store_customer_ids] i
left join
[dbo].[DsThree_store_customer_contact] c
on i.[Client ID]=c.[Client ID]
where c.[Client ID] is null

select *
from [dbo].[DsThree_store_customer_sales] s
cross join
[dbo].[DsThree_store_customer_contact] c

select *
from [dbo].[DsOne_returns] r
full join
[dbo].[DsOne_orders] o
on r.order_id = o.order_id

select r.return_date
from [dbo].[DsOne_returns] r
join
[dbo].[DsOne_orders] o
on r.order_id = o.order_id
where o.sub_category ='phones'

select *
from [dbo].[DsOne_returns] r
full join
[dbo].[DsOne_orders] o
on r.order_id = o.order_id
where o.sub_category ='phones'

select *
from [dbo].[DsOne_returns] r
where month(r.return_date)=4

