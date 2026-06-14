-- Exercise 1
SELECT * FROM items ORDER BY item_price (ASC);

SELECT * FROM items WHERE item_price >= 80;

SELECT first_name, last_name FROM customer ORDER BY first_name ASC LIMIT 3;

SELECT last_name FROM customer ORDER BY last_name DESC;


-- Exercise 2

SELECT * FROM customer;

SELECT CONCAT(first_name, last_name) AS fullname FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

SELECT address, phone FROM address WHERE district = 'Texas';

SELECT * FROM film WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Pulp Fiction';

SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Pu%';

SELECT * FROM film ORDER BY rental_rate  ASC LIMIT 10;

SELECT * FROM film ORDER BY rental_rate  ASC LIMIT 10 OFFSET 10;

SELECT first_name, last_name, amount, payment_date
FROM customer c
INNER JOIN payment p ON  c.customer_id = p.customer_id
ORDER BY c.
customer_id ASC;


SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

SELECT country, city
FROM city c
INNER JOIN country p ON  c.country_id = p.country_id
ORDER BY c.
country_id ASC;

