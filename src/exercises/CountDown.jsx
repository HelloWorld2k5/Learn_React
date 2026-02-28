import { useState , useEffect} from "react";

function CountDown() {
    const [countdown, setCountdown] = useState(0); // Biến đếm ngược
    const [state, setState] = useState(false); // Biến trạng thái bắt đầu đếm ngược hay dừng

    console.log('Countdown: ', countdown);

    useEffect(() => {
        console.log('Gọi callback trong useEffect');
        if (!state) return;

        const timerId = setInterval(() => {
            // Tránh bị stale closure
            setCountdown(prev => {
                const nextValue = parseInt(prev) - 1;

                if (nextValue <= 0) {
                    setState(false);
                    console.log('Dừng đếm ngược');
                    clearInterval(timerId);
                    return 0;
                }

                return nextValue;
            });
        }, 1000);

        return () => clearInterval(timerId)
    }, [state]);

    const handleClick = () => {
        // Không nên đặt validation vào trong useEffect
        const number = parseInt(countdown);
        if (parseInt(countdown) <= 0 || isNaN(number)) {
            console.log('Không được để trống và nhập số dương');
            setState(false);
            return;
        }

        setState(!state);
    };

    return (
        <>
          <input type="number" value={countdown} onChange={(e) => setCountdown(e.target.value)}/>
          <button onClick={handleClick}>{state ? 'Dừng lại' : 'Bắt đầu'}</button>
        </>
    );
}

export default CountDown;