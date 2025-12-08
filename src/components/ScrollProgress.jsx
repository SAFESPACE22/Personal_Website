
import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-[7.5%] left-0 w-full h-1 z-50">
            <div
                className="h-full bg-black dark:bg-white transition-all duration-150 ease-out origin-left"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
};
