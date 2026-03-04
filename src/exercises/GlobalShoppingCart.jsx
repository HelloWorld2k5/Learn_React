import { useContext, useMemo } from "react";
import { CartContext, ACTIONS } from "./context/CartContext";

const products = [
    {
        id: 1,
        name: "RTX 4090",
        price: 100000000,
    },
    {
        id: 2,
        name: "Laptop Dell XPS 15 7950",
        price: 10000000,
    },
    {
        id: 3,
        name: "RAM DDR5 64GB",
        price: 2000000,
    },
    {
        id: 4,
        name: "Iphone 18 PRO MAX",
        price: 5000000,
    },
    {
        id: 5,
        name: "Dildo",
        price: 12345,
    },
];

const ProductList = () => {
    const [, dispatch] = useContext(CartContext); // lấy hàm dispatch thôi

    const handleAddToCart = (product) => {
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    };

    return (
        <div>
            <h3>ĐÂY LÀ COMPONENT PRODUCT LIST HIỂN THỊ DANH SÁCH SẢN PHẨM</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>
                            {product.name}, giá: {product.price}
                        </span>
                        <button onClick={() => handleAddToCart(product)}>
                            Thêm vào giỏ hàng
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CartIcon = () => {
    const [state] = useContext(CartContext);

    const { cart } = state;

    const totalQuantity = useMemo(() => {
        return cart.reduce((totalQuan, product) => totalQuan + product.quantity, 0);
    }, [cart]);

    return <p>Tổng số lượng của tất cả các sản phẩm: {totalQuantity}</p>;
};

const Header = () => {
    return (
        <div>
            <h3>ĐÂY LÀ COMPONENT HEADER</h3>
            <CartIcon />
        </div>
    );
};

const CartPage = () => {
    const [state, dispatch] = useContext(CartContext);

    const { cart, total } = state;

    const handleRemoveFromCart = (id, price, quantity) => {
        // Xoá 1 sản phẩm khỏi giỏ
        dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { id, price, quantity } });
    };

    const handleUpdateQuantity = (id, amount) => {
        dispatch({
            type: ACTIONS.UPDATE_QUANTITY,
            payload: { id, amount },
        });
    };

    return (
        <div>
            <h3>ĐÂY LÀ COMPONENT CART PAGE HIỂN THỊ DANH SÁCH SẢN PHẨM TRONG GIỎ HÀNG</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <span>
                            {item.name}, giá: {item.price} (số lượng: {item.quantity})
                        </span>
                        <button onClick={() => handleUpdateQuantity(item.id, 1)}>
                            +
                        </button>
                        <button onClick={() => handleUpdateQuantity(item.id, -1)}>
                            -
                        </button>
                        <button
                            onClick={() =>
                                handleRemoveFromCart(item.id, item.price, item.quantity)
                            }
                        >
                            Xoá khỏi giỏ hàng
                        </button>
                    </li>
                ))}
            </ul>
            <h3>TỔNG TIỀN: {total}</h3>
        </div>
    );
};

function GlobalShoppingCart() {
    return (
        <>
            <ProductList />
            <Header />
            <CartPage />
        </>
    );
}

export default GlobalShoppingCart;
