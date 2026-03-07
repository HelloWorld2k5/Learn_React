import { useState } from "react";
import "./App.css";
import UseToggleWithCustomHook from "./exercises/UseToggleWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseToggleWithCustomHook />}
        </>
    );
}

export default App;
