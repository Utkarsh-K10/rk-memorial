import { motion } from "framer-motion";
import {galleryPaths} from "../assets/assetPath.js";

const GallerySection = () => {
    const galleryImages = [galleryPaths.gallery1, galleryPaths.gallery2, galleryPaths.gallery3, galleryPaths.gallery4, galleryPaths.gallery5, galleryPaths.gallery6];

    return (
        <section className="px-4 md:px-10 py-10">
            <h3 className="text-2xl font-semibold text-pink-600 text-center mb-6">
                Campus Glimpse
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
