import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <Link to="/login">Đăng nhập</Link>
        </div>
    );
};

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate(); // Vi đây là hook nên hàm định tuyến phải được khai báo ở top level của function component

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('username', username);

        navigate('/dashboard');
    };

    return (
        <div>
            <h3>Đây là trang đăng nhập</h3>
            <form action="" onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Nhập tên người dùng..."/>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

const DashboardPage = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');

        navigate('/login');
    };

    return (
        <div>
            <h3>Đây là trang dashboard</h3>
            <h4>Chào mừng {username} hồi quy</h4>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

function SimulationLoginFlow() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Routes>
        </div>
    );
}

export default SimulationLoginFlow;