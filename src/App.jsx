import { useState } from "react";
import "./App.css";
import UseLocalStorageWithCustomHook from "./exercises/UseLocalStorageWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseLocalStorageWithCustomHook />}
        </>
    );
}

export default App;
