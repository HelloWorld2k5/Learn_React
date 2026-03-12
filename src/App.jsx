import { useState } from "react";
import "./App.css";
import FollowMousePosition from "./exercises/FollowMousePosition";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <FollowMousePosition />}
        </ThemeProvider>
    );
}

export default App;
