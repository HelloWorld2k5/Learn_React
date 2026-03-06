import { forwardRef, useRef, useImperativeHandle } from "react";


const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = '';
        }
    }));

    return (
        <input ref={inputRef} type="text" placeholder="Enter something..." />
    );
});

function SmartInput() {
    const controlRef = useRef(null);

    const handleFocus = () => {
        controlRef.current.focus();
    };

    const handleClear = () => {
        controlRef.current.clear();
    };

    return (
        <>
            <MyInput ref={controlRef} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleClear}>Clear</button>
        </>
    );
}

export default SmartInput;