import React from 'react';
import logo from '/logo.png'; // Make sure to place your logo image in the correct path


const Header = () => {
    return (
        <header className="w-full">
            {/* Line 1: Logo and School Name */}
            <div className="bg-orange-400 text-white flex items-center px-4 py-2 gap-2 w-full">
                <img
                    src={logo}
                    alt="School Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold font-cinzel w-full text-center">
                    R K Memorial Hr. Sec. School, Satna
                </h1>
            </div>

            {/* Line 2: Motto, Medium, Affiliation, Year */}
            <div className="bg-yellow-200 text-gray-900 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
                Empowering Minds, Shaping Futures | English Medium | Affiliation No. XXXXX | Estd. 1996
            </div>

            {/* Line 3: Address */}
            <div className="bg-green-700 text-white px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-center">
                Address : Jagjeevanram Ward-17, Satna, Madhya Pradesh
            </div>

            {/* Line 4: Contact Info */}
            <div className="bg-gray-800 text-gray-100 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-center">
            | 📱 9893987075, 8871049844 | 📧 rkmemorialoc@gmail.com | 📸 Insta handle: @rkmemorial
            </div>
        </header>
    );
};

export default Header;
