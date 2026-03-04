import { useState } from "react";
import "./App.css";
import GlobalShoppingCart from "./exercises/GlobalShoppingCart";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <GlobalShoppingCart />}
        </>
    );
}

export default App;
