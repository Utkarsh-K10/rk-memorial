// src/sections/YouTubeGallery.jsx

import { motion } from "framer-motion";

function YouTubeGallery() {
    const videos = [
        "https://www.youtube.com/embed/FA0d5W0Y95o?si=TWed5ffAp0p-XK6w",
        "https://www.youtube.com/embed/ZbV1vsdtCuo?si=oDSvHkGpiw7BVAn5",
        "https://www.youtube.com/embed/AvIO8DxIMHc?si=i1DGAtms-Gt2jUZ7",
    ];

    return (
        <section className="py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-orange-100 to-pink-100">
            <motion.h2
                className="text-3xl font-bold text-center text-orange-700 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                🎥 Explore Our Campus Life
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((videoUrl, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg bg-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                height={180}
                                className="w-full"
                                src={videoUrl}
                                title={`School Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default YouTubeGallery;
