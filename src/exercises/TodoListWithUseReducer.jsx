import { useReducer, useRef } from "react";

// Initial state
const initialState = {
    job: '',
    jobs: []
};

// Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// const setJob = payload => {
//     return {
//         type: SET_JOB,
//         payload
//     }
// };

// const addJob = payload => {
//     return {
//         type: ADD_JOB,
//         payload
//     }
// };

// const deleteJob = payload => {
//     return {
//         type: DELETE_JOB,
//         payload
//     }
// };

// Reducer
const reducer = (state, action) => {
    
    // Action chính là đối tượng mình nhận được khi gọi các hàm
    // setJob, addJob, deleteJob trong dispatch
    console.log('Action: ', action);
    console.log('Prev state: ', state);

    let newState;

    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            newState = {
                ...state,
                jobs: state.jobs.filter((job, index) => index !== action.payload)
            }
            break;
        default:
            throw new Error('Invalid action!');
    }

    console.log('New state: ', newState);

    return newState;
};

function TodoListWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { job, jobs } = state;

    const inputRef = useRef(null);

    const handleChange = (e) => {
        // dispatch(setJob(e.target.value.trim()))
        dispatch({ type: SET_JOB, payload: e.target.value.trim() })
    };

    const handleAdd = () => {
        // dispatch(addJob(job));
        // dispatch(setJob(''));

        // Có thể tạo từng hàm riêng nhận tham số payload để trả về các đối tượng dưới
        dispatch({ type: ADD_JOB, payload: job });
        dispatch({ type: SET_JOB, payload: '' });
        inputRef.current.focus();
    };

    const handleDelete = (index) => {
        // dispatch(deleteJob(index))
        dispatch({ type: DELETE_JOB, payload: index });
    };

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={handleChange}
                type="text"
                placeholder="Nhap cong viec..."
            />
            <button onClick={handleAdd}>Thêm</button>
            <ul>
                {jobs.map((job, index) => 
                    <li key={index}>
                        {job}
                        <span className="delete" onClick={() => handleDelete(index)}>&times;</span>    
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoListWithUseReducer;