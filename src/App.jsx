import { useState } from "react";
import "./App.css";
import ShakeEffect from "./exercises/ShakeEffect";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <ShakeEffect />}
        </>
    );
}

export default App;
