import { useState, useMemo } from "react";

function HandleBigData() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    // Khi count tăng, phần logic tính tổng tiền không bị chạy lại vô nghĩa, chỉ khi mảng sản phẩm thay đổi thì mới chạy
    const total = useMemo(() => {
        console.log("Tính lại");

        return products.reduce((total, product) => total + product.price, 0);
    }, [products]);

    const handleAdd = () => {
        setProducts((prev) => [
            ...prev,
            {
                name,
                price: parseInt(price),
            },
        ]);
    };

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value.trim())}
                type="text"
                placeholder="Tên sản phẩm..."
            />
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value.trim())}
                type="text"
                placeholder="Giá sản phẩm..."
            />
            <button onClick={handleAdd}>Thêm mới</button>
            <br />
            Product List:
            <ul>
                {products.map((product, index) => {
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>;
                })}
            </ul>
            Total Price: {total}
            <br />
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
}

export default HandleBigData;
