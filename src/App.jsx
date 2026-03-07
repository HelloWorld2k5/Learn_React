import { useState } from "react";
import "./App.css";
import UseWindowSizeWithCustomHook from "./exercises/UseWindowSizeWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseWindowSizeWithCustomHook />}
        </>
    );
}

export default App;
