// src/components/BlogCard.jsx

function BlogCard({ author, title, blogImage, body, date }) {
    return (
        <div className="shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group bg-white">
            <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] h-90">
                <img
                    src={blogImage || "/placeholder-image.png"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {body}
                </p>
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
