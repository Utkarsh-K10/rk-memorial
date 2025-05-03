import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import {logoPaths} from '../assets/AssetPath.js';
const qrCode = logoPaths.qrCode;

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-10 pb-6 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Footer Card */}
                <div className="bg-slate-800 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

                    {/* School Info */}
                    <div className="space-y-3">
                        <h4 className="text-pink-400 text-lg font-semibold">R. K. Memorial Hr. Sec. School</h4>
                        <p>Established in 1996, nurturing excellence in education with CBSE based curriculum from Nursery to 12th Grade.</p>
                        <p className="text-gray-400 text-xs italic">"Empowering Minds, Shaping Futures."</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h4 className="text-pink-400 text-lg font-semibold">Contact Us</h4>
                        <p className="flex items-center gap-2 hover:text-pink-400"><FaPhoneAlt color='green'/> +91 9893986074</p>
                        <p className="flex items-center gap-2 hover:text-pink-400"><FaPhoneAlt color='green'/> +91 7728988448</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt color='red'/><a href="https://g.co/kgs/ukfX7DN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 ml-1">Jagjeevanram Ward-17, Satna, Madhya Pradesh</a></p>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-3">
                        <h4 className="text-pink-400 text-lg font-semibold">Useful Links</h4>
                        <ul className="space-y-2">
                            <li><a href="https://mped.mp.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-400"><FaExternalLinkAlt /> MP Education Portal</a></li>
                            <li><a href="https://rteportal.mp.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-400"><FaExternalLinkAlt /> MP RTE Portal</a></li>
                            <li><a href="https://scholarshipportal.mp.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-400"><FaExternalLinkAlt /> MP Scholarship Portal</a></li>
                        </ul>
                    </div>

                    {/* QR Code Section */}
                    <div className="space-y-3 text-center">
                        <h4 className="text-pink-400 text-lg font-semibold">Scan to Connect</h4>
                        <img
                            src={qrCode}
                            alt="QR Code"
                            className="w-32 h-32 mx-auto rounded-lg border-2 border-pink-500 p-1 hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex justify-center gap-4 mt-4">
                            <a href="https://www.facebook.com/rkmemorialhrsecchoolsatna/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook size={20} /></a>
                            <a href="https://www.instagram.com/rk_memorial_hr_sec_school/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram size={20} /></a>
                            <a href="https://www.youtube.com/@RKMemorialSchoolSatna" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube size={22} /></a>
                        </div>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-8">
                    <Link
                        reloadDocument
                        to="/admission"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
                    >
                        Apply for Admission
                    </Link>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
                    © 1996 - {new Date().getFullYear()} R.K. Memorial School. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
