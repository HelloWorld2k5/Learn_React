import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Header = () => {
    const { user, isAuthenticated, handleLogin, handleLogout } =
        useContext(AuthContext);

    return (
        <div style={{ border: "1px solid #000", marginBottom: "20px" }}>
            <p>ĐÂY LÀ COMPONENT HEADER</p>
            <p>{user ? `CHÀO MỪNG ${user.name} HỒI QUY` : "CHƯA ĐĂNG NHẬP"}</p>
            <button onClick={isAuthenticated ? handleLogout : handleLogin}>
                {isAuthenticated ? "Log out" : "Log in"}
            </button>
        </div>
    );
};

const Profile = () => {
    const { user, isAuthenticated } = useContext(AuthContext);

    return (
        <div style={{ border: "1px solid #000", margin: "10px" }}>
            <p>ĐÂY LÀ COMPONENT PROFILE NẰM TRONG PAGE</p>
            <p>Email: {isAuthenticated ? user.email : "Chưa đăng nhập"}</p>
        </div>
    );
};

const Page = () => {
    return (
        <div style={{ border: "1px solid #000" }}>
            <p>ĐÂY LÀ COMPONENT PAGE</p>
            <Profile />
        </div>
    );
};

function AuthenticationFlow() {
    return (
        <>
            <Header />
            <Page />
        </>
    );
}

export default AuthenticationFlow;
