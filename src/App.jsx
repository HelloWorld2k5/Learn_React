import { useState } from "react";
import "./App.css";
import SmartRedirectWithRouting from "./exercises/SmartRedirectWithRouting";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <SmartRedirectWithRouting />}
        </ThemeProvider>
    );
}

export default App;
