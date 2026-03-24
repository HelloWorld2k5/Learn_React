import { useState } from "react";
import "./App.css";
import BookLibraryWithRouting from "./exercises/BookLibraryWithRouting";
import ThemeProvider from "./exercises/context/ThemeContext";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeProvider>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <BookLibraryWithRouting />}
        </ThemeProvider>
    );
}

export default App;
