// src/pages/Dashboard.jsx
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useAdmin } from '../context/useAdmin.jsx'
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { logoPaths } from '../assets/AssetPath.js';
const logo = logoPaths.logo;

function Dashboard() {
    const { admin, setAdmin } = useAdmin();
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (!admin) {
            navigate('/admin-login');
        } else {
            fetchStudents();
        }
    }, [admin, navigate]);

    const fetchStudents = async () => {
        try {
            const res = await fetch(`${BASE_URL}/admin/students`, {
                credentials: 'include',
            });
            const studentdata = await res.json();
            if (res.ok) {
                setStudents(studentdata.data);
            }
        } catch (err) {
            console.error('Failed to fetch students:', err);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch(`${BASE_URL}/admin/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            setAdmin(null);
            await Swal.fire({
                title: 'Logged Out!',
                text: 'See you soon, 👋',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });

            navigate('/admin-login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This student record will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`${BASE_URL}/admin/delete-student/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });

                if (!res.ok) throw new Error('Failed to delete student');

                setStudents(prev => prev.filter(s => s._id !== id));
                Swal.fire('Deleted!', 'The student has been removed.', 'success');
            } catch (err) {
                console.error(err);
                Swal.fire('Error', 'Unable to delete student.', 'error');
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-student/${id}`);
    };


    return (
        <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-sky-100 to-pink-100 flex flex-col md:flex-row gap-6">
            {/* Admin Profile */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl rounded-xl p-6 w-full md:max-w-sm h-auto"
            >
                <div className="text-center">
                    <img
                        src={logo}
                        alt="Admin Avatar"
                        className="w-28 h-28 mx-auto rounded-full border-4 border-pink-400 shadow-md"
                    />
                    <h2 className="text-xl font-semibold mt-4 text-pink-600">Welcome, Principal</h2>
                </div>

                {admin && (
                    <div className="mt-6 bg-pink-50 rounded-lg p-4 shadow-inner space-y-3 text-gray-800 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-600">Username:</span>
                            <span className="text-pink-700 font-medium">{admin.username}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-600">Email:</span>
                            <span className="text-pink-700 font-medium">{admin.email}</span>
                        </div>
                    </div>
                )}

                <div className="mt-6 flex flex-col gap-3 items-center">
                    <button
                        onClick={() => navigate('/register')}
                        className="bg-sky-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition shadow w-[70%]"
                    >
                        Register Student
                    </button>
                    <button
                        onClick={() => navigate('/manage-notice')}
                        className="bg-orange-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition shadow w-[70%]"
                    >
                        Create Notices
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-full transition shadow w-[70%]"
                    >
                        Logout
                    </button>
                </div>
                
                <div className="mt-8 w-full px-2 sm:px-4 lg:px-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">School Houses</h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">

                        {/* Himalaya House - Red */}
                        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow hover:shadow-md transition-all">
                            <h3 className="text-base font-semibold text-red-600 mb-1">Himalaya House</h3>
                            <p className="text-sm text-gray-700">Color: Red</p>
                        </div>

                        {/* Satpura House - Royal Blue */}
                        <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-xl shadow hover:shadow-md transition-all">
                            <h3 className="text-base font-semibold text-blue-700 mb-1">Satpura House</h3>
                            <p className="text-sm text-gray-700">Color: Royal Blue</p>
                        </div>

                        {/* Nilgiri House - Yellow */}
                        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-xl shadow hover:shadow-md transition-all">
                            <h3 className="text-base font-semibold text-yellow-600 mb-1">Nilgiri House</h3>
                            <p className="text-sm text-gray-700">Color: Yellow</p>
                        </div>

                        {/* Aravalli House - White */}
                        <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-xl shadow hover:shadow-md transition-all">
                            <h3 className="text-base font-semibold text-gray-700 mb-1">Aravalli House</h3>
                            <p className="text-sm text-gray-600">Color: White</p>
                        </div>
                    </div>
                </div>


            </motion.div>

            {/* Students Section */}
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-pink-600">New Admissions</h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {students.map((student) => (
                        <div
                            key={student._id}
                            className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition border-t-2 border-sky-500"
                        >
                            <img
                                src={student.studentImage || logo}
                                alt="Student"
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h3 className="text-lg font-semibold text-pink-600">{student.fullName}</h3>
                            <p className="text-sm text-gray-700"><strong>Father:</strong> {student.fatherName}</p>
                            <p className="text-sm text-pink-500"><strong>Class:</strong> {student.studentClass}</p>
                            <p className="text-sm text-gray-700"><strong>House:</strong> {student.studentHouse}</p>
                            <p className="text-sm text-gray-500"><strong>Admission:</strong> {new Date(student.studentDateOfAdmission).toLocaleDateString()}</p>

                            {/* Action Buttons */}
                            <div className="absolute bottom-4 right-4 flex gap-3">
                                <button
                                    // onClick={() => navigate(`/edit-student/${student._id}`)}
                                    onClick={() => handleEdit(student._id)}
                                    className="text-sky-600 hover:text-green-600 transition"
                                    title="Edit Student"
                                >
                                    <MdEdit size={20} />
                                </button>
                                <button
                                    onClick={() => handleDelete(student._id)}
                                    className="text-red-600 hover:text-red-800 transition"
                                    title="Delete Student"
                                >
                                    <FaTrashAlt size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </div>

    );
}

export default Dashboard;
