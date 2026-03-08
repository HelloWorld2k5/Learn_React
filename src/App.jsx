import { useState } from "react";
import "./App.css";
import UseDebounceWithCustomHook from "./exercises/UseDebounceWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseDebounceWithCustomHook />}
        </>
    );
}

export default App;
