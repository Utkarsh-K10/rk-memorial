import { motion } from "framer-motion";

// Import images statically
import gallery1 from "../assets/gallery/gallery-1.jpeg";
// import gallery2 from "../assets/gallery/gallery-2.jpeg";
import gallery3 from "../assets/gallery/Home-section-1.png";
import gallery4 from "../assets/gallery/gallery-4.jpeg";
import gallery5 from "../assets/gallery/gallery-5.jpeg";
import gallery6 from "../assets/gallery/gallery-6.jpeg";
const gallery2 = "https://res.cloudinary.com/dc2qoqcrd/image/upload/v1745733388/gallery%20section/gejsidxei7pqbxtcmdlp.png"

const GallerySection = () => {
    const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

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
