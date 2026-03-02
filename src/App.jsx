import { useState } from "react";
import "./App.css";
import AuthenticationFlow from "./exercises/AuthenticationFlow";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <AuthenticationFlow />}
        </>
    );
}

export default App;
