// src/pages/EditBlog.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function EditBlog() {
    // const { id } = useParams();
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${BASE_URL}/user/blog/${slug}`);
                const result = await res.json();
                if (!result.success) throw new Error(result.message || 'Failed to fetch blog');
                setBlog(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const handleLinkChange = (index, field, value) => {
        const updatedLinks = [...blog.links];
        updatedLinks[index][field] = value;
        setBlog({ ...blog, links: updatedLinks });
    };

    const addLinkField = () => {
        setBlog({ ...blog, links: [...blog.links, { title: '', url: '' }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/admin/update-blog/${slug}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(blog),
            });

            if (!res.ok) throw new Error('Update failed');

            await Swal.fire({
                icon: 'success',
                title: 'Blog updated successfully!',
                confirmButtonText: 'OK',
            });
            navigate('/blog');
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Update failed',
                text: err.message,
            });
        }
    };

    if (loading) return <div className="text-center mt-10">Loading blog...</div>;
    if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl bg-opacity-90 backdrop-blur-md border border-green-200"
            >
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-blue-500 hover:text-blue-700 font-medium mb-4"
                >
                    &larr; Back
                </button>

                {/* Breadcrumbs */}
                <nav className="text-sm text-gray-500 mb-4">
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link> / <Link to="/blog" className="hover:underline">Blogs</Link> / Edit Blog
                </nav>

                <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Edit Blog</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="title"
                        value={blog.title || ''}
                        onChange={handleChange}
                        placeholder="Blog Title"
                        className="w-full border rounded-md p-2"
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={blog.date?.slice(0, 10) || ''}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        value={blog.author || ''}
                        onChange={handleChange}
                        placeholder="Author"
                        className="w-full border rounded-md p-2"
                        required
                    />
                    <ReactQuill
                        theme="snow"
                        value={blog.body}
                        onChange={(content) => setBlog({ ...blog, body: content })}
                        className="bg-white"
                    />
                    <div>
                        <label className="block font-semibold mb-2 text-green-700">Links</label>
                        {blog.links.map((link, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="Link Title"
                                    value={link.title}
                                    onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                                    className="w-full md:w-1/2 border rounded-md p-2"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="https://example.com"
                                    value={link.url}
                                    onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                    className="w-full md:w-1/2 border rounded-md p-2"
                                    required
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addLinkField}
                            className="text-blue-600 hover:underline mt-1"
                        >
                            + Add another link
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition"
                    >
                        Update Blog
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default EditBlog;
