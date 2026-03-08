import { use, useEffect, useState } from "react";

// Khi gõ search thì sau 1 khoảng thời gian mới call API với custom hooks


// Các custom hook không được điều khiển, phụ thuộc lẫn nhau
const useFetch = (url) => {
    const [data, setData] = useState(null); // Tất cả các giá trị state trong custom hook, mỗi vần re-render 
    const [error, setError] = useState(null);   // đều quay về giá trị ban đầu nếu không được bảo lưu bằng tham số
    const [loading, setLoading] = useState(false); // nhận được từ hàm

    useEffect(() => {
        if (!url) return;

        console.log("call api");
        // Lỗi cảnh bảo từ eslint gây ra vòng lặp render, ko vấn đề gì
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Không thể lấy dữ liệu từ API!");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value.trim());
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
};


// Debounce là giá trị nhận được sau khi đã khử nhiễu
function UseDebounceWithCustomHook() {
    const [username, setUsername] = useState("");
    const debouncedUsername = useDebounce(username, 2000);

    const { data, error, loading } = useFetch(
        debouncedUsername ? `https://api.github.com/users/${debouncedUsername}` : null,
    );

    console.log('re-render');

    return (
        <>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter github username..."
            />
            {loading && <div className="loading"></div>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div className="user-info">
                    <p>{data.login}</p>
                    <img src={data.avatar_url} alt="Avatar" />
                </div>
            )}
        </>
    );
}

export default UseDebounceWithCustomHook;
