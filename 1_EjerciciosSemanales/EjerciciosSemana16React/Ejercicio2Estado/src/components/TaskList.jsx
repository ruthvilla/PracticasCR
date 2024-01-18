// Importamos las prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './TaskList.css';

// Inicializamos el componente.
const TaskList = ({ tasks }) => {
    return (
        <ul className='task-list'>
            {tasks.map((task) => {
                return (
                    <li
                        key={task.id}
                        className={task.done ? 'task-done' : 'task-pending'}
                    >
                        <p>{task.text}</p>
                        <input type='checkbox' defaultChecked={task.done} />
                    </li>
                );
            })}
        </ul>
    );
};

// Validamos las props.
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

// Exportamos el componente.
export default TaskList;
