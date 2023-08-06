                                                  -- Daily Challenge: Tables Relationships

-- PART : I

-- Create the Customer table
CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

-- Create the Customer profile table
CREATE TABLE customer_profile (
  id SERIAL PRIMARY KEY,
  is_logged_in BOOLEAN DEFAULT FALSE,
  customer_id INTEGER REFERENCES customer (id)
);

-- Insert customers
INSERT INTO customer (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO customer (first_name, last_name) VALUES ('Jerome', 'Lalu');
INSERT INTO customer (first_name, last_name) VALUES ('Lea', 'Rive');

-- Insert customer profiles
INSERT INTO customer_profile (is_logged_in, customer_id) VALUES (TRUE, (SELECT id FROM customer WHERE first_name = 'John'));
INSERT INTO customer_profile (is_logged_in, customer_id) VALUES (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

-- Use inner join to display the first_name of the LoggedIn customers
SELECT first_name
FROM customer
INNER JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE customer_profile.is_logged_in = TRUE;

-- Use left join to display all the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT
  customer.first_name,
  customer_profile.is_logged_in
FROM customer
LEFT JOIN customer_profile
ON customer.id = customer_profile.customer_id;

-- Use count to display the number of customers that are not LoggedIn
SELECT COUNT(*)
FROM customer
LEFT JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE customer_profile.is_logged_in = FALSE;


-- PART : II

-- Create the Book table
CREATE TABLE book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Insert books
INSERT INTO book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll');
INSERT INTO book (title, author) VALUES ('Harry Potter', 'J.K Rowling');
INSERT INTO book (title, author) VALUES ('To kill a mockingbird', 'Harper Lee');

-- Create the Student table
CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INTEGER CHECK (age <= 15)
);

-- Insert students
INSERT INTO student (name, age) VALUES ('John', 12);
INSERT INTO student (name, age) VALUES ('Lera', 11);
INSERT INTO student (name, age) VALUES ('Patrick', 10);
INSERT INTO student (name, age) VALUES ('Bob', 14);

-- Create the Library table
CREATE TABLE library (
  book_fk_id INTEGER REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_id INTEGER REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE
);

-- Insert 4 records in the junction table
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM student WHERE name = 'John'),
        '2022-02-15');
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
        (SELECT student_id FROM student WHERE name = 'Bob'),
        '2021-03-03');
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM student WHERE name = 'Lera'),
        '2021-05-23');
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM book WHERE title = 'Harry Potter'),
        (SELECT student_id FROM student WHERE name = 'Bob'),
        '2021-08-12');
		
		
-- Display the data
-- a Select all the columns from the junction table

Select * from library;

--b  Select the name of the student and the title of the borrowed books
select name, book.title from student
INNER JOIN library
ON library.student_id = student.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id;

--c  Select the average age of the children, that borrowed the book Alice in Wonderland

select AVG(student.age) from student
INNER JOIN library
ON library.student_id = student.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice in wonderland';


--d  Delete a student from the Student table, what happened in the junction table ?

delete from student where student_id = 1;

-- All of the entryes in the junction table where the student)id was 1 where deleted.		
