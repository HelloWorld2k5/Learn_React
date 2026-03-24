import { useEffect, useMemo } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";

const blogs = [
    { id: 1, title: 'Title blog 1', content: 'Content blog 1' },
    { id: 2, title: 'Title blog 2', content: 'Content blog 2' },
    { id: 3, title: 'Title blog 3', content: 'Content blog 3' },
    { id: 4, title: 'Title blog 4', content: 'Content blog 4' },
    { id: 5, title: 'Title blog 5', content: 'Content blog 5' },
    { id: 6, title: 'Title blog 6', content: 'Content blog 6' }
];

const HomePage = () => {
    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <Link to="/blog">Danh sách blog</Link>
        </div>
    );
};

const BlogPage = () => {
    return (
        <div>
            <h3>Đây là trang danh sách các blog</h3>
            <ul>
                {blogs.map(blog =>
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

const BlogDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(id);

    // id của blog trên url parameter là dạng string, mà id trong blogs là number nên mình sẽ so sánh 2 dấu ==
    const blog = useMemo(() => {
        return blogs.find(blog => blog.id == id);
    }, [id]);

    console.log(blog);

    useEffect(() => {
        console.log('Đang tải blog mới...');
    }, [id]);

    if (!blog) return <NotFound />;


    const handleReadNextBlog = () => {
        navigate(`/blog/${Number(id) + 1}`);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h3>Đây là trang chi tiết blog</h3>
            <p>Tiêu đề: {blog.title}</p>
            <p>Nội dung: {blog.content}</p>
            <button onClick={handleReadNextBlog}>Đọc bài tiếp theo</button>
            <button onClick={handleBack}>Quay lại trang trước</button>
        </div>
    );
};

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h3 style={{ color: 'red' }}>Không tìm thấy blog</h3>
            <button onClick={() => navigate('/blog')}>Danh sách blog</button>
        </div>
    );
};


function BlogWebWithRouting() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/blog/:id" element={<BlogDetailPage />}/>
            </Routes>
        </div>
    );
}

export default BlogWebWithRouting;