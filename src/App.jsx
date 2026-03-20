import { useState } from "react";
import "./App.css";
import PageTitleWithRouting from "./exercises/PageTitleWithRouting";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <PageTitleWithRouting />}
        </ThemeProvider>
    );
}

export default App;
