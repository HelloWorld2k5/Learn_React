import { useState, useEffect, useRef } from "react";

// Focus input, check old value

function FocusInput() {
    const [username, setUsername] = useState('');
    const inputRef = useRef(null);
    const prevUsername = useRef(null);

    // Save old value
    useEffect(() => {
        prevUsername.current = username;
    }, [username]);

    // Focus input when component mounted
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <input type="text" ref={inputRef} value={username} onChange={(e) => setUsername(e.target.value.trim())}/>
            <p>Tên hiện tại: {username}</p>
            <p>Tên trước đó: {prevUsername.current}</p>
        </>
    );
}

export default FocusInput;