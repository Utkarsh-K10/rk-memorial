import { motion } from 'framer-motion';
import React from 'react';
import collage1 from '../assets/collage1.png';
import collage2 from '../assets/collage2.png';
import studentLife from '../assets/studentLife.png';
import studentinLab from '../assets/studentinLab.png';
import classroom from '../assets/classroomlearning2.png';
import playground from '../assets/playground.png';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { FaBook, FaBookAtlas, FaBoxesStacked } from 'react-icons/fa6';
import { FcBookmark } from 'react-icons/fc';
import TopPerformer from '../components/TopPerformer';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const AboutPage = () => {
    const sections = [
        {
            title: 'Value-Driven Education',
            text: 'Ranked among the best low-fee private schools in Satna, especially Nai Basti and Human Nagar, we deliver top-quality education, modern infrastructure, and holistic development at affordable fees.',
            image: collage1,
        },
        {
            title: 'Modern Facilities',
            text: 'Our facilities feature smart classrooms, modern science and computer labs, a spacious playground, and a creative campus—supported by expert teachers and parents for holistic learning in Satna.',
            image: classroom,
        },
        {
            title: 'AI Education for the Future',
            text: 'We proudly introduce AI education from early grades in collaboration with Orions IT Solutions and Sigma Analytics, empowering students in Satna to explore Artificial Intelligence and future-ready technologies.',
            image: studentinLab,
        },
        {
            title: 'Student Life',
            text: 'At R K Memorial, we believe in holistic development. Our students actively participate in extracurricular activities, sports, and cultural events, creating memories and friendships that last a lifetime.',
            image: studentLife,
        },
        {
            title: 'Our Journey in Pictures',
            text: 'A glimpse into our journey of excellence and growth over the years. These moments reflect our commitment to education and the joy of learning.',
            image: collage2,
        },
        {
            title: 'Join Us',
            text: 'Admissions are now open! For more information, contact us at 📧 rkmemorialoc@gmail.com or 📱 8871049844.',
            image: playground,
        },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-10 py-8 max-w-7xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white to-blue-100 opacity-50 -z-10"></div>
            <motion.h1
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange-600 mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            // className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange-600 mb-6"
            // variants={fadeInUp}
            >
                About R K Memorial Hr. Sec. School Satna
            </motion.h1>

            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-8 leading-relaxed text-justify"
            >
                Established in 1996, R K Memorial Hr. Sec. School, Satna is dedicated to <span className="font-semibold text-orange-500">"Empowering Minds, Shaping Futures."</span> Situated in Human Nagar near Nai Basti, Satna, our English medium institution provides quality education from <span className="font-semibold text-indigo-500">Nursery to Class 12th</span>. We take pride in our, academic excellence, affordable fee structure, and a nurturing environment that fosters discipline, innovation, and holistic development.
            </motion.p>
            {/* Stats Card */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10"
            >
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl text-orange-500 mb-4">
                        <FaGraduationCap/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">600+ Students Enrolled</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Growing every year with excellence.</p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl text-indigo-500 mb-4">
                        <FaSchool/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Pre-Nursery to Class 12th</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Complete schooling under one roof.</p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl text-pink-500 mb-4">
                        <FaBoxesStacked/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Streams Available</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Maths, Science, Bio, Arts for senior secondary.</p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
            >
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full md:w-1/2 h-40 sm:h-44 md:h-auto object-cover md:object-top"
                        />
                        <div className="p-4 md:w-1/2">
                            <h2 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">{section.title}</h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">{section.text}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            <TopPerformer />
        </div>
    );
};

export default AboutPage;
