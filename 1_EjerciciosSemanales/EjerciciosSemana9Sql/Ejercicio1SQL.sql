DROP DATABASE campeonatoFS;
CREATE DATABASE IF NOT EXISTS campeonatoFS;

USE campeonatoFS;

CREATE TABLE IF NOT EXISTS equipos(
idEquipos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(30) NOT NULL UNIQUE,
patrocinador VARCHAR(30),
colorEquipacion1 VARCHAR(20) NOT NULL,
colorEquipacion2 VARCHAR(20) NOT NULL,
categoria ENUM("Sub-18","Senior") NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jugadores(
idJugadores INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellidos VARCHAR(30) NOT NULL,
edad INT NOT NULL,
direccion VARCHAR(100),
telefono VARCHAR(10),
equipoId INT UNSIGNED NOT NULL,
FOREIGN KEY (equipoId) REFERENCES equipos(idEquipos),
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS partidos(
idPartidos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
resultado VARCHAR(20) DEFAULT "No jugado",
equipo1Id INT UNSIGNED NOT NULL,
FOREIGN KEY (equipo1Id) REFERENCES equipos(idEquipos),
equipo2Id INT UNSIGNED NOT NULL,
FOREIGN KEY (equipo2Id) REFERENCES equipos(idEquipos),
campo VARCHAR(30) NOT NULL,
arbitro VARCHAR(30) NOT NULL,
incidencias VARCHAR(30) DEFAULT "Sin incidencias",
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

-- Inserta dos equipos en la misma categoría.
INSERT INTO equipos(nombre,patrocinador,colorEquipacion1,colorEquipacion2,categoria)
VALUES
("Burbujas de Atocha","GOA","Rojo","Blanco","Sub-18"),
("Victoria","","Azul","Verde","Sub-18");
SELECT*FROM equipos;

-- Inserta cuatro usuarios: relaciona a dos usuarios con el primer equipo y los otros dos con el segundo.
INSERT INTO jugadores(nombre,apellidos,edad,direccion,telefono,equipoId)
VALUES
("Mateo","Mellid",6,"","654897123",1),
("Gael","Vazquez",6,"A Coruña","652145368",1),
("Pedro","Rodriguez",9,"C/Inventada Nº 34 A Coruña","654897123",2),
("Alberto","Fernandez",5,"C/Cuento Nº 5, 5ºDch. A Coruña","654897487",2);
SELECT*FROM jugadores;

-- Inserta un partido. 
-- Haz que el primer y el segundo equipo se enfrenten en el partido que has creado.
INSERT INTO partidos(equipo1Id,equipo2Id,campo,arbitro)
VALUES
(2,1,"Riazor","Gil Manzano");
SELECT*FROM partidos;

-- Modifica el partido para añadir como resultado final 1-2.
UPDATE partidos SET resultado="1-2 Finalizado" WHERE idPartidos=1;
SELECT*FROM partidos;

-- Eliminamos el atributo apellido de la tabla de participantes.
ALTER TABLE jugadores DROP COLUMN apellidos;
SELECT*FROM jugadores;

-- Modifica el nombre de la columna teléfono en la tabla de participantes
ALTER TABLE jugadores RENAME COLUMN telefono TO phone;
SELECT*FROM jugadores;

-- Modifica el nombre y el teléfono del jugador con id 2.
UPDATE jugadores SET nombre="Pepe", phone="6215789" WHERE idJugadores=2;
SELECT*FROM jugadores;

-- Elimina a un jugador de cada equipo.
DELETE FROM jugadores WHERE idJugadores=2;
DELETE FROM jugadores WHERE idJugadores=4;
SELECT*FROM jugadores;