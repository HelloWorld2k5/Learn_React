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
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Cant get data from API");
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.log(error.message));
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
        if (!isIntersecting) return;

        const timerId = setTimeout(() => {
            setPoint(prev => {
                const nextValue = prev + 30;
                return nextValue >= posts.length ? posts.length : nextValue;
            });
            console.log("Load thêm items");
        }, 1500);

        return () => clearTimeout(timerId);
    }, [isIntersecting, posts.length, point]);

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
                Đang tải thêm...
            </div>
        </>
    );
}

export default UseIntersectionObserverWithCustomHook;
