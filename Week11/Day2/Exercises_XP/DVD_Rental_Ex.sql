-- EX : 1

-- Get a list of all the languages, from the language table.

SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

SELECT film.title, film.description, language.name AS language_name
FROM film
INNER JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

 SELECT film.title, film.description ,language.name AS language_name 
 FROM  language  
 LEFT JOIN  film ON  language.language_id =  film.language_id;
 
 
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO new_film (name) VALUES ('The simpsons'), ('The Godfather'), ('The Dark Knight');




-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.

CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title VARCHAR(255),
  score INT CHECK (score >= 1 AND score <= 10),
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1, 1, 'Great movie!', 10, 'This movie was amazing. I loved the story and the characters.', NOW());

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (2, 2, 'Not my favorite', 6, 'I didnt really enjoy this movie. The plot was slow and the characters were boring.', NOW());

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE id = 1;


-- EX : 2 :


-- Use UPDATE to change the language of some films. Make sure that you use valid languages.


UPDATE film
SET language_id = 2
WHERE title = 'The Simpsons';

UPDATE film
SET language_id = 3
WHERE title = 'The Godfather';

UPDATE film
SET language_id = 4
WHERE title = 'The Dark Knight';

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?


The customer table has two foreign keys:

* customer_id references address (id)
* payment_method_id references payment_method (id)

This means that when we INSERT into the customer table, we must specify the corresponding values for the customer_id and payment_method_id columns. For example, the following INSERT statement would insert a new customer record with the customer_id of 100 and the payment_method_id of 1:


INSERT INTO customer (customer_id, first_name, last_name, address_id, payment_method_id)
VALUES (100, 'John', 'Doe', 1, 1);

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE customer_review;

-- *doesn't require extra checking as long as you have sufficient privileges and understand that all data within that table will be permanently deleted. 

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet).

SELECT film.title, rental_rate
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL 
ORDER BY rental_rate DESC 
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?

-- The 1st film:

SELECT title
FROM film
WHERE description LIKE '%sumo wrestler%'
AND actor LIKE '%Penelope Monroe%';


-- The 2nd film:

SELECT title
FROM film
WHERE length < 60
AND rating = 'R';

-- The 3rd film:

SELECT title
FROM film
JOIN rental ON film.id = rental.film_id
WHERE rental.customer_id = 123456
AND rental_rate > 4;

-- The 4th film:

SELECT title
FROM film
WHERE title LIKE '%boat%'
OR description LIKE '%boat%';

