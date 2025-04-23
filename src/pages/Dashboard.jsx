// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [admin, setAdmin] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const res = await fetch('https://your-api.com/admin/auth-check', {
                    credentials: 'include',
                });
                if (res.ok) {
                    const data = await res.json();
                    setAdmin(data.admin); // e.g., { email, username }
                } else {
                    navigate('/admin-login');
                }
            } catch {
                navigate('/admin-login');
            }
        };
        fetchAdmin();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await fetch('https://your-api.com/admin/logout', {
                method: 'POST',
                credentials: 'include',
            });
            navigate('/admin-login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center text-accent">Welcome, Admin</h1>

            {admin && (
                <div className="bg-white shadow-md p-4 rounded-md mb-4 text-sm text-gray-800 space-y-2">
                    <p><strong>Email:</strong> {admin.email}</p>
                    <p><strong>Username:</strong> {admin.username}</p>
                </div>
            )}

            <div className="flex justify-between gap-4">
                <button
                    onClick={() => navigate('/register-student')}
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-black transition"
                >
                    Register Student
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
