const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAdmin } from "../context/useAdmin.jsx";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { logoPaths } from '../assets/AssetPath.js';
const logo = logoPaths.logo;

// Toast Component
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

function CreateNotice() {
    const [formData, setFormData] = useState({
        noticeName: "",
        noticeDescription: "",
        noticeImage: null,
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });
    const navigate = useNavigate();
    const admin = useAdmin();

    useEffect(() => {
        if (!admin) {
            navigate("/admin-login");
        }
    }, [admin, navigate]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "noticeImage") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                payload.append(key, value);
            });

            await axios.post(`${BASE_URL}/admin/create-notice`, payload, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setToast({ show: true, type: "success", message: "Notice created successfully!" });

            setFormData({
                noticeName: "",
                noticeDescription: "",
                noticeImage: null,
            });
        } catch (error) {
            console.error(error);
            setToast({ show: true, type: "error", message: "Failed to create notice. Please try again." });
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
                className="shadow-md rounded-lg p-8 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md border border-sky-200 mb-10 relative"
            >
                <Link to="/dashboard" className="absolute top-4 left-4 text-pink-500 hover:text-pink-700">
                    <FaArrowLeft className="w-5 h-5 text-pink-500 hover:text-sky-400" />
                </Link>
                <div className="text-center">
                    <img src={logo} alt="School Logo" className="w-18 h-18 mx-auto rounded-full shadow-md shadow-grey-200" />
                    <h2 className="text-2xl font-bold text-pink-500 mt-5">Create Notice</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="noticeName" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="noticeName"
                            name="noticeName"
                            value={formData.noticeName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 p-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="noticeDescription" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="noticeDescription"
                            name="noticeDescription"
                            value={formData.noticeDescription}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="noticeImage" className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            id="noticeImage"
                            name="noticeImage"
                            accept="image/*"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md shadow-sm p-2 text-green-600"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-sm focus:outline-none hover:bg-sky-500 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Creating..." : "Create Notice"}
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

export default CreateNotice;
