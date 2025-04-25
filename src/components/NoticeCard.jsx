// // src/components/NoticeCard.jsx
// function NoticeCard({ title, description, date, imageUrl }) {
//     const truncateDescription = (text, wordLimit) => {
//         const words = text.split(' ');
//         return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
//     };

//     return (
//         <div className="bg-blue-45 shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-200 flex flex-col md:flex-row h-40 md:h-65 sm:h-50">
//             {/* Left Part: Image */}
//             <div className="flex-shrink-0 w-full md:w-1/3 h-3/4 self-center">
//                 {imageUrl ? (
//                     <img
//                         src={imageUrl}
//                         alt={title}
//                         className="w-full h-full object-cover rounded-lg"
//                         onError={(e) => (e.target.src = '/placeholder-image.png')} // Fallback image
//                     />
//                 ) : (
//                     <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
//                         <span className="text-gray-500 text-sm md:text-base">No Image Available</span>
//                     </div>
//                 )}
//             </div>

//             {/* Right Part: Content */}
//             <div className="flex-grow mt-4 md:mt-0 md:ml-4 text-center md:text-left overflow-hidden md:h-65 sm:h-50">
//                 <h3 className="text-sm md:text-lg font-semibold text-orange-800 truncate">{title}</h3>
//                 <p className="mt-2 text-xs md:text-sm text-gray-600">{truncateDescription(description, 8)}</p>
//                 <p className="mt-4 text-xs md:text-sm text-gray-500">{date}</p>
//             </div>
//         </div>
//     );
// }

// export default NoticeCard;

// src/components/NoticeCard.jsx
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
