// Importamos los hooks.
import { useState } from 'react';

// Importamos los estilos.
import TaskList from './components/TaskList';

const App = () => {
    const [tasks] = useState([
        {
            id: 1,
            text: 'Ir a la compra',
            done: false,
        },
        {
            id: 2,
            text: 'Hacer ejercicios de react',
            done: true,
        },
    ]);

    return (
        <div className='app'>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
