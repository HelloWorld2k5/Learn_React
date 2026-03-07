import { useState, useEffect } from "react";

// My custom hook to check local storage and display username
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const val = localStorage.getItem(key);

        return val === null ? initialValue : val;
    });

    useEffect(() => {
        if (value.trim() === "") return;

        if (value.trim() === localStorage.getItem(key)) return;

        const timerId = setTimeout(() => {
            localStorage.setItem(key, value.trim());
            console.log('Lưu username vào local storage thành công!');
        }, 2000);

        return () => clearTimeout(timerId);
    }, [value, key]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return [value, handleChange];
};

function UseLocalStorageWithCustomHook() {
    const [username, change] = useLocalStorage("username", "");

    return (
        <input
            value={username}
            onChange={(e) => change(e.target.value)}
            type="text"
            placeholder="Enter username..."
        ></input>
    );
}

export default UseLocalStorageWithCustomHook;
