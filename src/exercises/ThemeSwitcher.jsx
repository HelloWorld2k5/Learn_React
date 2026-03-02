import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className={`btn-theme ${theme}`} onClick={toggleTheme}>
            Toggle theme
        </button>
    );
};

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return <p className={`header ${theme}`}>ĐÂY LÀ COMPONENT HEADER</p>;
};

function ThemeSwitcher() {
    return (
        <>
            <Header />
            <Button />
        </>
    );
}

export default ThemeSwitcher;
