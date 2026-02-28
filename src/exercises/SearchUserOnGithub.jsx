import { useState, useEffect } from "react";

function SearchUserOnGithub() {
    const [username, setUsername] = useState(''); // Biến lấy dữ liệu từ input
    const [loading, setLoading] = useState(false); // Biến set trạng thái của loading trong lúc lấy data
    const [info, setInfo] = useState(''); // Biến in ra thông báo
    const [user, setUser] = useState(); // Biến lưu thông tin người dùng lấy được từ API
    
    useEffect(() => {
        console.log('Gọi callback trong useEffect để đếm ngược số giây sau khi người dùng dừng nhập để callAPI');
        
        const timerId = setTimeout(() => {
            
            if (username.trim() === '') {
                setUser(null);
                setInfo('Vui lòng nhập tên người dùng');
                return;
            }

            setLoading(true);

            console.log('Calling API');
            fetch(`https://api.github.com/users/${username}`)
                .then(res => {
                    if (!res.ok) {
                        setInfo('Lỗi call API');
                        return null;
                    }

                    return res.json();
                })
                .then(user => {
                    if (user) {
                        setUser(user);
                        setInfo('Tìm kiếm người dùng thành công')
                    }
                    else {
                        setUser(null);
                        setInfo('Không tìm thấy người dùng');
                    }
                })
                .catch(error => {
                    setUser(null);
                    setInfo(error.message);
                })
                .finally(() => setLoading(false));
        }, 1000);

        return () => clearTimeout(timerId);
    }, [username]);

    return (
        <>
            <input value={username} type="text" placeholder="Tìm kiếm tên người dùng trên Github" onChange={(e) => setUsername(e.target.value)}/>
            {loading && <div className="loading"></div>}
            <div className="user-info">
                <p>Trạng thái tìm kiếm: {info}</p>
                <p>Ảnh đại diện</p>
                {user && (
                    <>
                        <img src={user.avatar_url} alt="Ảnh đại diện" />
                        <p>Tên người dùng: {user.login}</p>
                        <p>Số người theo dõi: {user.followers}</p>
                    </>
                )}
            </div>
        </>
    );
}

export default SearchUserOnGithub;