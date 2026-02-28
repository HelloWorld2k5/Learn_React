import { useReducer } from "react";

// Initial state
const initialState = {
    cart: [], // danh sách sản phẩm trong giỏ hàng
    total: 0 // tổng giá tiền
};

// Actions
const ACTIONS = {
    ADD_TO_CART: 'add_to_cart', // thêm 1 sản phẩm vào giỏ hàng
    REMOVE_FROM_CART: 'remove_from_cart', // xoá 1 sản phẩm khỏi giỏ hàng
    UPDATE_QUANTITY: 'update_quantity' // cập nhật số lượng của 1 sản phẩm trong giỏ hàng
};

// Reducer
const reducer = (state, action) => {

    switch(action.type) {
        case ACTIONS.ADD_TO_CART: {
            const { id, price } = action.payload;
            const existed = state.cart.some(item => item.id === id);
            
            return (existed
                ? {
                    ...state,
                    total: state.total + price,
                    cart: state.cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
                }
                : {
                    ...state,
                    total: state.total + price,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            )
        }
        case ACTIONS.REMOVE_FROM_CART: // Xoá khỏi bằng id
            return {
                ...state,
                total: state.total - action.payload.price,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case ACTIONS.UPDATE_QUANTITY: { // Cập nhật số lượng của từng sản phẩm

            const { id, amount } = action.payload;

            // Cập nhật số lượng của sản phầm có id
            const updatedCart = state.cart.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + amount;

                    return {
                        ...item,
                        quantity: newQuantity <= 0 ? 0 : newQuantity
                    }
                }

                return item;
            });

            // Tính lại luôn total
            const newTotal = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

            return {
                ...state,
                cart: updatedCart,
                total: newTotal
            }
        }
        default:
            console.warn('Invalid action!');
            return state;
    }
};

const products = [
    {
        id: 1,
        name: 'Iphone 18 Pro Max',
        price: 1000 
    },
    {
        id: 2,
        name: 'RAM DDR5 64GB',
        price: 2500
    },
    {
        id: 3,
        name: 'Figure Songoku',
        price: 1500
    },
    {
        id: 5,
        name: 'Nitendo Switch',
        price: 4000
    },
    {
        id: 6,
        name: 'PS5 Xbox',
        price: 10000
    }
];

function ShoppingCartWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { cart, total } = state;

    const handleAddToCart = (product) => {
        // Thêm 1 sản phẩm với số lượng là 1 khi nhấn thêm
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    };

    const handleRemoveFromCart = (id, price) => {
        // Xoá 1 sản phẩm khỏi giỏ
        dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { id, price } });
    };

    const handleUpdateQuantity = (id, amount) => {
        dispatch({
            type: ACTIONS.UPDATE_QUANTITY,
            payload: { id, amount }
        });
    };

    return (
        <div>
            <h3>DANH SÁCH SẢN PHẨM CỦA SHOP NTT</h3>
            <ul>
                {products.map(product =>
                    <li key={product.id}>
                        <span>{product.name}, giá: {product.price}</span>
                        <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                    </li>
                )}
            </ul>

            <h3>GIỎ HÀNG CỦA BẠN: {cart.length === 0 ? 'TRỐNG' : ''}</h3>
            <ul >
                {cart.map(item =>
                    <li key={item.id}>
                        <span>{item.name}, giá: {item.price} (số lượng: {item.quantity})</span>
                        <button onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
                        <button onClick={() => handleUpdateQuantity(item.id, -1)}>-</button>
                        <button onClick={() => handleRemoveFromCart(item.id, item.price)}>Xoá khỏi giỏ hàng</button>
                    </li>
                )}
            </ul>
            <h3>TỔNG TIỀN: {total}</h3>
        </div>
    );
}

export default ShoppingCartWithUseReducer;