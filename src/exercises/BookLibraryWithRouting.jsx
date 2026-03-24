import { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

const books = [
    { id: 1, name: "C++ basic", type: "programming" },
    { id: 2, name: "Java basic", type: "programming" },
    { id: 3, name: "Superhero in modern life", type: "novel" },
    { id: 4, name: "One piece", type: "novel" },
    { id: 5, name: "ReactJS + React router dom", type: "programming" },
    { id: 6, name: "Doraemon and Nobita", type: "novel" },
];

const HomePage = () => {
    const [type, setType] = useState("programming");
    const navigate = useNavigate();

    console.log(type);

    const handleSearch = () => {
        navigate(`/category/${type}`);
    };

    return (
        <div>
            <h3>Home page</h3>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="programming">Programming</option>
                <option value="novel">Novel</option>
                <option value="all">All</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

const CategoryPage = () => {
    const { type } = useParams();

    // Nếu type là all thì trả nguyên về mảng books không thì lọc theo type
    const booksByType = type === 'all' ? books : books.filter((book) => book.type === type);

    return (
        <div>
            <h3>Category page</h3>
            <h4>Books by {type}</h4>
            <ul>
                {booksByType.map((book) => (
                    <li key={book.id}>
                        {book.name} - {book.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function BookLibrary() {
    return (
        <div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/category/:type" element={<CategoryPage />} />
            </Routes>
        </div>
    );
}

export default BookLibrary;
