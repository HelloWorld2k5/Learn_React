import { useEffect, useRef, useState } from "react";


// Vấn đề stale closure là khi setInterval sẽ nhớ mãi giá trị mà nó nhận được trong closure
// làm cho giá trị không đổi => dùng useRef để làm thay đổi giá trị mà không khởi tạo lại timer

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback; //Luôn lấy callback mới nhất mỗi khi component re-render
    }, [callback]);

    useEffect(() => {
        if (delay === null) return;

        const timerId = setInterval(() => {

            //Không gọi trực tiếp callback mà gọi thông qua ref để luôn lấy được callback mới nhất
            //và dữ liệu mới nhất tránh stale closure
            savedCallback.current();
        }, delay);

        return () => clearInterval(timerId);
    }, [delay]); // Trừ khi delay thay đổi, bộ đếm luôn được giữ nguyên
};

function UseIntervalWithCustomHook() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);

    useInterval(() => {
        setCount(count + 1);
    }, delay);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setDelay(null)}>Pause</button>
            <button onClick={() => setDelay(1000)}>Continue</button>
            <button onClick={() => setDelay(prev => prev - 500)}>Boost</button> 
        </>
    );
}

export default UseIntervalWithCustomHook;