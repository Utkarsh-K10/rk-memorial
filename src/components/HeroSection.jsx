import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = ({ heroImage }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleExploreClick = () => {
        setIsVisible(false);
    };

    return (
        <div
            className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{ opacity: 0.3 }}
                        className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-3xl shadow-lg max-w-2xl transition-all duration-500"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
                            Welcome to R.K. Memorial School
                        </h1>
                        <p className="text-md md:text-lg text-gray-700 mt-4">
                            A Premier English Medium School from Nursery to Class 12<sup>th</sup> | CBSE Based Pattern | Modern Learning
                        </p>
                        <button
                            onClick={handleExploreClick}
                            className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition"
                        >
                            Explore More
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeroSection;
