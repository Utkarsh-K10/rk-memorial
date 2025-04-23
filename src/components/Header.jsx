import React from 'react';
import logo from '/logo.png'; // Make sure to place your logo image in the correct path


const Header = () => {
    return (
        <header className="w-full font-sans sticky top-0 z-50 shadow-md">
            {/* Line 1: Logo + School Name + Tagline + Affiliation */}
            <div className="bg-sky-500 text-white flex flex-col sm:flex-row items-center sm:items-start justify-center px-2 sm:px-5 py-2 sm:py-3 gap-1 sm:gap-4 text-center sm:text-left">
                {/* Logo */}
                <img
                    src={logo}
                    alt="School Logo"
                    className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
                />

                {/* Name + Tagline + Affiliation */}
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <h1 className="font-cinzel text-[15px] sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap xs:text-3xl">
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

            {/* Line 3: Address */}
            <div className="bg-pink-500/50 backdrop-blur-md text-white px-4 sm:px-2 py-1 sm:py-1 text-center text-xs sm:text-base md:text-base font-semibold">
                Address: Jagjeevanram Ward-17, Satna, Madhya Pradesh
            </div>
        </header>
    );
};

export default Header;
