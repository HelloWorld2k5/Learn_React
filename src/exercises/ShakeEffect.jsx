import { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";

const FancyBox = forwardRef((props, ref) => {
    const boxRef = useRef(null);

    useImperativeHandle(ref, () => ({
        shake: () => {
            boxRef.current.classList.add("shake");
        },
        stopShaking: () => {
            boxRef.current.classList.remove("shake");
        },
    }));

    return <div ref={boxRef} className="box"></div>;
});

function ShakeEffect() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (!isSubmitted) return;

        // Sau 2s kể từ khi submit dừng shake box
        const timerId = setTimeout(() => {
            console.log("Box stops shaking!");
            controlBoxRef.current.stopShaking();

            setIsSubmitted(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [isSubmitted]);

    const controlBoxRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`username: ${username}, password: ${password}`);

        console.log("Box is shaking!");
        controlBoxRef.current.shake();

        setIsSubmitted(true);
    };

    return (
        <>
            <h3>FORM ĐĂNG NHẬP</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter username..."
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter password..."
                />
                <button type="submit">Submit</button>
            </form>
            <FancyBox ref={controlBoxRef} />
        </>
    );
}

export default ShakeEffect;
