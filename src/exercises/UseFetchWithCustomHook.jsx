import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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

function UseFetchWithCustomHook() {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
    const { data, error, loading } = useFetch(url);

    console.log('re-render');

    console.log(error);

    return (
        <>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}>
                Posts
            </button>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/albums")}>
                Albums
            </button>
            <h3 style={{ color: error ? "red" : "green" }}>
                {error ? error : "Fetch thành công"}
            </h3>
            {loading && <div className="loading"></div>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default UseFetchWithCustomHook;
