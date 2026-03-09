import { useState } from "react";
import "./App.css";
import UseOnClickOutside from "./exercises/UseOnClickOutside";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseOnClickOutside />}
        </>
    );
}

export default App;
