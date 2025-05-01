// src/pages/EditStudent.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/v1/admin/students/${id}`, {
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
            const res = await fetch(`http://localhost:5000/api/v1/admin/update-student/${id}`, {
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
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl"
            >
                <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">Edit Student</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        value={student.fullName || ''}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="fatherName"
                        value={student.fatherName || ''}
                        onChange={handleChange}
                        placeholder="Father's Name"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="studentClass"
                        value={student.studentClass || ''}
                        onChange={handleChange}
                        placeholder="Class"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="studentHouse"
                        value={student.studentHouse || ''}
                        onChange={handleChange}
                        placeholder="House"
                        className="border rounded-lg p-2"
                    />
                    <input
                        type="date"
                        name="studentDateOfAdmission"
                        value={student.studentDateOfAdmission?.slice(0, 10) || ''}
                        onChange={handleChange}
                        className="border rounded-lg p-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition"
                >
                    Update Student
                </button>
            </form>
        </div>
    );
}

export default EditStudent;
