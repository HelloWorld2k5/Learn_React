import { useState } from "react";
import "./App.css";
import UseFetchWithCustomHook from "./exercises/UseFetchWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseFetchWithCustomHook />}
        </>
    );
}

export default App;
