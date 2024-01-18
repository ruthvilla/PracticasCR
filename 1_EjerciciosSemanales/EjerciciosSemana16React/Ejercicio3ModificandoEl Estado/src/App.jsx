// Importamos los hooks.
import { useState } from 'react';

// Importamos los componentes.
import List from './components/List';

const App = () => {
    const [tasks, setTasks] = useState([
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
            <List tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
