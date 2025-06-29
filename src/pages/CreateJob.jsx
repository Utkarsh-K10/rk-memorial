import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAdmin } from "../context/useAdmin.jsx";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTrash } from "react-icons/fa6";
import { logoPaths } from "../assets/AssetPath.js";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

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

function CreateJob() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        experience: "",
        jobImage: null
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
        if (name === "jobImage") {
            setFormData({ ...formData, jobImage: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = new FormData();
            payload.append("title", formData.title);
            payload.append("description", formData.description);
            payload.append("experience", formData.experience);
            payload.append("jobImage", formData.jobImage);

            await axios.post(`${BASE_URL}/admin/create-job`, payload, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setToast({ show: true, type: "success", message: "Job created successfully!" });
            setTimeout(() => navigate("/job"), 2000);
            setFormData({
                title: "",
                description: "",
                experience: "",
                jobImage: null
            });
        } catch (error) {
            console.error(error);
            setToast({ show: true, type: "error", message: "Failed to create job." });
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
                    <h2 className="text-2xl font-bold text-pink-500 mt-5">Create Job Opening</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2"
                    />

                    <ReactQuill
                        theme="snow"
                        value={formData.description}
                        onChange={(value) => setFormData({ ...formData, description: value })}
                        className="bg-white"
                    />
                    {/* <textarea
                        name="description"
                        placeholder="Job Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2 min-h-[120px]"
                    /> */}

                    <input
                        type="text"
                        name="experience"
                        placeholder="Minimum Experience (in years)"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="file"
                        name="jobImage"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-pink-500 text-white py-2 px-4 rounded shadow hover:bg-sky-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Creating..." : "Create Job"}
                    </button>
                </form>
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

export default CreateJob;
