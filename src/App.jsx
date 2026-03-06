import { useState } from "react";
import "./App.css";
import RemoteControl from "./exercises/RemoteControl";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <RemoteControl />}
        </>
    );
}

export default App;
