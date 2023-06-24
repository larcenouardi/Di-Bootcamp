CREATE or REPLACE FUNCTION age_actor(fn varchar(50), lan varchar(100)) 
RETURNS date AS $birthdate$
BEGIN
   RETURN(SELECT age FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
END;
$birthdate$ LANGUAGE plpgsql;

select * from actors



SELECT * FROM age_actor('Matt', 'Damon') as Birth_Day;




CREATE or REPLACE FUNCTION fullname_actor(H1 varchar(50), H2 varchar(100)) RETURNS VARCHAR(100) AS $fullname$
BEGIN
   RETURN(SELECT CONCAT(first_name, ' ', last_name) FROM actors WHERE actors.first_name = H1 AND actors.last_name=H2);
END;
$fullname$ LANGUAGE plpgsql;

Drop FUNCTION fullname_actor;


CREATE or REPLACE FUNCTION fullname_actor(H1 varchar(50), H2 varchar(100)) 
RETURNS VARCHAR(100) AS $fullname$
BEGIN
   RETURN(SELECT CONCAT(first_name, ' ', last_name) FROM actors WHERE actors.first_name = H1 AND actors.last_name=H2);
END;
$fullname$ LANGUAGE plpgsql;



CREATE or REPLACE FUNCTION fullname_actor1(H1 varchar(50), H2 varchar(100)) 
RETURNS SETOF VARCHAR(100) AS $fullname$
BEGIN
   RETURN (SELECT CONCAT(first_name, ' ', last_name) FROM actors WHERE actors.first_name = H1 AND actors.last_name=H2);
END;
$fullname$ LANGUAGE plpgsql;


SELECT * FROM fullname_actor('George', 'Clooney', 'Matt', 'Damon');
SELECT * FROM fullname_actor1('Matt', 'Damon');