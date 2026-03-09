import { useEffect, useRef, useState } from "react";

// Dropdown menu, khi nhấn vùng trống bên ngoài các options thì tự đóng lại

// Custom hook này đảm nhiệm việc chạy hàm tắt dropdown nếu nhấn ra ngoài
const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current || ref.current.contains(e.target)) return;

            handler();
        };

        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    }, [ref, handler]);
};

function UseOnClickOutside() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useOnClickOutside(dropdownRef, () => setIsOpen(false))

    return (
        <div ref={dropdownRef} className="dropdown">
            <button className="dropdown-btn" onClick={() => setIsOpen(true)}>Menu</button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Menu item 1</a>
                    <a href="#">Menu item 2</a>
                    <a href="#">Menu item 3</a>
                    <a href="#">Menu item 4</a>
                    <a href="#">Menu item 5</a>
                </div>
            )}
        </div>
    );
}

export default UseOnClickOutside;
