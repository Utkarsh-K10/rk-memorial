import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdmin } from '../context/useAdmin';
import logo from "/logo2.png";
import { motion } from "framer-motion";

function CreateNotice() {
    const [formData, setFormData] = useState({
        noticeName: "",
        noticeDescription: "",
        noticeImage: null,
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const admin = useAdmin()

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

            await axios.post("http://localhost:5000/api/v1/admin/create-notice", payload, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Notice created successfully");
            setFormData({
                noticeName: "",
                noticeDescription: "",
                noticeImage: null,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
            >
                <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-center mb-4">Create Notice</h2>
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 p-2"
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
                        <label htmlFor="noticeImage" className="block text-sm font-medium
                            text-gray-700">Image</label>
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
                        className={`w-full bg-sky-500 text-white font-bold py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Creating..." : "Create Notice"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-sm text-gray-600"
            >
                <p>Powered by R K Memorial School</p>
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </motion.div>
        </div>
    );
}
export default CreateNotice;