// src/pages/ContactUs.jsx
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import InstagramGallery from '../components/InstagramGallery';
import InstagramEmbed from '../components/InstaEmbed';

function ContactUs() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 md:p-10 bg-orange-50 min-h-screen font-sans"
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-600">📞 Get in Touch with Us!</h1>
                <p className="mt-2 text-gray-700 text-md md:text-lg">We're here to help with admissions, queries & support.</p>
            </div>

            {/* Admissions Open Section */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-orange-300 to-pink-300 rounded-xl shadow-lg p-6 mb-10 text-center"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white">🎓 Admissions Open for 2025-26</h2>
                <p className="mt-2 text-white text-sm md:text-base">English Medium School from Nursery to Class 12<sup>th</sup></p>
                <p className="text-white text-sm">Streams: Science, Commerce, Humanities | Modern Classrooms | Safe Transport</p>
            </motion.div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Admission Contacts */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">For Admission Enquiry</h3>
                    <div className="flex items-center gap-3 text-gray-800 text-sm md:text-base mb-2">
                        <FaPhoneAlt size={20} className="text-pink-500" />
                        <span>📞 Office: <strong>8871049844</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-800 text-sm md:text-base">
                        <FaWhatsapp size={20} className="text-green-600" />
                        <span>📲 WhatsApp: <strong>8871049844</strong></span>
                    </div>
                </motion.div>

                {/* Email & Location */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">Reach Out to Us</h3>
                    <div className="flex items-center gap-3 text-gray-800 text-sm md:text-base mb-2">
                        <FaEnvelope size={20} className="text-blue-600" />
                        <span>✉️ Email: rkmemorialoc@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-800 text-sm md:text-base">
                        <FaMapMarkerAlt size={22} className="text-red-500 mt-1" />
                        <span>🏫 Jagjeevanram Ward-17, Human Nagar, Satna, Madhya Pradesh</span>
                    </div>
                </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="text-center mb-10">
                <h3 className="text-lg font-semibold text-orange-700 mb-4">Connect with Us on Social Media</h3>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://wa.me/918871049844" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:rkmemorialoc@gmail.com">
                        <FaEnvelope className="text-blue-500 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-blue-700 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.instagram.com/rk_memorial_hr_sec_school/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-600 hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
            {/* Instagram Embed */}
            <InstagramEmbed postUrl="https://www.instagram.com/p/DFi3yi6TPgU/?utm_source=ig_embed&amp;utm_campaign=loading" />
            {/* Embedded Map */}
            <div className="text-center mt-10 space-y-4">
                <h4 className="text-lg font-bold text-orange-700 mb-2">Find Us Here:</h4>
                <div className="w-full h-72 rounded-lg overflow-hidden shadow-md mt-10">
                    <iframe
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.322854490162!2d80.8707888!3d24.578051700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847ef60b06f495%3A0xa7c113963c3b07c7!2sR.%20K.%20Memorial%20Hr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1745607907989!5m2!1sen!2sin"
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactUs;
