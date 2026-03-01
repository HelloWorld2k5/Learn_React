import { useState } from 'react';
import './App.css';
import TodoListWithUseReducer from './exercises/TodoListWithUseReducer';

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <TodoListWithUseReducer/>}
        </>
    );
}

export default App;