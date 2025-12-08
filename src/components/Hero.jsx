
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Hero = () => {
    const [offset, setOffset] = useState(0);
    const el = useRef(null);

    // Parallax Effect
    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.scrollY * 0.5);
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typed.js Effect
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer!", "Student!", "Data Scientist!"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Parallax Layer */}
            <div
                className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl z-0 pointer-events-none"
                style={{ transform: `translate(-50%, ${offset}px)` }}
            />

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gray-400 font-medium tracking-wider mb-4 block">HELLO, I'M</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Tyler Vuong
                    </h1>

                    <div className="text-2xl md:text-4xl font-bold text-white mb-6 h-[40px]">
                        I'm a <span className="text-white border-b-2 border-white" ref={el}></span>
                    </div>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Building digital experiences with <span className="text-white font-bold border-b border-white/50 pb-1">Code & Creativity</span>.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="group bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer"
                        >
                            View Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <a
                            href="#"
                            className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all flex items-center gap-2 font-medium"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <Link to="about" smooth={true} duration={500} offset={-70} className="text-gray-500 hover:text-white cursor-pointer">
                    <span className="sr-only">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
