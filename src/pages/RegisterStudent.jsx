import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdmin } from '../context/useAdmin';
import logo from "/logo2.png";
import { motion } from "framer-motion";

const initialState = {
    fullName: "",
    studentGender: "",
    studentCategory: "General",
    studentEmail: "",
    phoneNumber: "",
    studentAddress: "",
    studentDateOfBirth: "",
    studentClass: "",
    studentHouse: "Himalaya House",
    studentSubjectGroup: "NA",
    studentImage: null,
    studentDateOfAdmission: "",
    fatherName: "",
    studentAdhaarNumber: "",
    studentAparId: "",
};

function RegisterStudent() {
    const [formData, setFormData] = useState(initialState);
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
        if (name === "studentImage") {
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

            await axios.post("http://localhost:5000/api/v1/admin/create-student", payload, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Student registered successfully");
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-sky-100 flex justify-center items-start py-10 px-4">
            <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8 space-y-6">
                <div className="text-center">
                    <img src={logo} alt="School Logo" className="w-20 h-20 mx-auto rounded-full shadow-md" />
                    <h2 className="text-2xl font-bold text-pink-600 mt-4">Register New Student</h2>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(initialState).map(([key], idx) => (
                        <div key={idx} className="flex flex-col">
                            <label className="text-sm font-semibold mb-1 capitalize">
                                {key.includes("DateOfBirth")
                                    ? "Date of Birth"
                                    : key.includes("DateOfAdmission")
                                        ? "Date Registration"
                                        : key
                                            .replace("student", "Student ")
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()}
                            </label>

                            {key === "studentGender" || key === "studentCategory" || key === "studentHouse" || key === "studentSubjectGroup" ? (
                                <select
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="input"
                                >
                                    {key === "studentGender" && (
                                        <>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </>
                                    )}
                                    {key === "studentCategory" && (
                                        <>
                                            <option value="General">General</option>
                                            <option value="OBC">OBC</option>
                                            <option value="SC">SC</option>
                                            <option value="ST">ST</option>
                                        </>
                                    )}
                                    {key === "studentHouse" && (
                                        <>
                                            <option value="Himalaya House">Himalaya House</option>
                                            <option value="Satpura House">Satpura House</option>
                                            <option value="Nilgiri House">Nilgiri House</option>
                                            <option value="Aravalli House">Aravalli House</option>
                                        </>
                                    )}
                                    {key === "studentSubjectGroup" && (
                                        <>
                                            <option value="NA">NA</option>
                                            <option value="Maths">Maths</option>
                                            <option value="Biology">Biology</option>
                                            <option value="Commerce">Commerce</option>
                                            <option value="Arts">Arts</option>
                                        </>
                                    )}
                                </select>
                            ) : key === "studentImage" ? (
                                <input
                                    type="file"
                                    name={key}
                                    accept="image/*"
                                    onChange={handleChange}
                                    required
                                    className="input-file border rounded p-2"
                                />
                            ) : key.includes("Date") ? (
                                <input
                                    type="date"
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            ) : (
                                <input
                                    type={
                                        key.includes("Email")
                                            ? "email"
                                            : key.includes("Number") || key.includes("Adhaar")
                                                ? "number"
                                                : "text"
                                    }
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            )}
                        </div>
                    ))}

                    <button type="submit" className="col-span-1 md:col-span-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition">
                    {loading ? "Registering..." : "Register Student"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterStudent;
