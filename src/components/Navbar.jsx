// src/components/Navbar.jsx
import { NavLink } from "react-router-dom"; // if using react-router

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm py-3 px-4">
            <div className="container mx-auto flex justify-center">
                <div className="bg-primary text-white rounded-xl px-6 py-2 flex gap-6">
                    <NavLink to="/" className="hover:text-accent transition">Home</NavLink>
                    <NavLink to="/notices" className="hover:text-accent transition">Notices</NavLink>
                    <NavLink to="/admin-login" className="hover:text-accent transition">Admin Login</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

