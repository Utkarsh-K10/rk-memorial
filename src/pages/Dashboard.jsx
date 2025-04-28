// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // 👈 Import Swal

function Dashboard() {
    const [admin, setAdmin] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/v1/admin/auth-check', {
                    credentials: 'include',
                });
                if (res.ok) {
                    const data = await res.json();
                    setAdmin(data.admin);
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
            await fetch('http://localhost:5000/api/v1/admin/logout', {
                method: 'POST',
                credentials: 'include',
            });

            // 🧁 Show sweet success popup!
            await Swal.fire({
                title: 'Logged Out!',
                text: 'See you soon, Principal 👋',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                backdrop: `
          rgba(0,0,123,0.4)
          url("/assets/success-bubble.gif") 
          left top 
          no-repeat
        `
            });

            navigate('/admin-login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-200 via-white to-pink-100 px-4 py-10">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl mx-auto p-8"
            >
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome, Principal</h1>

                {admin && (
                    <div className="bg-pink-100 p-4 rounded-lg shadow-inner mb-6 text-gray-700 text-sm space-y-2">
                        <p><span className="font-semibold">Email:</span> {admin.email}</p>
                        <p><span className="font-semibold">Username:</span> {admin.username}</p>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/register-student')}
                        className="px-6 py-2 bg-gradient-to-r from-sky-500 to-pink-400 text-white font-semibold rounded-full shadow-md hover:from-sky-600 hover:to-pink-500 transition"
                    >
                        Register Student
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-800 transition"
                    >
                        Logout
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

export default Dashboard;
