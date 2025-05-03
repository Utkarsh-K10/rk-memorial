import { useContext } from 'react';
import { AdminContext } from './AdminContext.jsx'; // path relative

export function useAdmin() {
    return useContext(AdminContext);
}
