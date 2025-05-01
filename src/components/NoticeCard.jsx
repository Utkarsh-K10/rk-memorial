import { motion } from 'framer-motion';

function NoticeCard({ title, description, date, imageUrl }) {
    const truncateDescription = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-orange-100 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300"
        >
            {/* Image */}
            <div className="w-full sm:w-1/2 h-48 sm:h-auto">
                <img
                    src={imageUrl}
                    alt={title}
                    onError={(e) => (e.target.src = '/placeholder-image.png')}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between p-4 w-full sm:w-1/2 text-center sm:text-left">
                <div>
                    <h3 className="text-orange-700 text-sm md:text-lg font-semibold sm:text-xl truncate">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base leading-snug">
                        {truncateDescription(description, 14)}
                    </p>
                </div>
                <p className="mt-3 text-grey-800 font-semibold text-xs sm:text-sm">{date}</p>
            </div>
        </motion.div>
    );
}

export default NoticeCard;
