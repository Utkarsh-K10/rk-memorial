// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { FaSchool, FaChalkboardTeacher, FaBusAlt, FaUsers, FaBook, FaRobot } from 'react-icons/fa';
import YouTubeGallery from '../components/Youtube';
import heroImage from '../assets/gallery/hero-section-2.png'; // replace with your actual image path
function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-sans bg-orange-50 min-h-screen"
        >
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-600">Welcome to R.K. Memorial School</h1>
                    <p className="text-md md:text-lg text-gray-700 mt-4">A Premier English Medium School from Nursery to Class 12<sup>th</sup> | CBSE Pattern | Modern Learning</p>
                    <button className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition">Explore More</button>
                </div>
            </div>

            {/* About Section */}
            <section className="px-4 md:px-10 py-10 bg-white">
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-3xl font-bold text-pink-600 text-center mb-4">About Us</h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto">R.K. Memorial School, Satna provides holistic education from Pre-Nursery to Class 12<sup>th</sup>. We offer Science, Commerce, and Humanities with modern labs, digital classrooms, and a focus on AI & robotics.</p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-tr from-orange-200 to-pink-100 py-12 px-4 md:px-10">
                <h3 className="text-2xl font-semibold text-orange-700 text-center mb-10">Why Choose Us</h3>
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

            {/* Image Gallery Section */}
            <section className="px-4 md:px-10 py-10">
                <h3 className="text-2xl font-semibold text-pink-600 text-center mb-6">Campus Glimpse</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.img
                            key={i}
                            src={`/assets/gallery-${i}.jpg`}
                            alt={`gallery-${i}`}
                            className="rounded-xl w-full h-56 object-cover shadow-md hover:scale-105 transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                        />
                    ))}
                </div>
            </section>
            <YouTubeGallery />
            {/* Call to Action */}
            <motion.div
                className="text-center bg-pink-100 p-10 mt-10"
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
