import { useState } from 'react';
import './App.css';
import ComplexFormWithUseReducer from './exercises/ComplexFormWithUseReducer';

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <ComplexFormWithUseReducer/>}
        </>
    );
}

export default App;