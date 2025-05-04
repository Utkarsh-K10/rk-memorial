import { useState } from 'react';
import { FaWhatsapp, FaPaperPlane, FaTimes } from 'react-icons/fa';

const AnyQueriesFooter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`fixed bottom-4 right-4 z-50 flex items-center justify-between bg-green-500 text-white rounded-full shadow-lg transition-all duration-600 ease-in-out ${open ? 'w-64 px-4 py-3' : 'w-14 h-14 p-0 justify-center'
                }`}
        >
            {!open ? (
                <button
                    onClick={() => setOpen(true)}
                    className="relative flex items-center justify-center w-full h-full"
                >
                    {/* Glowing WhatsApp icon */}
                    <div className="absolute animate-ping w-10 h-10 rounded-full bg-green-500 opacity-75"></div>
                    <FaWhatsapp className="text-2xl relative z-10" />
                </button>
            ) : (
                <>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium whitespace-nowrap">Any Queries? Chat Now</span>
                        <a
                            href="https://wa.me/918871049844"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaPaperPlane className="text-lg" color='white' />
                        </a>
                    </div>
                    {/* Close (X) button */}
                    <button onClick={() => setOpen(false)} className="ml-2">
                        <FaTimes className="text-white text-sm hover:text-gray-200" />
                    </button>
                </>
            )}
        </div>
    );
};

export default AnyQueriesFooter;
