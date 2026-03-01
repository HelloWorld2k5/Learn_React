import { useEffect, useReducer } from "react";

// Initial state
const initialState = {
    username: '',
    email: '',
    password: '',
    error: null,
    isSubmitting: false
};

// Actions
const ACTIONS = {
    SET_FIELD: 'set_field',
    SET_ERROR: 'set_error',
    SET_IS_SUBMITTING: 'set_is_submitting'
};

// Reducer
const reducer = (state, action) => {

    switch(action.type) {
        case ACTIONS.SET_FIELD:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ACTIONS.SET_IS_SUBMITTING:
            return {
                ...state,
                isSubmitting: action.payload
            }
        default:
            console.warn('Invalid action');
            return state;
    }
};

function ComplexFormWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { username, email, password, error, isSubmitting } = state;

    useEffect(() => {
        if (!isSubmitting) return;

        console.log('Form is submitting...');

        const timerId = setTimeout(() => {
            console.info('Successfully!');
            dispatch({ type: ACTIONS.SET_IS_SUBMITTING, payload: false });

        }, 2000);

        return () => clearTimeout(timerId);
    }, [isSubmitting]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        dispatch({
            type: ACTIONS.SET_FIELD,
            payload: { name, value: value.trim() } // Cố tình trim() khi đang gõ để user không nhập được dấu cách
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Chặn re-load page của sự kiện submit của form

        if (password.length < 6) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: 'Mật khẩu không dưới 6 kí tự!' });
            return;
        }

        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
        dispatch({ type: ACTIONS.SET_IS_SUBMITTING, payload: true });
    };
    
    return (
        <>
            <h3>FORM</h3>
            <form action="" onSubmit={handleSubmit}>
                <input name="username" value={username} onChange={handleChange} type="text" placeholder="Enter username..."/>
                <input name="email" value={email} onChange={handleChange} type="text" placeholder="Enter email..."/>
                <input name="password" value={password} onChange={handleChange} type="password" placeholder="Enter password..."/>
                <p style={{ color: 'red' }}>{error}</p>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ComplexFormWithUseReducer;