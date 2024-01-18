-- Ejercicio 2 Sakila
-- Tomando como referencia la base de datos de Sakila selecciona:

USE sakila;

-- 1 Actores que contengan una "O" en su nombre y una "A" en su apellido.
SELECT a.first_name,
	   a.last_name
       FROM actor a
       WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";
       
-- 2 Duración media de todas las películas.       
SELECT AVG(length) AS "Duracion Media" FROM film; 
	-- Redondeando la duracion sin decimales
SELECT ROUND(AVG(length),0) AS "Duracion Media" FROM film;

-- 3 Películas con un rating PG y duración de más de 120.
SELECT f.title,
	   f.rating,
       f.length
       FROM film f
       WHERE rating="PG" AND length >= 120;

-- 4 Número total de apellidos distintos entre todos los actores.
SELECT COUNT(DISTINCT last_name) FROM actor;

-- 5 Ciudad en la que vive el cliente "Sandra Martin" (utilizando JOIN
SELECT c.first_name, 
	   c.last_name, 
       ct.city
	FROM customer c
	INNER JOIN address a ON c.address_id = a.address_id
	INNER JOIN city ct ON a.city_id = ct.city_id
    WHERE first_name="Sandra" AND last_name="Martin";





