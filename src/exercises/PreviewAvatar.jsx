import { useState, useEffect } from "react";

function PreviewAvatar() {
    const [avatar, setAvatar] = useState();

    console.log(avatar ? avatar.preview : 'No image');

    useEffect(() => {
        console.log('Callback trong useEffect chay');

        return () => {
            console.log('Cleanup function chay');
            if (avatar) URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleChange = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file); // Tạo đường link local cho ảnh đã chọn, thêm thuộc tính preview vào và gán link 

        setAvatar(file);
        console.log('Change avatar');

        e.target.value = null; // Giúp chọn cùng 1 ảnh nhiều lần
    };

    return (
        <>
            <input type="file" onChange={(e) => handleChange(e)}/>
            {avatar && <img src={avatar.preview} alt="Ảnh đã chọn" />}
        </>
    );
}

export default PreviewAvatar;