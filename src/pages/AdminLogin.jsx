// // src/pages/AdminLogin.jsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// function AdminLogin() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMsg, setErrorMsg] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setErrorMsg('');

//         try {
//             const res = await fetch('http://localhost:5000/api/v1/admin/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include', // Important for sending cookies
//                 body: JSON.stringify({ email, password }),
//             });

//             if (res.ok) {
//                 navigate('/dashboard');
//             } else {
//                 const error = await res.json();
//                 setErrorMsg(error?.message || 'Login failed. Try again.');
//             }
//         } catch (err) {
//             console.error(err);
//             setErrorMsg('Something went wrong. Try again later.');
//         }
//     };

//     return (
//         <div className="min-h-6 flex flex-col items-center bg-primary p-4">
//             <div className="w-full flex justify-center mt-16">
//                 <marquee 
//                     className="bg-pink-500 text-white-800 py-2 w-full text-center font-medium" 
//                     scrollamount="7" 
//                     behavior="scroll"
//                     direction="left"
//                     loop="infinite"
//                 >
//                     Welcome Principal R K Memorial to Admin Login Page, Please Enter your credentials to proceed.
//                 </marquee>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mt-16" style={{ marginTop: '2%' }}>
//                 <h2 className="text-2xl font-bold text-center mb-4 text-accent">Admin Login</h2>

//                 {errorMsg && (
//                     <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>
//                 )}

//                 <form onSubmit={handleLogin} className="space-y-2">
//                     <div>
//                         <label className="block mb-1 font-medium text-sm text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             autoFocus
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-1 font-medium text-sm text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-pink-500 text-black-500 py-2 px-4 rounded hover:bg-pink-600 transition"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AdminLogin;
// src/pages/AdminLogin.jsx
// src/pages/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            const res = await fetch('http://localhost:5000/api/v1/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                navigate('/dashboard');
            } else {
                const error = await res.json();
                setErrorMsg(error?.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong. Please try again later.');
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
                className="flex-grow flex items-center justify-center px-4 py-2 mb-25"
            >
                <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-pink-200">
                    <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">Admin Login</h2>

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
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-2 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600 transition"
                        >
                            Login
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
