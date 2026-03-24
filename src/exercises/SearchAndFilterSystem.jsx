import { useMemo, useState } from "react";
import { Link, Routes, Route, useSearchParams } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Dildo",
    },
    {
        id: 2,
        name: "Iphone",
    },
    {
        id: 3,
        name: "Android",
    },
    {
        id: 4,
        name: "Laptop",
    },
];

const HomePage = () => {
    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <h3>Danh sách sản phẩm</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <Link to="/search">Tìm kiếm sản phẩm</Link>
        </div>
    );
};

const ProductSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryName = searchParams.get("name") || ""; // Nếu có query thì lấy, ko thì chuỗi rỗng

    const [input, setInput] = useState(queryName);

    // Bọc vào useMemo để mỗi khi queryName thay đổi mới lọc
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(queryName.toLowerCase()),
        );
    }, [queryName]);

    const handleSearch = () => {
        setSearchParams({ name: input });
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Tên sản phẩm..."
            />
            <button onClick={handleSearch}>Tìm kiếm</button>
            <p>
                {filteredProducts.length <= 0
                    ? "Không có sản phẩm nào"
                    : "Tìm kiếm sản phẩm thành công"}
            </p>
            <ul>
                {filteredProducts.length > 0 &&
                    filteredProducts.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
            </ul>
        </div>
    );
};

function SearchAndFilterSystem() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<ProductSearch />} />
            </Routes>
        </div>
    );
}

export default SearchAndFilterSystem;
