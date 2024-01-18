// Importamos las prop-types.
import PropTypes from 'prop-types';

// Importamos los hooks.
import { useState } from 'react';

// Importamos los estilos.
import './List.css';

// Inicializamos el componente.
const List = ({ tasks, setTasks }) => {
    const [text, setText] = useState('');

    // Función que maneja el envío del formulario.
    const handleSubmit = (e) => {
        // Cancelamos el comportamiento por defecto del formulario.
        e.preventDefault();

        // Creamos la nueva tarea.
        const newTask = {
            id: tasks.length + 1,
            text,
            done: false,
        };

        // Actualizamos el array de tareas. Es importante crear un nuevo array para que React
        // recargue el componente y podamos visualizar los cambios.
        setTasks([...tasks, newTask]);

        // Vaciamos el input.
        setText('');
    };

    // Función que maneja el checkbox de la tarea.
    const handleTaskCheck = (currentTask) => {
        // Creamos un array donde almacenaremos todas las tareas dentro del array de tareas.
        const taskList = [...tasks];

        // Calculamos la posición de la tarea que queremos modificar.
        const position = currentTask.id - 1;

        // Modificamos la propiedad "done" tarea en cuestión (le damos la vuelta a la tortilla).
        taskList[position].done = !currentTask.done;

        // Modificamos el array de tareas agregando un nuevo array.
        setTasks(taskList);
    };

    return (
        <>
            <ul className='task-list'>
                {tasks.map((task) => {
                    return (
                        <li
                            key={task.id}
                            className={task.done ? 'task-done' : 'task-pending'}
                        >
                            <p>{task.text}</p>
                            <input
                                type='checkbox'
                                defaultChecked={task.done}
                                onChange={() => handleTaskCheck(task)}
                            />
                        </li>
                    );
                })}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={text}
                    maxLength='100'
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Agregar</button>
            </form>
        </>
    );
};

// Validamos las props.
List.propTypes = {
    setTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
};

// Exportamos el componente.
export default List;
