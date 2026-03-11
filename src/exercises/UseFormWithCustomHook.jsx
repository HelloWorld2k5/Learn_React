import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues); //Tập hợp các input thành 1 đối tượng

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value, //Thay đổi giá trị các input dựa theo name
        }));
    };

    const handleResetForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, handleResetForm];
};

function UseFormWithCustomHook() {
    const [inputs, handleChange, handleResetForm] = useForm({
        fullName: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    console.log('re-render');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit thanh cong!');
        console.log(inputs);
    };

    return (
        <div>
            <h3>FORM ĐĂNG KÝ TÀI KHOẢN</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    value={inputs.fullName}
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter full name..."
                />
                <br />
                <input
                    value={inputs.username}
                    name="username"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter user name..."
                />
                <br />
                <input
                    value={inputs.phoneNumber}
                    name="phoneNumber"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter phone number..."
                />
                <br />
                <input
                    value={inputs.email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Enter email..."
                />
                <br />
                <input
                    value={inputs.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Enter password..."
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleResetForm}>Reset form</button>
        </div>
    );
}

export default UseFormWithCustomHook;
