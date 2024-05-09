import { useEffect } from 'react';

export const Notfound = () => {
    useEffect(() => {
        document.location = '/';
    }, []);
    return null;
};
