-- Exercise 1 : Bootcamp
-- Create
-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	birth_date DATE NOT NULL
);

-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

INSERT INTO students (first_name, last_name, birth_date) VALUES
	('Marc', 'Benichou', '1998-11-02'),
	('Yoan', 'Cohen', '2010-12-03'),
	('Lea', 'Benichou', '1987-07-27'),
	('Amelia', 'Dux', '1996-04-07'),
	('David', 'Grez', '2003-06-14'),
	('Omer', 'Simpson', '1980-10-03');

INSERT INTO students (first_name, last_name, birth_date) VALUES
	('Alexey', 'Buydov', '1992-09-14');

-- Select
-- Fetch all of the data from the table.

SELECT * FROM students;

-- Fetch all of the students first_names and last_names.

SELECT first_name, last_name FROM students;

-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.

SELECT first_name, last_name FROM students WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter a.

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';

-- Fetch the students whose first_names end with the letter a.

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).

SELECT first_name, last_name FROM students WHERE SUBSTRING (first_name FROM LENGTH (first_name) - 1 FOR 1) = 'a';

-- Fetch the students whose id’s are equal to 1 AND 3.

SELECT first_name, last_name FROM students WHERE (id = 1 AND id = 3);

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

SELECT * FROM students WHERE (birth_date >= '2000-01-01');
