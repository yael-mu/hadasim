select *
from [dbo].[DsTwo_Ads_revenue1]
union all
select *
from [dbo].[DsTwo_Ads_revenue2]

select *
from [dbo].[DsTwo_Ads_revenue1]
union
select *
from [dbo].[DsTwo_Ads_revenue2]

SELECT [Campaign ID]
FROM [dbo].[DsTwo_Ads_revenue1]
INTERSECT
SELECT [Campaign ID]
FROM [dbo].[DsTwo_Ads_revenue2]

SELECT [date], [Ad Type]
FROM dbo.DsTwo_Ads_revenue1
WHERE [InventoryType]= 'Format3'
EXCEPT
select [date], [Ad Type]
from [dbo].[DsTwo_Ads_revenue2]

SELECT [date], [Ad Type]
FROM dbo.DsTwo_Ads_revenue1
WHERE [InventoryType]= 'Format3'
INTERSECT
select [date], [Ad Type]
from [dbo].[DsTwo_Ads_revenue2]

SELECT *
FROM dbo.DsTwo_Ads_revenue1
WHERE [Matched_Queries] > 800000
UNION
SELECT *
FROM dbo.DsTwo_Ads_revenue2
WHERE [Matched_Queries] > 800000