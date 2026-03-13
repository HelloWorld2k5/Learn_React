import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h3>DAY LA TRANG LANDING</h3>
            <Link to="/wait">Bắt đầu khám phá</Link>
        </div>
    );
};

const WaitPage = () => {
    const [count, setCount] = useState(5);

    useEffect(() => {

        console.log('create new a timer');

        const timerId = setInterval(() => {
            setCount((prev) => {
                const nextVal = prev - 1;
                if (nextVal <= 0) {
                    clearInterval(timerId);
                    console.log('clear timer');
                    return 0;
                }
                return nextVal;
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
            console.log('clear timer');
        };
    }, []);

    return (
        <div>
            <h3>DAY LA TRANG WAIT</h3>
            <p>{count}</p>
            {count === 0 && (
                <Link to="/dashboard">Bấm vào đây để sang trang dashboard</Link>
            )}
            <Link to="/">Quay lại</Link>
        </div>
    );
};

const DashboardPage = () => {

    return (
        <div>
            <h3>DAY LA TRANG DASHBOARD</h3>
        </div>
    );
};

function CountDownRouting() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/wait" element={<WaitPage />}></Route>
                <Route path="/dashboard" element={<DashboardPage />}></Route>
            </Routes>
        </div>
    );
}

export default CountDownRouting;
