import { useEffect, useState } from "react";
import { Link, useNavigate, Routes, Route, useLocation } from "react-router-dom";

const PublicPage = () => {
    return (
        <div>
            <h3>Đây là trang public nên chỉ cần gõ vào url thì ai cũng xem được</h3>
        </div>
    );
};

const SecretPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';

    useEffect(() => {
        // Nếu chưa login mà vào thẳng trang này sẽ bị điều hướng đến trang login
        if (!isLoggedIn) navigate("/login", { state: { desiredPage: "/secret" } });
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <h3>Đây là trang private nên phải đăng nhập admin trước thì mới xem được</h3>
            <p>{isLoggedIn && "Đăng nhập thành công"}</p>
        </div>
    );
};

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation(); // dùng location để lấy dữ liệu từ trang trước truyền đi

    const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';

    useEffect(() => {
        // Nếu đã đăng nhập rồi mà muốn vào trang đăng nhập tiếp sẽ bị route sang trang dashboard
        if (isLoggedIn) navigate("/dashboard");
    }, [isLoggedIn, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username !== "admin" || password !== "1") {
            console.log("Sai tên đăng nhập hoặc mật khẩu (gợi ý: admin - 1)");
            return;
        }

        console.log("Đăng nhập thành công");

        // Lưu trạng thái login và username vào local storage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", username);

        const desiredPage = location.state?.desiredPage;

        if (desiredPage) {
            console.log("Chuyển hướng đến trang secret mà user trước đó muốn truy cập");
            // Nếu có dữ liệu từ trang trước
            navigate(desiredPage);
            return;
        } else {
            console.log("Chuyển về trang dashboard theo mặc định");
            navigate("/dashboard");
        }
    };

    return (
        <div>
            <h3>Đây là trang đăng nhập</h3>
            <form onSubmit={handleLogin}>
                <label>Nhập tên người dùng</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Tên người dùng..."
                />
                <label>Nhập mật khẩu</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Mật khẩu..."
                />
                <button type="submit">Đăng nhập</button>
            </form>
            <button onClick={() => navigate('/')}>Về trang chủ</button>
        </div>
    );
};

const DashboardPage = () => {
    // Nếu truy cập thẳng trang dashboard bằng url khi chưa login thì bị trở về trang login

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        localStorage.clear();

        navigate("/");
    };

    return (
        <div>
            <h3>Đây là trang dashboard</h3>
            <h4>Chào mừng {username} hồi quy</h4>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <ul>
                <li>
                    <Link to="/login">Đi đăng nhập</Link>
                </li>
                <li>
                    <Link to="/public">Đi trang public</Link>
                </li>
                <li>
                    <Link to="/secret">
                        Đi trang private (chỉ đăng nhập xong mới xem được)
                    </Link>
                </li>
            </ul>
        </div>
    );
};

function SmartRedirectWithRouting() {
    return (
        <div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/secret" element={<SecretPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/public" element={<PublicPage />} />
            </Routes>
        </div>
    );
}

export default SmartRedirectWithRouting;
