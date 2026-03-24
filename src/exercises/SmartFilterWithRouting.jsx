import { useEffect, useMemo, useState } from "react";
import { Link, Routes, Route, useSearchParams } from "react-router-dom";

const products = [
    { id: 1, name: "iphone", price: "low" },
    { id: 2, name: "android", price: "high" },
    { id: 3, name: "laptop", price: "medium" },
    { id: 4, name: "gtx 1650", price: "low" },
    { id: 5, name: "samsung", price: "medium" },
    { id: 6, name: "xiaomi", price: "low" },
    { id: 7, name: "fan", price: "high" },
];

const HomePage = () => {
    return (
        <div>
            <h3>Home page</h3>
            <Link to="/search">Tìm kiếm sản phẩm</Link>
        </div>
    );
};

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const name = searchParams.get("name") || "";
    const price = searchParams.get("price") || "";
    
    // Để sử dụng debounce cho nhập input tránh cập nhật url liên tục
    const [input, setInput] = useState(name);

    const updateSearchParams = (key, value) => {
        const newSearchParams = new URLSearchParams(searchParams);

        // Nếu value không có, chuỗi rỗng thì xoá query
        if (value) {
            newSearchParams.set(key, value);
        } else {
            newSearchParams.delete(key);
        }

        setSearchParams(newSearchParams);
    };

    useEffect(() => {
        setInput(name);
    }, [name]);

    // Dùng debounce sau 500ms thì mới update url
    useEffect(() => {
        const timerId = setTimeout(() => {
            updateSearchParams('name', input);
            console.log('update url');
        }, 500);

        return () => clearTimeout(timerId);
    }, [input]);

    const filteredProducts = products.filter((product) => {

        // Nếu chưa filter gì thì hiện ra tất cả sản phẩm, logic này có chủ đích nên đọc kỹ
        const matchName = product.name.toLowerCase().includes(name.toLowerCase());
        const matchPrice = price ? product.price === price : true;
        return matchName && matchPrice;
    });

    return (
        <div>
            <h3>Search page</h3>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text"
                placeholder="nhập tên sản phẩm muốn tìm..."
            />
            <div>
                <button
                    style={{ backgroundColor: price === "low" ? "blue" : "white" }}
                    onClick={() => updateSearchParams("price", "low")}
                >
                    Giá thấp
                </button>
                <button
                    style={{ backgroundColor: price === "medium" ? "blue" : "white" }}
                    onClick={() => updateSearchParams("price", "medium")}
                >
                    Giá trung bình
                </button>
                <button
                    style={{ backgroundColor: price === "high" ? "blue" : "white" }}
                    onClick={() => updateSearchParams("price", "high")}
                >
                    Giá cao
                </button>
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function SmartFilterWithRouting() {
    return (
        <div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default SmartFilterWithRouting;
