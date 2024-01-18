USE libraryDB;
-- Sigue las siguientes instrucciones:
/*Inserta los siguientes libros en la tabla books con los siguientes datos
 para las columnas title, author y publishDate:
'Don Quijote', 'Miguel de Cervantes', '1605-01-16'
'Cien Años de Soledad', 'Gabriel García Márquez', '1967-06-05'
'El Gran Gatsby', 'F. Scott Fitzgerald', '1925-04-10'
'Matar a un Ruiseñor', 'Harper Lee', '1960-07-11'
'1984', 'George Orwell', '1949-06-08'
'El Silmarillion', 'J.R.R. Tolkien', '1977-09-15'
'Orgullo y Prejuicio', 'Jane Austen', '1813-01-28'
'Las Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', '1892-10-14'
'El Señor de los Anillos', 'J.R.R. Tolkien', '1954-07-29'*/

INSERT INTO books(title, author, publishDate)
VALUES('Don Quijote', 'Miguel de Cervantes', '1605-01-16'),
('Cien Años de Soledad', 'Gabriel García Márquez', '1967-06-05'),
('El Gran Gatsby', 'F. Scott Fitzgerald', '1925-04-10'),
('Matar a un Ruiseñor', 'Harper Lee', '1960-07-11'),
('1984', 'George Orwell', '1949-06-08'),
('El Silmarillion', 'J.R.R. Tolkien', '1977-09-15'),
('Orgullo y Prejuicio', 'Jane Austen', '1813-01-28'),
('Las Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', '1892-10-14'),
('El Señor de los Anillos', 'J.R.R. Tolkien', '1954-07-29'
);

-- Añade nuevos miembros en la tabla members con los siguientes datos:
/* para las columnas name y email:
- 'Sara Pérez', 'sara.perez@email.com'
- 'María González', 'maria.gonzalez@mymail.com'
- 'Carlos Rodríguez', 'carlos.rodriguez@email.com'
- 'Ana Martínez', 'ana.martinez@mail.com'
- 'Luis García', 'luis.garcia@mymail.com'*/

INSERT INTO members (name, email)
VALUES('Sara Pérez', 'sara.perez@email.com'),
('María González', 'maria.gonzalez@mymail.com'),
('Carlos Rodríguez', 'carlos.rodriguez@email.com'),
('Ana Martínez', 'ana.martinez@mail.com'),
('Luis García', 'luis.garcia@mymail.com');

-- Muestra todos los registros de la tabla books.
SELECT*FROM books;

-- Consulta y muestra solo los libros cuyo autor es "George Orwell".
SELECT*FROM books WHERE author="George Orwell";

-- Actualiza el título del libro "1984" a "1984 - Edición Especial".
UPDATE books SET title="1984 - Edición Especial" WHERE bookId=5;

	-- Otra opción desactivando la seguridad
	SET SQL_SAFE_UPDATES = 0;
	UPDATE books SET title = '1984 - Edición Especial' WHERE title = '1984';
	SET SQL_SAFE_UPDATES = 1;

-- Cambia el correo electrónico de "Sara Pérez" a "sara.perez2@email.com".
SELECT*FROM members;
UPDATE members SET email="sara.perez2@email.com" WHERE memberId=1;

	-- Otra opcion
	UPDATE members SET email = 'sara.perez2@email.com' WHERE name = 'Sara Pérez';
    
-- Elimina el libro "1984 - Edición Especial" de la tabla books.
SET SQL_SAFE_UPDATES = 0;
DELETE FROM books WHERE title = '1984 - Edición Especial'; 
SET SQL_SAFE_UPDATES = 1;  

-- Elimina el miembro "Sara Pérez" de la tabla members.  
DELETE FROM members WHERE name = 'Sara Pérez';
