// src/sections/InstagramGallery.jsx

import { motion } from "framer-motion";

function InstagramGallery() {
    const instagramPosts = [
        "https://www.instagram.com/p/DFi3yi6TPgU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/your-post-id-2/embed",
        "https://www.instagram.com/p/your-post-id-3/embed",
    ];

    return (
        <section className="py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-pink-100 to-orange-100">
            <motion.h3
                className="text-2xl text-center text-orange-700 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                📸 Follow Us on Instagram
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramPosts.map((postUrl, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg bg-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="aspect-w-16 aspect-h-18">
                            <iframe
                                src={postUrl}
                                className="w-full h-full border-none"
                                allowtransparency="true"
                                allow="encrypted-media"
                                title={`Instagram Post ${index + 1}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default InstagramGallery;