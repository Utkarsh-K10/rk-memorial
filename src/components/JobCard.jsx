import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

function JobCard({ jobImage, title, description, experience }) {
    const shareUrl = window.location.href;

    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/4 bg-gray-100 flex items-center justify-center p-4 h-auto sm:h-full relative">
                <img
                    src={jobImage || '/job-placeholder.png'}
                    alt={title}
                    className="w-full h-32 object-cover rounded-md"
                    loading="lazy"
                />
            </div>

            <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] lg:h-120 p-3 flex flex-col justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-700 line-clamp-2">
                    {title}
                </h2>
                <div
                    className="text-sm text-gray-700 mb-2 line-clamp-45 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                {/* <p className="text-sm text-gray-700 mb-2 line-clamp-45 leading-relaxed font-bold">
                    <strong>Job Description:</strong>
                    {' '}
                    {description}
                </p> */}
                <div className="text-sm text-gray-600 font-bold mb-3">
                    Min Experience: {experience || 0} yrs
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                        className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded flex items-center gap-2 transition"
                    >
                        <FaFacebookF className="w-4 h-4" /> Facebook
                    </button>
                    <button
                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, '_blank')}
                        className="px-2 py-1 bg-sky-400 hover:bg-sky-500 text-white text-xs font-medium rounded flex items-center gap-2 transition"
                    >
                        <FaTwitter className="w-4 h-4" /> Twitter
                    </button>
                    <button
                        onClick={() => window.open(`https://api.whatsapp.com/send?text=${shareUrl}`, '_blank')}
                        className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded flex items-center gap-2 transition"
                    >
                        <FaWhatsapp className="w-4 h-4" /> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
