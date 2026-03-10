import { useState } from "react";
import "./App.css";
import UseIntersectionObserverWithCustomHook from "./exercises/UseIntersectionObserverWithCustomHook";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <UseIntersectionObserverWithCustomHook />}
        </>
    );
}

export default App;
