import { useContext } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";


const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h3 className={`home ${theme}`}>DAY LA TRANG HOME</h3>
        </div>
    );
};

const SettingsPage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Checkbox true -> light theme
    // Checkbox false -> dark theme
    console.log(theme);

    return (
        <div>
            <h3 className={`setting ${theme}`}>DAY LA TRANG SETTINGS</h3>
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'}/>
        </div>
    );
};

const NotFoundPage = () => {
    return () => <h3>404 NOT FOUND PAGE</h3>;
};

function StyledMenu() {
    return (
        <div>
            <nav className="router">
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/settings">Settings</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/settings" element={<SettingsPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </div>
    );
}

export default StyledMenu;