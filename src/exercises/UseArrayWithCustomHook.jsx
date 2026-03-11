import { use, useMemo, useState } from "react";

const useArray = (initialArray) => {
    // Mảng chứa các lesson
    const [array, setArray] = useState(initialArray);

    // Add lesson mới
    const add = (value) => {
        setArray((prev) => [...prev, value]);
    };

    // Lọc lesson theo course name
    const filter = (value) => array.filter((item) => item.courseName === value);

    // Update cả lesson mới vào lesson cũ luôn
    const update = (id, newValue) => {
        setArray((prev) => prev.map((item) => (item.id === id ? newValue : item)));
    };

    // Xoá lesson theo id
    const remove = (id) => setArray((prev) => prev.filter((item) => item.id !== id));

    // Clear toàn bộ lesson
    const clear = () => setArray(initialArray);

    return { array, add, filter, update, remove, clear };
};

const useForm = (initialValues) => {
    // Chứa tập các giá trị của ô input
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return [values, setValues, handleChange, resetForm];
};

function UseArrayWithCustomHook() {
    const { array, add, filter, update, remove, clear } = useArray([]);

    const init = useMemo(
        () => ({
            lessonName: "",
            courseName: "",
            createdBy: "",
        }), []);
    const [lessonInputs, setLessonInputs, handleChangeLessonInputs, resetForm] = useForm(init);
    const [editId, setEditId] = useState(null);
    const [courseName, setCourseName] = useState(""); //course name để lọc bài học
    const [filteredLessons, setFilteredLessons] = useState([]); // mảng lessons đã filter theo course name

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            update(editId, {
                id: editId,
                ...lessonInputs,
            });

            setEditId(null);
        } else {
            add({
                id: Date.now(),
                ...lessonInputs,
            });
        }

        resetForm();
    };

    const handleUpdate = (lesson) => {
        setEditId(lesson.id);
        setLessonInputs({
            lessonName: lesson.lessonName,
            courseName: lesson.courseName,
            createdBy: lesson.createdBy,
        });
    };

    const handleFilter = () => {
        setFilteredLessons(filter(courseName));
    };

    return (
        <>
            <h3>{editId ? "FORM CHỈNH SỬA BÀI HỌC" : "FORM THÊM BÀI HỌC"}</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    name="lessonName"
                    value={lessonInputs.lessonName}
                    onChange={handleChangeLessonInputs}
                    type="text"
                    placeholder="Nhập tên bài học..."
                />
                <input
                    name="courseName"
                    value={lessonInputs.courseName}
                    onChange={handleChangeLessonInputs}
                    type="text"
                    placeholder="Nhập tên khoá học..."
                />
                <input
                    name="createdBy"
                    value={lessonInputs.createdBy}
                    onChange={handleChangeLessonInputs}
                    type="text"
                    placeholder="Nhập người tạo khoá học..."
                />
                <button type="submit">
                    {editId ? "Chỉnh sửa khoá học" : "Thêm mới khoá học"}
                </button>
            </form>

            <h3>DANH SÁCH CÁC BÀI HỌC</h3>
            <ul>
                {array.map((lesson, index) => (
                    <li key={lesson.id}>
                        <p>Số thứ tự: {index + 1}</p>
                        <p>Tên bài học: {lesson.lessonName}</p>
                        <p>Thuộc khoá học: {lesson.courseName}</p>
                        <p>Được tạo bởi: {lesson.createdBy}</p>
                        <button onClick={() => remove(lesson.id)}>Xoá bài học</button>
                        <button onClick={() => handleUpdate(lesson)}>
                            Cập nhật bài học
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={clear}>Xoá toàn bộ khoá học</button>

            <h3>LỌC DANH SÁCH BÀI HỌC THEO KHOÁ HỌC</h3>
            <input
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                type="text"
                placeholder="Nhập tên khoá học để lọc bài học..."
            />
            <button onClick={handleFilter}>Lọc theo tên khoá học</button>

            <ul>
                {filteredLessons.map((lesson, index) => (
                    <li key={lesson.id}>
                        <p>Số thứ tự: {index + 1}</p>
                        <p>Tên bài học: {lesson.lessonName}</p>
                        <p>Thuộc khoá học: {lesson.courseName}</p>
                        <p>Được tạo bởi: {lesson.createdBy}</p>
                        <button onClick={() => remove(lesson.id)}>Xoá bài học</button>
                        <button onClick={() => handleUpdate(lesson)}>
                            Cập nhật bài học
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UseArrayWithCustomHook;
