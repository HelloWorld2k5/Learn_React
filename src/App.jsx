import { useState } from "react";
import "./App.css";
import StyledMenu from "./exercises/StyledMenu";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <StyledMenu />}
        </ThemeProvider>
    );
}

export default App;
