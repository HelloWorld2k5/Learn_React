import { useState } from "react";
import "./App.css";
import SimulationLoginFlow from "./exercises/SimulationLoginFlow";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <SimulationLoginFlow />}
        </ThemeProvider>
    );
}

export default App;
