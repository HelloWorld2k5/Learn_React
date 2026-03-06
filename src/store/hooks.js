// Chứa các custom hooks để tránh việc phải import vừa context vừa useContext, chỉ cần import 1 thứ
// Sau này có thể có nhiều custome hook nữa

import Context from "./Context";
import { useContext } from "react";

const useStore = () => {
    const { state, dispatch } = useContext(Context);

    return { state, dispatch };
};

export { useStore };