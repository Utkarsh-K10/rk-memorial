// src/components/NoticeModal.jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modal = {
    hidden: { opacity: 0, scale: 0.9, y: "-50%", x: "-50%" },
    visible: { opacity: 1, scale: 1, y: "-50%", x: "-50%" },
    exit: { opacity: 0, scale: 0.95, y: "-50%", x: "-50%" },
};

const NoticeModal = ({ isOpen, onClose, image, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                // Backdrop
                <motion.div
                    className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md overflow-y-auto"
                    style={{ overflowY: 'auto' }}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden relative"
                        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute" }}
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-lg"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        {/* Notice Image */}
                        <div className="w-full bg-black flex justify-center items-center">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto max-h-[90vh] object-contain"
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4 text-center bg-gray-50">
                            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NoticeModal;
