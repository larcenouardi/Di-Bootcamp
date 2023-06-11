-- Database: Bootcamp

-- DROP DATABASE IF EXISTS "Bootcamp";

CREATE DATABASE "Bootcamp"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
	
	
	CREATE TABLE students (
  id SERIAL PRIMARY KEY ,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL);
  
  INSERT INTO students (last_name, first_name, birth_date) VALUES
('Benichou', 'Marc', '1998-02-11'),
('Cohen', 'Yoan', '2010-03-12'),
('Benichou', 'Lea', '1987-07-27'),
('Dux', 'Amelia', '1996-07-04'),
('Grez', 'David', '2003-06-14'),
('Simpson', 'Omer', '1980-10-03');

select * from students;
 
 
 -- Fetch all of the data from the table.
SELECT * FROM students;

-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

-- Fetch the student which id is equal to 2.
SELECT * FROM students WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter a.
SELECT * FROM students WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
SELECT * FROM students WHERE first_name LIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
SELECT * FROM students WHERE first_name LIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT * FROM students WHERE first_name LIKE '%a_a';

-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT * FROM students WHERE id IN (1, 3);

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date >= '2000-01-01';