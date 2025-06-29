import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAdmin } from "../context/useAdmin.jsx";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTrash } from "react-icons/fa6";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { logoPaths } from "../assets/AssetPath.js";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const logo = logoPaths.logo;

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

function CreateBlog() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        blogImage: null,
        body: "",
        links: [{ url: "", title: "" }]
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });
    const navigate = useNavigate();
    const admin = useAdmin();

    useEffect(() => {
        if (!admin) navigate("/admin-login");
    }, [admin, navigate]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "blogImage") {
            setFormData({ ...formData, blogImage: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleLinkChange = (index, field, value) => {
        const updatedLinks = [...formData.links];
        updatedLinks[index][field] = value;
        setFormData({ ...formData, links: updatedLinks });
    };

    const addLink = () => {
        setFormData({ ...formData, links: [...formData.links, { url: "", title: "" }] });
    };

    const removeLink = (index) => {
        const updatedLinks = formData.links.filter((_, i) => i !== index);
        setFormData({ ...formData, links: updatedLinks });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = new FormData();
            payload.append("title", formData.title);
            payload.append("author", formData.author || "Anonymous");
            payload.append("blogImage", formData.blogImage);
            payload.append("body", formData.body);
            payload.append("links", JSON.stringify(formData.links));

            await axios.post(`${BASE_URL}/admin/create-blog`, payload, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setToast({ show: true, type: "success", message: "Blog created successfully!" });
            setTimeout(() => {
                navigate("/blog");
            }, 2000);
            setFormData({
                title: "",
                author: "",
                blogImage: null,
                body: "",
                links: [{ url: "", title: "" }]
            });
        } catch (error) {
            console.error(error);
            setToast({ show: true, type: "error", message: "Failed to create blog." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="shadow-md rounded-lg p-8 w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md border border-sky-200 mb-10 relative"
            >
                <Link to="/dashboard" className="absolute top-4 left-4 text-pink-500 hover:text-pink-700">
                    <FaArrowLeft className="w-5 h-5" />
                </Link>

                <div className="text-center">
                    <img src={logo} alt="School Logo" className="w-18 h-18 mx-auto rounded-full shadow-md" />
                    <h2 className="text-2xl font-bold text-pink-500 mt-5">Create Blog</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Blog Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        name="author"
                        placeholder="Author (default: Anonymous)"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="file"
                        name="blogImage"
                        accept="image/*"
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2"
                    />
                    <input 
                        type="date"
                        name="date"
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                    <ReactQuill
                        theme="snow"
                        value={formData.body}
                        onChange={(value) => setFormData({ ...formData, body: value })}
                        className="bg-white"
                    />

                    <div className="mt-4">
                        <h3 className="font-medium mb-2 text-gray-700">Related Links</h3>
                        {formData.links.map((link, index) => (
                            <div key={index} className="flex gap-2 mb-2 items-center">
                                <input
                                    type="url"
                                    placeholder="URL"
                                    value={link.url}
                                    onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                                    required
                                    className="flex-1 border rounded p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={link.title}
                                    onChange={(e) => handleLinkChange(index, "title", e.target.value)}
                                    className="flex-1 border rounded p-2"
                                />
                                <button type="button" onClick={() => removeLink(index)} className="text-red-500">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addLink}
                            className="flex items-center text-sm text-blue-500 mt-2"
                        >
                            <FaPlus className="mr-1" /> Add Link
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-pink-500 text-white py-2 px-4 rounded shadow hover:bg-sky-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Creating..." : "Create Blog"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-sm text-gray-600 text-center"
            >
                <p>Powered by R K Memorial School</p>
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </motion.div>

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

export default CreateBlog;
