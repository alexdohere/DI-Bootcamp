-- Instructions
-- In this exercise we will be using the actors table from todays lesson.

CREATE TABLE actors(
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    age DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Scarlett','Johansson','11/22/1984', 3);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Gal','Gadot','12/25/1982', 6);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Manuel','Goldstein','06/13/1995', 0);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Chiken','Sandwich','02/01/2011', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Barney','Huff','04/04/1951', 2);

-- 1. Count how many actors are in the table.

SELECT COUNT (actor_id) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
    ('Leonardo','DiCaprio');

-- The outcome is expected to be an error due to the 'NOT NULL' setting used for all columns when creating the table.
