const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../context/useAdmin';
import logo from '/7.png';
function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false); // <-- NEW
    const navigate = useNavigate();
    const { setAdmin } = useAdmin();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // <-- Start loading
        try {
            const res = await fetch(`${BASE_URL}/admin/login`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const admindata = await res.json();

            if (res.ok) {
                setAdmin(admindata.data.loggedInUser);
                navigate('/dashboard');
            } else {
                setErrorMsg(admindata.message || "Login failed");
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMsg('Something went wrong');
        } finally {
            setLoading(false); // <-- Stop loading
        }
    };
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-200 via-white to-pink-100">
            {/* Marquee Section */}
            <div className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 text-white py-1 w-full text-center font-semibold tracking-wide shadow-md">
                <marquee scrollamount="6" behavior="scroll" direction="left">
                    Welcome Principal R K Memorial to Admin Login Page. Please Enter your Credentials.
                </marquee>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow flex items-center justify-center px-4 py-2 mb-38"
            >
                <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-pink-200">
                    <div className="text-center">
                        <img src={logo} alt="School Logo" className="w-18 h-18 mx-auto rounded-full shadow-md shadow-grey-200" />
                        <h2 className="text-2xl font-bold text-pink-500 mt-5">Admin Login</h2>
                    </div>
                    {/* <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">Admin Login</h2> */}
                    {/* Error Message */}
                    {errorMsg && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-600 text-center text-sm mb-4"
                        >
                            {errorMsg}
                        </motion.p>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-300"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-300"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: loading ? 1 : 1.05 }}
                            whileTap={{ scale: loading ? 1 : 0.95 }}
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 rounded-md font-semibold transition ${loading ? 'bg-pink-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 text-xs text-gray-600 space-y-1 text-center"
                        >
                            <p>✅ Carefully enter your credentials.</p>
                            <p>✅ Authorized robust login for Principal, HR, Headmaster only.</p>
                            <p>⚠️ You have only 3 login attempts before lockout.</p>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default AdminLogin;