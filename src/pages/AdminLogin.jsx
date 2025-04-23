// src/pages/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                credentials: 'include', // Important for sending cookies
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                navigate('/register-student');
            } else {
                const error = await res.json();
                setErrorMsg(error?.message || 'Login failed. Try again.');
            }
        } catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong. Try again later.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-primary p-4">
            <div className="w-full flex justify-center mt-16">
                <marquee 
                    className="bg-pink-500 text-white-800 py-2 w-full text-center font-medium" 
                    scrollamount="8" 
                    behavior="scroll"
                    direction="left"
                    loop="infinite"
                    onmouseover="this.stop();"
                    onmouseout="this.start();"
                >
                    Welcome Principal R K Memorial to Admin Login Page, Please Enter your credentials to proceed.
                </marquee>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mt-16" style={{ marginTop: '2%' }}>
                <h2 className="text-2xl font-bold text-center mb-4 text-accent">Admin Login</h2>

                {errorMsg && (
                    <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>
                )}

                <form onSubmit={handleLogin} className="space-y-2">
                    <div>
                        <label className="block mb-1 font-medium text-sm text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-sm text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-black-500 py-2 px-4 rounded hover:bg-pink-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
