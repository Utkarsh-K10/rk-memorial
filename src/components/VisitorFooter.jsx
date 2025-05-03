import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VisitorFooter = () => {
    const [visitorCount, setVisitorCount] = useState(1);

    useEffect(() => {
        const storedCount = parseInt(localStorage.getItem('visitor_count')) || 0;
        const newCount = storedCount + 1;
        setVisitorCount(newCount);
        localStorage.setItem('visitor_count', newCount);
    }, []);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918871049844?text=Hi, I have a query regarding Admission.', '_blank');
    };

    return (
        <>
            {/* Visitor Count Footer */}
            <div className="w-full text-center py-3 bg-gradient-to-r from-pink-200 via-white to-sky-200 text-sm text-gray-700 font-medium">
                👀 Total Visitors: <span className="font-bold text-pink-600">{visitorCount}</span>
            </div>

            {/* Floating Chat Button */}
            <motion.div
                className="fixed bottom-5 right-5 z-50 max-w-[90%] sm:max-w-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center justify-center text-sm sm:text-base w-full hover:bg-green-600 transition"
                    onClick={handleWhatsAppClick}
                >
                    💬 Any queries? Chat with us!
                </motion.button>
            </motion.div>
        </>
    );
};

export default VisitorFooter;
