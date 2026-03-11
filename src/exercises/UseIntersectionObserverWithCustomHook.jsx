import { useEffect, useMemo, useRef, useState } from "react";

const useIntersectionObserver = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const elem = ref.current;
        if (!elem) return;
        
        console.log('Khoi tao Observer');
        
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);
        
        if (elem) observer.observe(elem);

        return () => {
            if (elem) {
                observer.unobserve(elem);
                console.log('Don dep observer cu')
            }
        };
    }, [ref, options]);

    return isIntersecting;
};

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Dùng abort controller để tránh việc mem leak khi component bị unmount khi chưa fetch xong
        const controller = new AbortController();
        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error("Cant get data from API");
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.log(error.message))
            .finally(() => console.log('Fetch xong!'));

        return () => controller.abort();
    }, [url]);

    return data;
};

function UseIntersectionObserverWithCustomHook() {
    const [point, setPoint] = useState(50); //Mới đầu load 50 phần tử

    const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
    const setinalRef = useRef(null);

    //Bọc options trong usememo để tránh bị khác reference mỗi lần re-render
    //Không thì trong useEffect observer sẽ bị định nghĩa lại vì dep của effect là options
    const options = useMemo(() => ({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    }), []);
    const isIntersecting = useIntersectionObserver(setinalRef, options);

    useEffect(() => {
        if (!isIntersecting || point === posts.length) return;

        const timerId = setTimeout(() => {
            setPoint(prev => {
                const nextValue = prev + 30;
                return nextValue >= posts.length ? posts.length : nextValue;
            });
            console.log("Load thêm items");
        }, 1500);

        return () => clearTimeout(timerId);
    }, [isIntersecting, posts.length]);

    console.log('re-render');

    return (
        <>
            <ul>
                {posts.slice(0, point).map((post, index) => (
                    <li key={post.id}>{`${index}. ${post.title}`}</li>
                ))}
            </ul>
            {/* Setinal không bị unmount mà chỉ thêm các items phía trên */}
            {/* ref.current vẫn là node setinal cũ mỗi khi thêm các items mới */}
            <div ref={setinalRef} className="setinal">
                {point === posts.length ? 'Hết rồi' : 'Đang tải thêm...'}
            </div>
        </>
    );
}

export default UseIntersectionObserverWithCustomHook;
