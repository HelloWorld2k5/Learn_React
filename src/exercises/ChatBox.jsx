import { useState, useRef, useEffect } from "react";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);
    const newMessageRef = useRef(null);

    useEffect(() => {
        if (newMessageRef.current) {
            console.log("Tự động cuộn đến tin nhắn vừa gửi!");
            newMessageRef.current.scrollIntoView({ behavior: "smooth" });
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }, [messages]);

    const handleSend = () => {
        const message = inputRef.current.value.trim();
        if (message === "") {
            console.log("Nhập tin nhắn đi!");
            return;
        }

        setMessages((prev) => [...prev, message]);
    };

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Nhập tin nhắn" />
            <button onClick={handleSend}>Gửi</button>
            <div className="message-box">
                {messages.map((msg, index) => (
                    <p
                        key={index}
                        ref={
                            index === messages.length - 1 ? newMessageRef : null
                        }
                    >
                        {msg}
                    </p>
                ))}
            </div>
        </>
    );
}

export default ChatBox;
