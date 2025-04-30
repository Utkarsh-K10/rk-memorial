import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const storedAdmin = localStorage.getItem('admindata');
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
    }, []);

    useEffect(() => {
        if (admin) {
            localStorage.setItem('admindata', JSON.stringify(admin));
        } else {
            localStorage.removeItem('admindata');
        }
    }, [admin]);

    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
}
