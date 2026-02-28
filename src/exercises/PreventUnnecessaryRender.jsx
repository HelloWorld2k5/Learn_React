import { useState, memo } from "react";

// Bọc Content trong memo để không bị re-render ko cần thiết
const Content = memo(() => {
    console.log('Content được render!');

    return (
        <h1>Content component</h1>
    );
});

function PreventUnnecessaryRender() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Content />
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>{count}</p>
        </>
    );
}

export default PreventUnnecessaryRender;