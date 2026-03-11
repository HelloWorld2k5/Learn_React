import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (e) => {
            setMatches(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};

function UseMediaQueryWithCustomHook() {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Nếu kich thước màn hình <= 768px thì matches là true và ngược lại

    return (
        <>
            {/* Nếu là dạng desktop thì hiện menu, ở dạng mobile thì ẩn menu */}
            {!isMobile && <h3>MENU</h3>}
        </>
    );
}

export default UseMediaQueryWithCustomHook;