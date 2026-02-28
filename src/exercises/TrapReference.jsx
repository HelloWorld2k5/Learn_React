import { useState, memo, useCallback } from "react";

// Do tham chiếu của hàm handleIncrease nên Content vẫn bị render lại dù có memo
const Content = memo(({ onIncrease }) => {
    console.log('Content được render');

    return (
        <>
            <h3>Content component</h3>
            <button onClick={onIncrease}>Tăng</button>
        </>
    );
});

function TrapReference() {
    const [count, setCount] = useState(0);
    
    // Dùng useCallback để đóng băng tham chiếu cho hàm handleIncrease
    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <>
            <Content onIncrease={handleIncrease}/>
            <p>{count}</p>
        </>
    );
}

export default TrapReference;