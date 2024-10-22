-- Daily challenge : SQL Puzzle
-- What will be the OUTPUT of the following statements?

SELECT COUNT(*)
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab 
    WHERE id IS NULL
);

-- ANSWER: 0

SELECT COUNT(*)
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab 
    WHERE id = 5
);

-- ANSWER: 2

SELECT COUNT(*)
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab
);

-- ANSWER: 0

SELECT COUNT(*)
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab 
    WHERE id IS NOT NULL
);

-- ANSWER: 2
