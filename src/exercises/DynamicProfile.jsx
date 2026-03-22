import { useMemo } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

const users = [
    {
        id: 1,
        name: 'Nguyễn Thế Trưởng',
        bio: 'Sinh viên KTPM Thuỷ Lợi'
    },
    {
        id: 2,
        name: 'Phương Văn Đức',
        bio: 'Sinh viên Garbage Thuỷ Lợi'
    },
    {
        id: 3,
        name: 'Lục Văn Thuận',
        bio: 'Sinh viên Crazy Thuỷ Lợi'
    }
];

const UserList = () => {

    return (
        <div>
            <h3>Danh sách người dùng</h3>
            <ul>
                {users.map(user =>
                    <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                )}
            </ul>
        </div>
    );
};

const UserProfile = () => {
    const { userId } = useParams();

    const user = useMemo(() => {
        return users.find(user => user.id === userId);
    }, [userId]);

    return (
        <div>
            <h3>Trang cá nhân của người dùng</h3>
            {!user && <p>Không tìm thấy người dùng</p>}
            {user && (
                <>
                    <p>Tên người dùng: {user.name}</p>
                    <p>Tiểu sử người dùng: {user.bio}</p>
                </>
            )}
        </div>
    );
};

const HomePage = () => {

    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <Link to="/users">Danh sách người dùng</Link>
        </div>
    );
};

function DynamicProfile() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/users" element={<UserList />}/>
                <Route path="/users/:userId" element={<UserProfile />}/>
            </Routes>
        </div>
    );
}

export default DynamicProfile;