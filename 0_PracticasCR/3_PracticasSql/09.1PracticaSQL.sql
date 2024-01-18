-- Crea una base de datos llamada libaryDB.
CREATE DATABASE IF NOT EXISTS libraryDB;

-- Hemos cometido un error al escribir el nombre de la nueva base de datos, elimina la base de datos llamada libaryDB.
DROP DATABASE IF EXISTS libraryDB;

-- Crea nuevamente la nueva base de datos con el nombre de libraryDB.
CREATE DATABASE IF NOT EXISTS libraryDB;

-- Selecciona la base de datos que acabas de crear para trabajar con ella.
USE libraryDB;

--  Crea una tabla llamada books con las siguiente columnas:
/*bookID: INT, PRIMARY KEY, AUTO_INCREMENT
title: VARCHAR(50), NOT NULL
author: VARCHAR(30), NOT NULL
publishDate: DATE
createdAt: DATETIME, DEFAULT CURRENT_TIMESTAMP*/
CREATE TABLE IF NOT EXISTS books(
bookId INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
author VARCHAR(30) NOT NULL,
publishDate DATE,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
-- Crea otra tabla llamada members con las siguientes columnas:
/*memberID: INT, PRIMARY KEY, AUTO_INCREMENT
name: VARCHAR(30), NOT NULL
email: VARCHAR(50)
createdAt: DATETIME, DEFAULT CURRENT_TIMESTAMP*/
CREATE TABLE IF NOT EXISTS members(
memberId INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50),
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Añade una nueva columna isbn de tipo VARCHAR(20) a la tabla books.
ALTER TABLE books ADD isbn VARCHAR(20);

-- Cambia el tipo de la columna title de VARCHAR(50) a VARCHAR(100) en la tabla books.
ALTER TABLE books MODIFY title VARCHAR(100);

-- Cambia el nombre de la columna publishDate a datePublished en la tabla books.
ALTER TABLE books CHANGE publishDate datePublished DATE;

-- Crea una tabla borrowedBooks que tenga un borrowID como clave principal y un memberID y bookID como claves foráneas.
/* borrowID: INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
* memberID: INT UNSIGNED NOT NULL
* bookID: INT UNSIGNED NOT NULL*/
CREATE TABLE IF NOT EXISTS borrowedBooks(
borrowID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
memberID INT UNSIGNED NOT NULL,
bookID INT UNSIGNED NOT NULL,
FOREIGN KEY (memberID) REFERENCES members(memberId),
FOREIGN KEY (bookID) REFERENCES books(bookId)
);









