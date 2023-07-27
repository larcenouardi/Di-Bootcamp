-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?


-- 1.

SELECT COUNT(*) FROM actors;


-- 2.

--  if the table schema allows NULL values for the fields you leave blank, the insertion will succeed, and the blank fields will be stored as NULL. 
--  If any of the fields have NOT NULL constraints, the insertion will fail, and an error will be raised.

