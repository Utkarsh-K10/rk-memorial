import { useState } from 'react';
import {FaFacebookF, FaTwitter, FaWhatsapp} from 'react-icons/fa';

function BlogCard({ author, title, blogImage, body, date }) {
    return (
        <div className="shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group bg-white">
            <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] lg:h-90">
                <img
                    src={blogImage || "/placeholder-image.png"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    style={{
                        maxWidth: '100%',
                        height: '90%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </div>
            <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {title}
                </h2>
                <div
                    className="text-sm text-gray-600 line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                        className="mt-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded flex items-center gap-2 transition-all"
                    >
                        <FaFacebookF className="w-4 h-4"/> Facebook
                    </button>
                    <button
                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')}
                        className="mt-2 px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white text-xs font-medium rounded flex items-center gap-2 transition-all"
                    >
                        <FaTwitter className="w-4 h-4" />Twitter
                    </button>
                    <button
                        onClick={() => window.open(`https://api.whatsapp.com/send?text=${window.location.href}`, '_blank')}
                        className="mt-2 px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded flex items-center gap-2 transition-all"
                    >
                        <FaWhatsapp className="w-4 h-4" /> WhatsApp
                    </button>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                    <span>By <span className="font-medium">{author || 'Unknown'}</span></span>
                    <span>
                        {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
