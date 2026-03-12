import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const HomePage = () => <h3>ĐÂY LÀ TRANG HOME</h3>;
const AboutPage = () => <h3>ĐÂY LÀ TRANG ABOUT</h3>;
const ContactPage = () => <h3>ĐÂY LÀ TRANG CONTACT</h3>;
const NotFoundPage = () => <h3>404 NOT FOUND PAGE</h3>;

function BasicRoutingMenu() {

    return (
        <div>
            <nav className="router">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default BasicRoutingMenu;
