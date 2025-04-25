import { motion } from 'framer-motion';
import React from 'react';
import collage1 from '../assets/collage1.png';
import collage2 from '../assets/collage2.png';
import studentLife from '../assets/studentLife.png';
import studentinLab from '../assets/studentinLab.png';
import classroom from '../assets/classroom.png';
import playground from '../assets/playground.png';

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
            title: 'Affordable Quality Education',
            text: 'Proudly recognized as a top low-fee private school in Satna, especially in Nai Basti and Human Nagar, we offer quality education and modern infrastructure at affordable fees—ensuring excellence without compromise for every student.',
            image: collage1,
        },
        {
            title: 'Modern Facilities',
            text: 'Our facilities include smart classrooms, advanced science and computer labs, a spacious playground, and a creative campus. With expert teachers, supportive parents, and active students, we foster a dynamic, holistic learning environment in Satna’s Nai Basti and Human Nagar.',
            image: classroom,
        },
        {
            title: 'AI Education for the Future',
            text: 'We are proud to introduce AI education from early classes in collaboration with Orions IT Solutions and Sigma Analytics. Their support enables our students to explore the world of Artificial Intelligence and modern technologies, preparing them for a tech-driven future.',
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
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange-600 mb-6"
            >
                About R K Memorial Hr. Sec. School Satna
            </motion.h1>

            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed"
            >
                Established in 1996, R K Memorial Hr. Sec. School, Satna is dedicated to <span className="font-semibold text-orange-500">"Empowering Minds, Shaping Futures."</span> Situated in Human Nagar near Nai Basti, Satna, our English medium institution provides quality education from Nursery to Class 12th. We take pride in our affordable fee structure, academic excellence, and a nurturing environment that fosters discipline, innovation, and holistic development.
            </motion.p>

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
                            className="w-full md:w-1/2 h-40 sm:h-44 md:h-auto object-cover"
                        />
                        <div className="p-4 md:w-1/2">
                            <h2 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">{section.title}</h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">{section.text}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AboutPage;
