-- Ejercicio 3 SQL coding rooms
-- Selecciona solo el título y la fecha de publicación de la tabla books.
USE libraryDB;
SELECT title,publishDate FROM books;

-- Encuentra todos los libros publicados antes del año 1950.
SELECT title FROM books WHERE publishDate <"1950-01-01";

-- Busca todos los miembros con el dominio de correo "email.com".
SELECT*FROM members;
SELECT name,email FROM members WHERE email LIKE "%email.com";

-- Agrupa los libros por autor y cuenta cuántos libros hay de cada autor.
SELECT*FROM books;
SELECT author, COUNT(*) FROM books GROUP BY author;

-- Encuentra autores que tienen más de 1 libro en la tabla books.
SELECT author, COUNT(*) FROM books GROUP BY author HAVING COUNT(*)>1;

-- Muestra los libros ordenados por su fecha de publicación, de más reciente a más antiguo.
SELECT*FROM books ORDER BY publishDate DESC;

-- Muestra los libros ordenados por autor y luego por título, ambos en orden ascendente.
SELECT*FROM books ORDER BY author,title;

