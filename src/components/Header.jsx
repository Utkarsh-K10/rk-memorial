import React, { useState } from 'react';
import localLogo from "/5.png";
import { logoPaths } from '../assets/AssetPath.js';
import '../index.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/useAdmin.jsx'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { admin } = useAdmin();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full font-sans sticky top-0 z-50 shadow-md bg-white">
            {/* Line 1: Logo + School Name + Tagline */}
            <div className=" bg-gradient-to-r from-pink-500 to-pink-400 text-white flex flex-col sm:flex-row items-center sm:items-start justify-center px-2 sm:px-3 py-2 sm:py-3 gap-1 sm:gap-3 text-center sm:text-left">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logoPaths.logo || localLogo}
                        alt="School Logo"
                        className="w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md shadow-grey-200"
                    />
                </Link>
                {/* Name + Tagline */}
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <h1 className="font-cinzel text-[18px] sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap xs:text-2xl">
                        R K Memorial Hr. Sec. School, Satna
                    </h1>
                    <div className="flex flex-row items-center gap-1 sm:gap-2">
                        <p className="text-[10px] sm:text-xs md:text-sm italic font-bold tracking-wide">
                            Empowering Minds, Shaping Futures
                        </p>
                        <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
                            An English Medium School | Estd. 1996
                        </p>
                    </div>
                </div>
            </div>
            {/* Line 2: Navigation */}
            <nav className="bg-white shadow-md">
                <div className="flex justify-between items-center px-4 sm:px-6 py-3">
                    <button
                        className="text-grey-500 text-xl sm:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className="hidden sm:flex gap-6 text-sm md:text-base font-semibold text-sky-500 items-center">
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/">Home</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/about">About</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/admission">Admissions</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/notices">Academics</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/blog">Blogs</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/job">Careers</a>
                        </li>
                        <li className="hover:text-sky-500 cursor-pointer">
                            <a href="/admin-login">Admin Login</a>
                        </li>
                        {admin && <li><Link to="/dashboard">Dashboard</Link></li>}
                    </ul>
                    {/* School Phone Number */}
                    <div className="sm:flex lg:flex items-center gap-4">
                        <a
                            href="tel:7728988448"
                            className="text-sm md:text-base xs:font-base font-bold text-pink-400 animate-bounce"
                        >
                            🎓 Admissions Open 2026
                        </a>
                    </div>
                    {/* Call Now Button */}
                    <div>
                        <a
                            href="https://wa.me/+918871049844"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-emerald-400 transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        // AnimatePresence is used to animate the entrance and exit of the mobile menu
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="sm:hidden bg-white shadow-md overflow-hidden"
                        >
                            <ul className="flex flex-col gap-4 px-4 py-3 text-sm font-semibold text-sky-500">
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/">Home</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/about">About</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/admission">Admissions</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/notices">Academics</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/contact">Contact</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/job">Careers</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/blog">Blogs</a>
                                </li>
                                <li className="hover:text-sky-500 cursor-pointer">
                                    <a href="/admin-login">Admin Login</a>
                                </li>
                                {admin && <li><Link to="/dashboard">Dashboard</Link></li>}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
