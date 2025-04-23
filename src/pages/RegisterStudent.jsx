// src/pages/RegisterStudent.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterStudent() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        class: '',
        rollNo: '',
        avatar: null,
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Call auth-check API or check cookie if available
        const checkAuth = async () => {
            try {
                const res = await fetch('https://your-api.com/admin/auth-check', {
                    credentials: 'include',
                });
                if (res.ok) {
                    setIsAuthenticated(true);
                } else {
                    navigate('/admin-login');
                }
            } catch (err) {
                console.error(err);
                navigate('/admin-login');
            }
        };
        checkAuth();
    }, [navigate]);

    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            setForm({ ...form, avatar: e.target.files[0] });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (let key in form) {
            data.append(key, form[key]);
        }

        try {
            const res = await fetch('http://localhost:5000/api/v1/admin/create-student', {
                method: 'POST',
                credentials: 'include',
                body: data,
            });

            if (res.ok) {
                alert('Student registered successfully!');
                setForm({
                    name: '',
                    email: '',
                    class: '',
                    rollNo: '',
                    avatar: null,
                });
            } else {
                alert('Failed to register student');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
        }
    };

    if (!isAuthenticated) return null;

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center text-accent">Register New Student</h1>
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Student Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded"
                />
                <input
                    type="text"
                    name="class"
                    placeholder="Class"
                    value={form.class}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded"
                />
                <input
                    type="text"
                    name="rollNo"
                    placeholder="Roll Number"
                    value={form.rollNo}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded"
                />
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-accent text-white px-4 py-2 rounded w-full hover:bg-black transition"
                >
                    Register Student
                </button>
            </form>
        </div>
    );
}

export default RegisterStudent;
