-- Exercise 1 : Items and customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	price INTEGER NOT NULL
);

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
);

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

INSERT INTO items (name, price) VALUES ('Small desk', 100);
INSERT INTO items (name, price) VALUES ('Large desk', 300);
INSERT INTO items (name, price) VALUES ('Fan', 80);

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Sandra', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Scott', 'Scott');
INSERT INTO customers (first_name, last_name) VALUES ('Trevor', 'Green');
INSERT INTO customers (first_name, last_name) VALUES ('Melanie', 'Johnson');

-- Use SQL to fetch the following data from the database:
-- All the items.

SELECT * FROM items;

-- All the items with a price above 80 (80 not included).

SELECT * FROM items WHERE price > 80;

-- All the items with a price below 300. (300 included)

SELECT * FROM items WHERE price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).

SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is ‘Jones’.

SELECT * FROM customers WHERE last_name = 'Jones';

-- All customers whose firstname is not ‘Scott’.

SELECT * FROM customers WHERE first_name != 'Scott';
