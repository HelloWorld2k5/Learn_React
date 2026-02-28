import { useReducer } from "react";

// Initial useState
const initialState = {
    count: 0,
    step: 0
};

// Actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const SET_STEP = 'set_step';
const RESET = 'reset';

const increment = payload => {
    return {
        type: INCREMENT,
        payload
    }
};

const decrement = payload => {
    return {
        type: DECREMENT,
        payload
    };
}

const setStep = payload => {
    return {
        type: SET_STEP,
        payload
    }
};

const reset = payload => {
    return {
        type: RESET,
        payload
    }
}

// Reducer 
const reducer = (state, action) => {
    console.log('Prev state: ', state);
    console.log('Action: ', action);

    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        case SET_STEP:
            return {
                ...state,
                step: action.payload
            }
        case RESET:
            return {
                ...state,
                count: action.payload.count,
                step: action.payload.step
            }
        default:
            throw new Error('Invalid action!');
    }
};

function CounterProWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    const handleChange = (e) => {
        const stepp = e.target.value.trim() === '' ? 0 : parseInt(e.target.value);

        dispatch(setStep(stepp));
    };

    const handleIncrease = () => {
        dispatch(increment(step));
    };

    const handleDecrease = () => {
        dispatch(decrement(step));
    };

    const handleReset = () => {
        dispatch(reset(initialState));
    };

    return (
        <div>
            <input value={step} onChange={handleChange} type="text" placeholder="Enter step..."/>
            <p>{count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default CounterProWithUseReducer;