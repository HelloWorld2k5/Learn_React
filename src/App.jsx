import { useState } from "react";
import "./App.css";
import GlobalStateWithContextAndUseReducer from "./exercises/GlobalStateWithContextAndUseReducer";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <GlobalStateWithContextAndUseReducer />}
        </>
    );
}

export default App;
