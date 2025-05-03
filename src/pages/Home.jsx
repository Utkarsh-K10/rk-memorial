// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { FaSchool, FaChalkboardTeacher, FaBusAlt, FaUsers, FaBook, FaRobot } from 'react-icons/fa';
import YouTubeGallery from '../components/Youtube.jsx';
import InstagramEmbed from '../components/InstaEmbed.jsx';
import HeroSection from '../components/HeroSection.jsx'; 
import GallerySection from '../components/GallerySection.jsx';
import TopPerformer from '../components/TopPerformer.jsx'; 

import { galleryPaths } from '../assets/assetPath.js';
const heroImage = galleryPaths.homeSection1; 

function Home() {
    const postUrl = "https://www.instagram.com/p/DFi3yi6TPgU/?utm_source=ig_embed&amp;utm_campaign=loading"
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-sans bg-orange-50 min-h-screen"
        >
            {/* Hero Section */}
            <HeroSection heroImage={heroImage} />

            {/* About Section */}
            <section className="px-4 md:px-10 py-10 bg-white">
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-3xl font-bold text-pink-600 text-center mb-4">About Us</h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto">R.K. Memorial School, Satna provides holistic education from Pre-Nursery to Class 12<sup>th</sup>. We offer Science, Commerce, and Humanities with modern labs, modern classrooms, and a focus on AI & robotics.</p>
                </motion.div>
            </section>
            <YouTubeGallery />
            {/* Features Section */}
            <section className="bg-gradient-to-tr from-orange-200 to-pink-100 py-12 px-4 md:px-10">
                <h3 className="text-2xl font-semibold text-orange-600 text-center mb-10">Why Choose Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <FaChalkboardTeacher size={32} />, title: 'Experienced Faculty' },
                        { icon: <FaBook size={32} />, title: 'Modern Curriculum' },
                        { icon: <FaRobot size={32} />, title: 'AI & Robotics' },
                        { icon: <FaBusAlt size={32} />, title: 'Transport Facility' },
                        { icon: <FaUsers size={32} />, title: 'Parent-Teacher Connect' },
                        { icon: <FaSchool size={32} />, title: 'Safe & Vibrant Campus' },
                    ].map(({ icon, title }, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
                        >
                            <div className="text-pink-600 mb-4">{icon}</div>
                            <h4 className="text-lg font-medium text-gray-800">{title}</h4>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Top Performer Section */}
            <TopPerformer />
            {/* Image Gallery Section */}
            <GallerySection/>
            {/* Insta Section */}
            <section className="py-12 bg-gradient-to-tr from-orange-200 via-white to-pink-100">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl text-center mb-10 text-orange-700"
                >
                    Follow Us on Instagram
                </motion.h2>

                <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-center lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="flex-1 mb-8 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-xl mx-auto text-center lg:text-left"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Our Latest Moments
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Experience beautiful memories from our recent events, captured and shared on our official Instagram page. Stay connected with us!
                            </p>
                        </motion.div>
                    </div>

                    {/* Instagram Single Card */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="max-w-[350px] h-[480px] w-[345px] rounded-2xl overflow-hidden shadow-xl bg-white p-2 transition-transform hover:scale-105 duration-300">
                            <InstagramEmbed postUrl={postUrl} />
                        </div>
                    </motion.div>

                </div>
            </section>
            {/* Call to Action */}
            <motion.div
                className="text-center bg-pink-100 p-10 mt-5"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-pink-700">📢 Admissions Open for 2025-26</h3>
                <p className="text-md text-gray-700 mt-2">Call us now: <strong className="text-orange-700">8871049844</strong> or <strong>WhatsApp</strong> to <strong className="text-green-600">8871049844</strong></p>
                <button className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition">Contact Us</button>
            </motion.div>
        </motion.div>
    );
}

export default Home;
