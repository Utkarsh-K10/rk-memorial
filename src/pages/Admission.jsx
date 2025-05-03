import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaBus, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import { FcAdvertising, FcApproval, FcReading } from "react-icons/fc";
import { FaComputer } from "react-icons/fa6";
import { AdmissionPaths } from '../assets/AssetPath.js';
import VisitorFooter from '../components/VisitorFooter.jsx';
const { admissionBanner, classroomImage } = AdmissionPaths; 


export default function Admission() {
    return (
        <motion.div
            className="bg-orange-50 min-h-screen pt-6 pb-10 px-4 sm:px-6 lg:px-20 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Banner */}
            <div className="text-center">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-orange-700 mb-2"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    Admissions Open 2025
                </motion.h1>
                <p className="text-md md:text-lg text-orange-600 mb-6 animate-pulse font-semibold">
                    English Medium | Pre-Nursery to Class 12th (Maths, Bio, Commerce, Arts)
                </p>
                <img
                    src={admissionBanner}
                    alt="Admission Banner"
                    className="rounded-2xl w-full max-h-96 object-cover shadow-xl"
                />
            </div>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:justify-between">
                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-2">Why Choose Us?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li className="text-xl font-bold text-orange-600 mb-2"> Pre-Nursery to Class 12th<FcApproval className="inline ml-1" /></li>
                        <li>Streams: Maths, Bio, Commerce, Arts <FcAdvertising className="inline ml-1" /></li>
                        <li>Secure & on-demand transport facility <FaBus className="inline ml-1 text-orange-500" /></li>
                        <li>Dedicated, qualified teachers <FaChalkboardTeacher className="inline ml-1 text-orange-500" /></li>
                        <li>Affordable and quality education<FcApproval className="inline ml-1" /></li>
                        <li>Science & Computer Labs <FaBook className="inline ml-1 text-orange-500" /></li>
                        <li>Spacious, vibrant classrooms <FcReading className="inline ml-2" /></li>
                        <li>Focus on digital learning<FaComputer className="inline ml-1 text-orange-500" /></li>
                    </ul>
                </motion.div>
                <img
                    src={classroomImage}
                    alt="Classroom"
                    className="rounded-2xl shadow-md w-full object-cover  h-97"
                />
            </div>

            {/* /* Circular Buttons for Step-by-Step Guidance */}
            <div className="flex flex-wrap justify-center gap-6 my-10">
                {["Step 1: Enquire", "Step 2: Visit School", "Step 3: Confirm Admission"].map((step, index) => (
                    <motion.div
                        key={index}
                        className="w-32 h-32 bg-orange-500 text-white rounded-full flex items-center justify-center text-center font-bold shadow-md hover:bg-white-500 cursor-pointer text-sm  "
                        whileHover={{ scale: 1.1 }}
                    >
                        {step}
                    </motion.div>
                ))}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-gray-700">
                <h3 className="text-xl font-bold mb-4 text-orange-700">Admission Information</h3>
                <ul className="space-y-2 list-disc pl-5">
                    <li>Admission Fee: ₹2000</li>
                    <li>Tuition Fee: Monthly basis depending on class</li>
                    <li>Registration Fee: ₹350</li>
                    <li className="text-gray-700">
                        Fee Policy:
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>💳 Facility of both <span className="font-semibold text-pink-600">Online</span> and <span className="font-semibold text-pink-600">Offline</span> fee deposit available.</li>
                            <li>📅 Only <span className="font-semibold text-pink-600">10 months' fee</span> is applicable per academic session.</li>
                            <li>🎯 Fee waiver up to <span className="font-semibold text-pink-600">25%</span> based on performance in previous classes.</li>
                            <li>📜 <span className="font-semibold text-pink-600">Scholarships</span> available for meritorious students.</li>
                        </ul>
                    </li>

                    <li><span className="font-semibold text-pink-600">Documents Required:</span>
                        <ul className="list-disc pl-5">
                            <li>Birth Certificate</li>
                            <li>Parent's ID Proof</li>
                            <li>Transfer Certificate</li>
                            <li>Recent Passport-sized Photos</li>
                            <li>Previous Class Report Card</li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* Contact Section */}
            <div className="text-center mt-10 space-y-4">
                <p className="text-lg text-orange-700">To know more or visit us:</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="tel:8871049844"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
                    >
                        <FaPhoneAlt /> Call Now
                    </a>
                    <a
                        href="https://wa.me/918871049844"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
                    >
                        <FaWhatsapp /> WhatsApp Chat
                    </a>
                    <a
                        href="mailto:rkmemorialoc@gmail.com"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
                    >
                        <FaEnvelope /> Email Us
                    </a>
                </div>
                <div className="mt-6 bg-white p-2 rounded-xl shadow-md max-w-6xl mx-auto">
                    <h4 className="text-lg font-semibold text-orange-700 mb-1">Find Us Here:</h4>
                    <div className="w-full h-72 rounded-lg overflow-hidden shadow-md border border-orange-200 mb-1">
                        <iframe
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.322854490162!2d80.8707888!3d24.578051700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847ef60b06f495%3A0xa7c113963c3b07c7!2sR.%20K.%20Memorial%20Hr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1745607907989!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
            <VisitorFooter/>
        </motion.div>
    );
}
