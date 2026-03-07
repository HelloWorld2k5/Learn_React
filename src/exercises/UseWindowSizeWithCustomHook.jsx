import { useEffect, useState } from "react";

// Custom hook theo dõi kích thước cửa sổ trình duyệt
const useWindowSize = () => {
    const [value, setValue] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setValue({
                width: window.innerWidth,
                height: window.innerHeight 
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return value;
};

function UseWindowSizeWithCustomHook() {
    const size = useWindowSize();

    return (
        <>
            <p>Bạn đang sử dụng thiết bị: {size.width < 768 ? 'Mobile' : 'Desktop'}</p>
            <p>Chiều rộng: {size.width} px</p>
            <p>Chiều cao: {size.height} px</p>
        </>
    );
}

export default UseWindowSizeWithCustomHook;