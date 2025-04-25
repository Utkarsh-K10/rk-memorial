// src/components/Navbar.jsx
import { NavLink } from "react-router-dom"; // if using react-router

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm py-3 px-4 sticky top-34 z-50 rounded-lg shadow-md w-4/5 sm:w-3/4 mx-auto gap-4">
            <div className="container mx-auto flex justify-center items-center ">
                <div className="bg-pink-200 text-white rounded-xl px-6 py-2 flex gap-4 items-center sm:text-xs text-sm font-semibold text-sm">  
                    <NavLink to="/" className="hover:text-accent transition">Home</NavLink>
                    <NavLink to="/notices" className="hover:text-accent transition">Notices</NavLink>
                    <NavLink to="/admin-login" className="hover:text-accent transition">Admin Login</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

