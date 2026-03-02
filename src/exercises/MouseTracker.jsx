import { useState, useEffect } from "react";

function MouseTracker() {
    const [coordinate, setCoordinate] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMoveMouse = (e) => {
            setCoordinate({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", (e) => handleMoveMouse(e));
        console.log("Đã add listener");

        return () => {
            window.removeEventListener("mousemove", (e) => handleMoveMouse(e));
            console.log("Đã remove listener");
        };
    }, []);

    return (
        <>
            <p>Toạ độ x: {coordinate.x}</p>
            <p>Toạ độ y: {coordinate.y}</p>
        </>
    );
}

export default MouseTracker;
