import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

const CoordinatesPage = () => {
    const mousePosition = useMousePosition({
        x: 0,
        y: 0
    });

    return (
        <div>
            <h3>DAY LA TRANG XEM TOA DO CON TRO</h3>
            <p>Toạ độ x: {mousePosition.x}</p>
            <p>Toạ độ y: {mousePosition.y}</p>
        </div>
    );
};

const VisualPage = () => {
    const mousePosition = useMousePosition({
        x: 0,
        y: 0,
    });

    return (
        <div>
            <h3>DAY LA TRANG XEM HINH TRON CHAY THEO CON TRO</h3>
            <div
                className="circle-cursor"
                style={{ left: mousePosition.x + "px", top: mousePosition.y + "px" }}
            ></div>
        </div>
    );
};

const useMousePosition = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setValue((prev) => ({
                ...prev,
                x: e.clientX,
                y: e.clientY,
            }));
        };

        console.log('Add su kien mouse move')
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            console.log('Remove su kien mouse move');
        };
    }, []);

    return value;
};

function FollowMousePosition() {
    return (
        <div>
            <nav className="router">
                {/* Thẻ navlink tự biết thêm class active khi đang ở trang đó */}
                <NavLink to='/'>Visual</NavLink>
                <NavLink to='/coordinates'>Coordinates</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<VisualPage />}/>
                <Route path="/coordinates" element={<CoordinatesPage />}/>
            </Routes>
        </div>
    );
}

export default FollowMousePosition;
