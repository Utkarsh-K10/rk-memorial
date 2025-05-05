// src/components/BlogCard.jsx

function BlogCard({ author, title, blogImage, body, date }) {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
                src={blogImage || "/placeholder-image.png"}
                alt={title}
                className="w-full h-60 object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{body}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span>By {author || 'Unknown'}</span>
                    <span>{new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
