import { useState } from "react";
import "./App.css";
import SmartInput from "./exercises/SmartInput";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <SmartInput />}
        </>
    );
}

export default App;
