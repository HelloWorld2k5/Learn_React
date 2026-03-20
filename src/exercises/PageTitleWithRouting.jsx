import { useEffect } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';

const HomePage = () => {
    useDocumentTitle('Chào mừng bạn!');

    return (
        <div>
            <h3>DAY LA TRANG HOME</h3>
        </div>
    );
};

const AboutPage = () => {
    useDocumentTitle('Liên hệ với chúng tôi');

    return (
        <div>
            <h3>DAY LA TRANG ABOUT</h3>
        </div>
    );
};

const ContactPage = () => {
    useDocumentTitle('Danh sách sản phẩm');

    return (
        <div>
            <h3>DAY LA TRANG CONTACT</h3>
        </div>
    );
};

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

function PageTitleWithRouting() {
    return (
        <div>
            <nav className="router">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
            </Routes>
        </div>
    );
}

export default PageTitleWithRouting;
