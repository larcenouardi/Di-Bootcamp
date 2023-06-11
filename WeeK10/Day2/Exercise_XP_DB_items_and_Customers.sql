-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
	
	
	


CREATE TABLE items (
  id  SERIAL PRIMARY KEY,
  Item VARCHAR(50) NOT NULL,
  price DECIMAL(8,2) NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);


INSERT INTO items (Item, price)
VALUES ('Small Desk', 100), ('Large desk', 300), ('Fan', 80);


INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson');

select * from items;
select * from customers;


-- All the items
SELECT * FROM items;

-- All the items with a price above 80
SELECT * FROM items WHERE price > 80;

-- All the items with a price below 300
SELECT * FROM items WHERE price < 300;

-- All customers whose last name is 'Smith'
SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- All customers whose firstname is not 'Scott'
SELECT * FROM customers WHERE first_name != 'Scott';