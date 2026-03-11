import { useState } from "react";
import "./App.css";
import UseArrayWithCustomHook from "./exercises/UseArrayWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseArrayWithCustomHook />}
        </>
    );
}

export default App;
