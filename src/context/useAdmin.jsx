import { useContext } from 'react';
import { AdminContext } from './AdminContext'; // path relative

export function useAdmin() {
    return useContext(AdminContext);
}
