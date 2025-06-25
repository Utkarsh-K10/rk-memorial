const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { logoPaths } from '../assets/AssetPath.js';
const logo = logoPaths.logo;

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await fetch(`${BASE_URL}/admin/students/${id}`, {
                    credentials: 'include',
                });

                if (!res.ok) throw new Error('Failed to fetch student');

                const data = await res.json();
                setStudent(data.data);
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/admin/update-student/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(student),
            });

            if (!res.ok) throw new Error('Failed to update student');

            await Swal.fire({
                icon: 'success',
                title: 'Student updated successfully!',
                confirmButtonText: 'OK',
            });

            navigate('/dashboard');
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Update failed',
                text: err.message,
            });
        }
    };

    if (loading) return <div className="p-6 text-center">Loading student details...</div>;
    if (error) return <div className="p-6 text-red-600 text-center">{error}</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow flex items-center justify-center px-4 py-2 mb-38"
            >
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl bg-opacity-90 backdrop-blur-md border border-sky-200"
                >
                    {/* Back Button */}
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="text-blue-500 hover:text-blue-700 font-medium mb-4"
                    >
                        &larr; Back
                    </button>

                    {/* Breadcrumbs */}
                    <nav className="text-sm text-gray-500 mb-4">
                        <Link to="/dashboard" className="hover:underline">
                            Dashboard
                        </Link>{' '}
                        /{' '}
                        <Link to="/dashboard" className="hover:underline">
                            Students
                        </Link>{' '}
                        / Edit Student
                    </nav>

                    <div className="text-center">
                        <img src={student.studentImage || logo} alt="School Logo" className="w-20 h-20 mx-auto rounded-full shadow-md shadow-sky-300" />
                        <h2 className="text-2xl font-bold text-pink-500 mt-2 mb-5">Edit Student</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-blue-500 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={student.fullName || ''}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="fatherName" className="block text-sm font-medium text-blue-500 mb-1">
                                Father's Name
                            </label>
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                value={student.fatherName || ''}
                                onChange={handleChange}
                                placeholder="Father's Name"
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="studentClass" className="block text-sm font-medium text-blue-500 mb-1">
                                Class
                            </label>
                            <input
                                type="text"
                                id="studentClass"
                                name="studentClass"
                                value={student.studentClass || ''}
                                onChange={handleChange}
                                placeholder="Class"
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="remarks" className="block text-sm font-medium text-blue-500 mb-1">
                                Remarks
                            </label>
                            <input
                                type="text"
                                id="remarks"
                                name="remarks"
                                value={student.remarks || ''}
                                onChange={handleChange}
                                placeholder="Remarks"
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="studentStatus" className="block text-sm font-medium text-blue-500 mb-1">
                                Student Status
                            </label>
                            <select defaultValue={student.studentStatus} type="text" id="studentStatus" name="studentStatus" onChange={handleChange} className="border rounded-lg p-2 w-full">
                                <option value="Himalaya House"> Active </option>
                                <option value="Satpura House"> Inactive </option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="studentCategory" className="block text-sm font-medium text-blue-500 mb-1">
                                Category
                            </label>
                            <select defaultValue={student.studentCategory} type="text" id="studentCategory" name="studentCategory" onChange={handleChange} className="border rounded-lg p-2 w-full">
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="studentSubjectGroup" className="block text-sm font-medium text-blue-500 mb-1">
                                Subject Group
                            </label>
                            <select defaultValue={student.studentSubjectGroup} type="text" id="studentSubjectGroup" name="studentSubjectGroup" onChange={handleChange} className="border rounded-lg p-2 w-full">
                                <option value="Maths">Maths</option>
                                <option value="Biology">Biology</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="studentMedium" className="block text-sm font-medium text-blue-500 mb-1">
                                Medium of Study
                            </label>
                            <select defaultValue={student.studentMedium} type="text" id="studentMedium" name="studentMedium" onChange={handleChange} className="border rounded-lg p-2 w-full">
                                <option value="Maths">English</option>
                                <option value="Biology">Hindi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-blue-500 mb-1">
                                Phone No
                            </label>
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={student.phoneNumber || ''}
                                onChange={handleChange}
                                placeholder="Phone No"
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="studentDateOfBirth" className="block text-sm font-medium text-blue-500 mb-1">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="studentDateOfBirth"
                                name="studentDateOfBirth"
                                value={student.studentDateOfBirth?.slice(0, 10) || ''}
                                onChange={handleChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-pink-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full transition"
                    >
                        Update Student Details
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default EditStudent;
