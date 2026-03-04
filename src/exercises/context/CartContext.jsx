import { createContext, useReducer } from "react";

const CartContext = createContext();

// Initial state
const initialState = {
    cart: [], // danh sách sản phẩm trong giỏ hàng
    total: 0, // tổng giá tiền
};

// Actions
const ACTIONS = {
    ADD_TO_CART: "add_to_cart", // thêm 1 sản phẩm vào giỏ hàng
    REMOVE_FROM_CART: "remove_from_cart", // xoá 1 sản phẩm khỏi giỏ hàng
    UPDATE_QUANTITY: "update_quantity", // cập nhật số lượng của 1 sản phẩm trong giỏ hàng
};

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART: {
            const { id, price } = action.payload;
            const existed = state.cart.some((item) => item.id === id);

            return existed
                ? {
                      ...state,
                      total: state.total + price,
                      cart: state.cart.map((item) =>
                          item.id === id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item,
                      ),
                  }
                : {
                      ...state,
                      total: state.total + price,
                      cart: [...state.cart, { ...action.payload, quantity: 1 }],
                  };
        }
        case ACTIONS.REMOVE_FROM_CART: // Xoá khỏi bằng id
            return {
                ...state,
                total: state.total - action.payload.price * action.payload.quantity,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ACTIONS.UPDATE_QUANTITY: {
            // Cập nhật số lượng của từng sản phẩm

            const { id, amount } = action.payload;

            // Cập nhật số lượng của sản phầm có id
            const updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + amount;

                    return {
                        ...item,
                        quantity: newQuantity <= 0 ? 0 : newQuantity,
                    };
                }

                return item;
            });

            // Tính lại luôn total
            const newTotal = updatedCart.reduce(
                (total, item) => total + item.price * item.quantity,
                0,
            );

            return {
                ...state,
                cart: updatedCart,
                total: newTotal,
            };
        }
        default:
            console.warn("Invalid action!");
            return state;
    }
};

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
    );
}

export { CartContext, ACTIONS };
export default CartProvider;
