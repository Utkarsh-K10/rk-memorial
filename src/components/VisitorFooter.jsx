import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnyQueriesFooter from '../components/AnyQueriesFooter.jsx';
const VisitorFooter = () => {

    const [count, setCount] = useState(null);

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

    return (
        <>
            {/* Visitor Count Footer */}
            <div className="w-full text-center py-3 bg-gradient-to-r from-pink-200 via-white to-sky-200 text-sm text-gray-700 font-medium">
                👀 Total Visitors: <span className="font-bold text-pink-600">{count || 20}</span>
            </div>
            {/* WhatsApp Button */}
            <AnyQueriesFooter />

        </>
    );
};

export default VisitorFooter;
