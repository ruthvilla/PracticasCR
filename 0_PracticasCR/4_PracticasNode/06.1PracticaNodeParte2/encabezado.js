/** Crea un nuevo archivo llamado arguments.js. El programa debe aceptar un argumento y según el argumento que sea debe realizar una de las siguientes opciones:

--dirname: imprime por consola la ruta absoluta al directorio donde se encuentra el archivo arguments.js.

--filename: imprime por consola el nombre archivo actual.

--time: imprime en consola la fecha y hora actuales.

--log: guarda en un archivo info.txt en la misma ruta que el archivo principal con los datos anteriores con el siguiente formato:


[02/11/2023, 11:43] - [/home/myUser/documents/hackaboss/proyect] - [argumentos.js]


--delete: elimina el archivo info.txt creado para almacenar los logs.



Al ejecutar el archivo arguments.js con diferentes argumentos se debe ver la salida correspondiente:

node arguments.js --dirname  # Mostrará la ruta absoluta al directorio donde se encuentra el archivo.
node arguments.js --filename  # Mostrará el nombre del archivo actual.
node arguments.js --time  # Mostrará la fecha y hora actual.
node arguments.js --log  # Guardará la información en un archivo de texto llamado "info.txt".
node arguments.js --delete # Eliminará el archivo "info.txt" si existe.


A tener en cuenta:

Si se inserta un argumento no contemplado debe lanzarse un error con el mensaje: El argumento "${argv}" no es válido. Esto no debe afectar a los dos primeros argumentos que figuran en el array process.argv dado que son autogenerados por lo que la comprobación se hará desde la posición 2 en adelante.

Ha de ser posible insertar varios argumentos a la vez pero en ningún caso se podrán introducir simultáneamente los argumentos "--log" y "--delete". De darse esta circunstancia lanza un error con el mensaje: No es posible combinar el argumento "--log" con "--delete".

Recuerda que para guardar información en un txt debes hacer uso del módulo fs/promises.

Si ocurre un error muestra en un console.error el mensaje de error. Si el error hace referencia a un archivo no encontrado muestra el mensaje: El archivo no existe.*/