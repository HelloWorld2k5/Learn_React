import { useState } from "react";

// My custom hook to toggle modal or menu or password or checkbox or paragraph
const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    // Hàm đảo ngược giá trị
    const toggle = () => {
        setValue(prev => !prev);
    };

    // Hàm ép giá trị về true
    const setTrue = () => {
        setValue(true);
    };

    // Hàm ép giá trị về false
    const setFalse = () => {
        setValue(false);
    };

    return [value, toggle, setTrue, setFalse];
};

function UseToggleWithCustomHook() {
    const [isVisible, toggle, display, hide] = useToggle();

    return (
        <>
            {isVisible && <p>Đây là đoạn văn bản bí mật</p>}
            <button onClick={() => toggle()}>{isVisible ? 'Ẩn' : 'Hiện'}</button>
            <button onClick={() => hide()}>Ẩn ngay</button>
            <button onClick={() => display()}>Hiện ngay</button>
        </>
    );
}

export default UseToggleWithCustomHook;