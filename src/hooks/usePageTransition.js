import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Handle initial page load
        if (isInitialLoad) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setIsInitialLoad(false);
            }, 1000); // Total transition time

            return () => clearTimeout(timer);
        }

        // Handle route changes
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname, isInitialLoad]);

    return { isTransitioning, isInitialLoad };
};
