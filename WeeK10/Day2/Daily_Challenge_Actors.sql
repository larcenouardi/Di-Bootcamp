INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Ross','03/01/1970', 0);
SELECT * FROM actors;
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('franck','djjaro','11/11/1986', 3);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('yoande','djibril','22/10/1952', 1);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Samantha','Sbayli','22/10/1968', 1);


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('David','boukhbza','20/07/1958', 1),
('hassan','Halazouni','20/07/1948', 5),
('Morgan','elkadouss','12/05/1988', 2),
('Zak','azalim','10/08/1978', 3),
('Sarra','bernard','20/05/2003', 7);


SELECT * FROM actors;

SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name;

SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name 
ORDER BY min(number_oscars);


--Obtenez le nombre moyen d’oscars dans le tableau
SELECT avg(number_oscars) AS average_number_oscars FROM actors;

SELECT sum(number_oscars) AS total_oscars FROM actors;


--Obtenez des acteurs distincts en fonction de leur nombre d’oscars
SELECT DISTINCT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars DESC;
SELECT max(number_oscars) AS best_actor FROM actors;
SELECT min(number_oscars) AS worst_actor FROM actors;

SELECT DISTINCT number_oscars FROM actors;


--Obtenez les acteurs nés après le 01/01/1970
SELECT * FROM actors WHERE age > '1969-01-01';



Obtenez les acteurs qui s’appellent 'David', 'Morgan' ou 'Will'
SELECT * FROM actors WHERE first_name in ('David','Morgan') or first_name = 'will';




SELECT * FROM actors;

UPDATE actors set age='22/07/1983' where 