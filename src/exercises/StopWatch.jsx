import { useState, useEffect, useRef } from "react";

function StopWatch() {
    const [minute, setMinute] = useState(60);
    const timerIdRef = useRef();

    useEffect(() => {
        return () => {
            clearInterval(timerIdRef.current);
            console.log('Clear interval khi unmount')
        }
    }, []);

    const handleStart = () => {
        console.log('Set interval');
        timerIdRef.current = setInterval(() => {
            setMinute(prev => {
                const nextValue = prev - 1;
                if (nextValue <= 0) {
                    clearInterval(timerIdRef.current);
                    return 0;
                }

                return nextValue
            })
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timerIdRef.current);
        console.log('Clear interval khi dung');
    };

    const handleReset = () => {
        clearInterval(timerIdRef.current);
        console.log('Clear interval khi dat lai');
        setMinute(0);
    };

    return (
        <>
            <p>{minute}</p>
            <button onClick={handleStart}>Bắt đầu</button>
            <button onClick={handleStop}>Dừng lại</button>
            <button onClick={handleReset}>Đặt lại</button>
        </>
    );
}

export default StopWatch;