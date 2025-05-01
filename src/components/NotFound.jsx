import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-65 flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-pink-50 px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-2xl text-center space-y-6 border-t-2 border-red-400"
            >
                <div className="text-7xl text-pink-400 font-extrabold">404</div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Oops! Page Not Found</h1>

                <p className="text-gray-600 text-base leading-relaxed">
                    It looks like you've taken a wrong turn. Don't worry, these things happen!
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white font-medium rounded-full shadow hover:bg-sky-600 transition"
                >
                    <FaHome className="text-lg" />
                    Go to Home
                </button>
            </motion.div>
        </div>
    );
}

export default NotFound;
