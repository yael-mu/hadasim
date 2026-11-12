SELECT *
FROM dbo.pokemon;

SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'pokemon';

SELECT COLUMN_NAME AS 'Column Name'
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'pokemon';

SELECT name, abilities, speed, height, weight
FROM dbo.pokemon;

SELECT COLUMN_NAME, DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'pokemon'
AND COLUMN_NAME IN ('name', 'abilities', 'speed', 'height', 'weight');

SELECT DISTINCT name, abilities, speed, height, weight
FROM dbo.pokemon;




SELECT *
FROM dbo.disney_plus_titles;

SELECT *
FROM dbo.disney_plus_titles AS d;

SELECT show_id, title, type
FROM dbo.disney_plus_titles;

SELECT COLUMN_NAME, DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'disney_plus_titles'
AND COLUMN_NAME IN ('show_id', 'title', 'type');

EXEC sp_pkeys @table_name = 'disney_plus_titles';

SELECT DISTINCT show_id, title, type
FROM dbo.disney_plus_titles;



---------------------ex 2-----------------


select *
from dbo.['Olympic']
where age>18

select *
from dbo.['Olympic']
where weight>50

select *
from dbo.['Olympic']
where season = 'summer'
order by age

select *
from dbo.['Olympic']
where city = 'Mexico City'
and sex = 'f'
order by year



select *
from pokemon

select name, abilities
from pokemon
where abilities like '%Solar Power%'

select *
from pokemon
where female_rate > 0.2
order by name desc

select name,primary_color  , speed
from pokemon
where (primary_color = 'red'
or primary_color = 'green')
and name like 'c%'
order by speed

select name, shape, height , weight
from pokemon
where shape = 'wings'
and height>10
order by weight