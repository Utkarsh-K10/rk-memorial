// const BASE_URL = import.meta.env.VITE_LOCAL_API_BASE_URL || import.meta.env.VITE_API_BASE_URL;
// import { useEffect, useState } from 'react';
// import BlogCard from '../components/BlogCard.jsx';
// import { useAdmin } from '../context/useAdmin.jsx';
// import { FaTrashAlt } from "react-icons/fa";

// // Toast Component
// function Toast({ type = "success", message, onClose }) {
//     const base = "fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium z-50 transition-all duration-500";
//     const styles = {
//         success: "bg-green-100 text-green-800 border border-green-300",
//         error: "bg-red-100 text-red-800 border border-red-300"
//     };
//     return (
//         <div className={`${base} ${styles[type]}`}>
//             <div className="flex items-center justify-between gap-3">
//                 <span>{message}</span>
//                 <button onClick={onClose} className="text-xl font-bold leading-none">&times;</button>
//             </div>
//         </div>
//     );
// }

// function Blogs() {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [toast, setToast] = useState({ show: false, type: "success", message: "" });
//     const { admin } = useAdmin();

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const res = await fetch(`${BASE_URL}/user/blog`);
//                 const result = await res.json();

//                 if (!res.ok || !result.success) {
//                     throw new Error(result.message || 'Failed to fetch blogs');
//                 }

//                 if (!Array.isArray(result.data)) {
//                     throw new Error('Unexpected data format received from server.');
//                 }

//                 setBlogs(result.data);
//             } catch (err) {
//                 console.error('[Blog Fetch Error]', err);
//                 setError(err.message || 'Something went wrong');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     const handleDelete = async (id) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
//         if (!confirmDelete) return;

//         try {
//             const res = await fetch(`${BASE_URL}/admin/delete-blog/${id}`, {
//                 method: 'DELETE',
//                 credentials: 'include',
//             });
//             const result = await res.json();

//             if (!res.ok || !result.success) throw new Error(result.message);

//             setBlogs(blogs.filter(blog => blog._id !== id));
//             setToast({ show: true, type: "success", message: "Blog deleted successfully." });
//         } catch (err) {
//             console.error('[Delete Error]', err);
//             setToast({ show: true, type: "error", message: "Failed to delete blog." });
//         }
//     };

//     return (
//         <div className="p-6 max-w-8xl mx-auto relative flex flex-col justify-center items-center">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-white to-green-100 opacity-50 -z-10"></div>
//             <h1 className="text-4xl font-bold mb-5 text-center text-green-700 mt-2">Our Blogs</h1>
//             {loading ? (
//                 <div className="text-center text-blue-500 font-medium">Loading blogs...</div>
//             ) : error ? (
//                 <div className="text-center text-red-500 font-semibold">{error}</div>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {blogs.length > 0 ? (
//                         blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog) => (
//                             <div key={blog._id} className="relative">
//                                 {admin && (
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleDelete(blog._id);
//                                         }}
//                                         className="absolute top-2 left-2 z-10 bg-red-100 hover:bg-red-200 p-1 rounded-full"
//                                     >
//                                         <FaTrashAlt size={16} className="text-red-600" />
//                                     </button>
//                                 )}
//                                 <BlogCard {...blog} />
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-span-full text-center text-gray-500">
//                             No blogs available at the moment.
//                         </div>
//                     )}
//                 </div>
//             )}

//             {toast.show && (
//                 <Toast
//                     type={toast.type}
//                     message={toast.message}
//                     onClose={() => setToast({ ...toast, show: false })}
//                 />
//             )}
//         </div>
//     );
// }

// export default Blogs;


const BASE_URL = import.meta.env.VITE_LOCAL_API_BASE_URL;
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';
import { useAdmin } from '../context/useAdmin.jsx';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Toast({ type = "success", message, onClose }) {
    const base = "fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium z-50 transition-all duration-500";
    const styles = {
        success: "bg-green-100 text-green-800 border border-green-300",
        error: "bg-red-100 text-red-800 border border-red-300"
    };
    return (
        <div className={`${base} ${styles[type]}`}>
            <div className="flex items-center justify-between gap-3">
                <span>{message}</span>
                <button onClick={onClose} className="text-xl font-bold leading-none">&times;</button>
            </div>
        </div>
    );
}

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });
    const { admin } = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${BASE_URL}/user/blog`);
                const result = await res.json();

                if (!res.ok || !result.success) {
                    throw new Error(result.message || 'Failed to fetch blogs');
                }

                if (!Array.isArray(result.data)) {
                    throw new Error('Unexpected data format received from server.');
                }

                setBlogs(result.data);
            } catch (err) {
                console.error('[Blog Fetch Error]', err);
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${BASE_URL}/admin/delete-blog/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const result = await res.json();

            if (!res.ok || !result.success) throw new Error(result.message);

            setBlogs(blogs.filter(blog => blog._id !== id));
            setToast({ show: true, type: "success", message: "Blog deleted successfully." });
        } catch (err) {
            console.error('[Delete Error]', err);
            setToast({ show: true, type: "error", message: "Failed to delete blog." });
        }
    };

    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`);
    };

    // const handleEdit = (e, id) => {
    //     e.stopPropagation();
    //     navigate(`/edit-blog/${id}`);
    // };

    return (
        <div className="p-6 max-w-8xl mx-auto relative flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-white to-green-100 opacity-50 -z-10"></div>
            <h1 className="text-4xl font-bold mb-5 text-center text-green-700 mt-2">Our Blogs</h1>
            {loading ? (
                <div className="text-center text-blue-500 font-medium">Loading blogs...</div>
            ) : error ? (
                <div className="text-center text-red-500 font-semibold">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.length > 0 ? (
                        blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog) => (
                            <div key={blog._id} className="relative cursor-pointer" onClick={() => handleBlogClick(blog._id)}>
                                {admin && (
                                    <div className="absolute top-2 left-2 z-10 flex gap-2">
                                        <button
                                            onClick={(e) => handleDelete(blog._id)}
                                            className="bg-red-100 hover:bg-red-200 p-1 rounded-full"
                                        >
                                            <FaTrashAlt size={16} className="text-red-600" />
                                        </button>
                                        {/* <button
                                            onClick={(e) => handleEdit(e, blog._id)}
                                            className="bg-blue-100 hover:bg-blue-200 p-1 rounded-full"
                                        >
                                            <FaEdit size={16} className="text-blue-600" />
                                        </button> */}
                                    </div>
                                )}
                                <BlogCard {...blog} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No blogs available at the moment.
                        </div>
                    )}
                </div>
            )}

            {toast.show && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast({ ...toast, show: false })}
                />
            )}
        </div>
    );
}

export default Blogs;
