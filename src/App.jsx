import { useState } from "react";
import "./App.css";
import SmartFilterWithRouting from "./exercises/SmartFilterWithRouting";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <SmartFilterWithRouting />}
        </ThemeProvider>
    );
}

export default App;
