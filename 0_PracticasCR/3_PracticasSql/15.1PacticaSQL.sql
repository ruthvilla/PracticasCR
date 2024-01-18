-- 15.1 Practica Sql Parte 5
-- Para realizar este ejercicio debes usar la base de datos de ejemplo de Sakila. Sigue los siguientes pasos:
-- 1 Utiliza INNER JOIN para obtener las columnas first_name y last_name de la tabla customer y address de la tabla address.
SELECT c.first_name, c.last_name, a.address
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id;

-- 2 Obtén los nombres y apellidos de los clientes que viven en la ciudad de 'Abha'
SELECT c.first_name, c.last_name
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id
INNER JOIN city ct ON a.city_id = ct.city_id
WHERE city="Abha";
	-- Con una subconsulta
	SELECT c.first_name, c.last_name
	FROM customer c
	INNER JOIN address a ON c.address_id = a.address_id
	WHERE a.city_id IN (
	  SELECT city_id FROM city WHERE city = 'Abha');
      
-- 3 Encuentra todas las direcciones que no están vinculadas a ningún cliente en la tabla address.
SELECT c.first_name, a.address
FROM customer c
RIGHT JOIN address a ON c.address_id = a.address_id
WHERE customer_id IS NULL;

	-- Sin pasar por clientes
	SELECT a.address
	FROM address a
	LEFT JOIN customer c ON a.address_id = c.address_id
	WHERE c.customer_id IS NULL;
    
-- 4 Obtener el nombre y apellido de los clientes junto con el nombre de su ciudad.
SELECT c.first_name, c.last_name, ct.city
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id
INNER JOIN city ct ON a.city_id = ct.city_id;
