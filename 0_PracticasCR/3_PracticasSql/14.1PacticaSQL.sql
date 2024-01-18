-- 14.1 Practica Sql Parte 4
-- Ejercicio 4
/*Para este ejercicio debes utilizar la base de datos de ejemplo Sakila, 
asegúrate de activar la base de datos correcta para trabajar con ella. 
Realiza las siguientes consultas:*/

-- 1 Escribe una consulta que devuelva los first_name y last_name de todos los actores que tienen el nombre "ED".
SELECT a.first_name, a.last_name
FROM actor a
WHERE first_name="ED";

-- 2 Encuentra todos los clientes en la tabla customer que son activos y cuyo primer nombre es "MARY".
SELECT first_name,last_name FROM customer WHERE active=1 AND first_name="MARY";

-- 3 Extrae los nombres y apellidos de los actores que tienen el primer nombre "ED" o "BOB".
SELECT first_name,last_name FROM actor WHERE first_name IN ("ED","BOB");

-- 4 Encuentra todos los alquileres (rental) que se hicieron entre '2005-05-25' y '2005-05-27'.
SELECT*FROM rental WHERE rental_date BETWEEN '2005-05-25' AND '2005-05-27';

-- 5 Selecciona todos los films cuyas clasificaciones (rating) son "G", "PG", o "PG-13".
SELECT*FROM film WHERE rating IN ("G", "PG", "PG-13");

-- 6 Encuentra los apellidos de los clientes que terminan con "ING".
SELECT last_name FROM customer WHERE last_name LIKE "%ING";