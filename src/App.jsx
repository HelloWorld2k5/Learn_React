import { useState } from "react";
import "./App.css";
import CountDownRouting from "./exercises/CountDownRouting";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <CountDownRouting />}
        </ThemeProvider>
    );
}

export default App;
