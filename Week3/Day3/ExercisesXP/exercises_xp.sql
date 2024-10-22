-- Exercise 1: DVD Rental

-- Get a list of all the languages, from the language table.

SELECT name 
FROM language;

-- Get a list of all films joined with their languages – select the following details:
-- film title, description, and language name.

SELECT film.title, film.description, language.name
FROM film 
JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details: 
-- film title, description, and language name.

SELECT 
    COALESCE(f.title, 'No films in this language') AS title,
    COALESCE(f.description, 'No description available') AS description,
    l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

-- Create a new table called new_film with the following columns: id, name. Add some new films to the table.

CREATE TABLE IF NOT EXISTS new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO new_film (name)
VALUES 
('Barton Fink'), 
('Dodgeball');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

CREATE TABLE IF NOT EXISTS customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(100),
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Fantastic Film', 10, 'An absolute masterpiece!'),
(2, 1, 'Mediocre Film', 5, 'It was just okay.');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE id = 1;
SELECT * FROM customer_review;

-- Exercise 2: DVD Rental

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = 2
WHERE film_id = 1;

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- ANSWER: The foreign key is address_id. We can't insert a customer without a valid address_id.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE IF EXISTS customer_review;

-- Find out how many rentals are still outstanding (i.e., have not been returned to the store yet).

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (i.e., have not been returned to the store yet).

SELECT f.title, f.rental_rate 
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON r.inventory_id = i.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names.
-- The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' 
AND a.last_name = 'Monroe'
AND LOWER(f.description) LIKE '%sumo wrestler%';

-- The 2nd film: A short documentary (less than 1 hour long), rated “R”.

SELECT f.title, f.description
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE LOWER(c.name) = 'documentary'
AND f.length < 60
AND f.rating = 'R';

-- The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the 
-- rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND r.amount > 4.00;

-- The 4th film: His friend Matthew Mahan watched this film, as well. It had the word “boat”
-- in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (LOWER(f.title) LIKE '%boat%' OR LOWER(f.description) LIKE '%boat%')
ORDER BY f.replacement_cost DESC;
