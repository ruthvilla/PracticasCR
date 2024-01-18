-- Ejercicio 1 Semana 10 Seleccion y modificación

/*Sin modificar la base de datos que acompaña a este ejercicio:
1 Selecciona todos los datos de los estudiantes incluyendo la información de su dirección.
2 selecciona el nombre, apellidos y email de los estudiantes de Indonesia.
3 Utiliza ALTER TABLE para añadir a la tabla students la columna edad (age).
4 Rellena la columna age en todos los usuarios con los valores que tú decidas.*/

USE bootcamp;
SELECT*FROM addresses;
SELECT*FROM students;

SELECT students.*,
	   addresses.*
       FROM students
       INNER JOIN addresses ON addresses.studentId=students.id;

SELECT students.name,
	   students.lastname,
       students.email,
       addresses.country
       FROM students
       INNER JOIN addresses ON addresses.studentId=students.id
       WHERE country="Indonesia";

ALTER TABLE students ADD age DATE;

UPDATE students SET age= "1982-06-07" WHERE id=1;
UPDATE students SET age= "1988-06-06" WHERE id=2;
UPDATE students SET age= "1982-01-02" WHERE id=3;
UPDATE students SET age= "1995-12-07" WHERE id=4;
UPDATE students SET age= "1987-03-30" WHERE id=5;

SELECT*FROM students;