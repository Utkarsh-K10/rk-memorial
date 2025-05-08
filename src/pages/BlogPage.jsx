import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${BASE_URL}/user/blog/${id}`);
                const result = await res.json();

                if (!res.ok || !result.success) throw new Error(result.message);
                setBlog(result.data);
            } catch (err) {
                console.error("[Blog Details Fetch Error]", err);
                setError(err.message || "Failed to load blog.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const shareUrl = window.location.href;

    const socialLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${shareUrl}`,
    };

    if (loading) return <p className="text-center py-10 text-blue-500">Loading blog...</p>;
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
    if (!blog) return <p className="text-center py-10 text-gray-500">Blog not found.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 relative">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center text-green-600 hover:underline"
            >
                <FaArrowLeft className="mr-1" /> Back to Blogs
            </button>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.blogImage} alt={blog.title} className="w-full h-100  object-cover" />
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-green-700 mb-2">{blog.title}</h2>
                    <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                        <p>By <span className="font-semibold">{blog.author}</span></p>
                        <div className="flex items-center space-x-2">
                            <IoMdShare className="text-lg text-gray-500" />
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-blue-700" />
                            </a>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-blue-500" />
                            </a>
                            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:text-green-500" />
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed space-y-6">
                        <div
                            className="prose max-w-none prose-h3:text-xl prose-p:text-base prose-strong:font-semibold prose-em:italic"
                            dangerouslySetInnerHTML={{ __html: blog.body }}
                        />
                        {blog.links?.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-green-600 mb-4">Related Links</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {blog.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block border p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 bg-gray-50 hover:bg-white"
                                        >
                                            <p className="text-blue-600 font-medium truncate">{link.title || link.url}</p>
                                            <p className="text-xs text-gray-500">{link.url}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
