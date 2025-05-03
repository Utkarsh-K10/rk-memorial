import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VisitorFooter = () => {

    const [count, setCount] = useState(null);
    const [showChat, setShowChat] = useState(true);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/visitor/visitor-count`);
                const data = await res.json();
                if (data.success) {
                    setCount(data.count);
                }
            } catch (err) {
                console.error('Failed to fetch visitor count:', err);
            }
        };

        fetchVisitorCount();
    }, []);

    if (count === null) return null;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918871049844?text=Hi, I have a query regarding Admission.', '_blank');
    };

    return (
        <>
            {/* Visitor Count Footer */}
            <div className="w-full text-center py-3 bg-gradient-to-r from-pink-200 via-white to-sky-200 text-sm text-gray-700 font-medium">
                👀 Total Visitors: <span className="font-bold text-pink-600">{count || 20}</span>
            </div>

            {showChat && (
                <motion.div
                    className="fixed bottom-5 right-5 z-50 max-w-[90%] sm:max-w-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                >
                    <div className="relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowChat(false)}
                            className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-md hover:bg-red-600"
                            title="Close"
                        >
                            ×
                        </button>

                        {/* Chat Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center justify-center text-sm sm:text-base w-full hover:bg-green-600 transition"
                            onClick={handleWhatsAppClick}
                        >
                            💬 Any queries? Chat with us!
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default VisitorFooter;
