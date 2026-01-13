
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Music, PauseCircle } from 'lucide-react';
import BackgroundMusic from '../Assets/Emotional Piano for the Soul (Inspirational Background Music).mp3';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ScrollProgress } from './ScrollProgress';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    const audioRef = React.useRef(new Audio(BackgroundMusic));
    const [isPlaying, setIsPlaying] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlaying]);

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    const handleWelcome = () => {
        setShowWelcome(false);
        setIsPlaying(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-obsidian/90 backdrop-blur-md shadow-lg py-4 border-b border-black/10 dark:border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold text-black dark:text-white cursor-pointer tracking-tighter"
                >
                    TV
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="font-bold text-black dark:text-white"
                            offset={-70}
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name.toUpperCase()}
                        </Link>
                    ))}

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={toggleMusic}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Toggle Music"
                    >
                        {isPlaying ? <PauseCircle size={20} /> : <Music size={20} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>

                    <button
                        onClick={toggleMusic}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Toggle Music"
                    >
                        {isPlaying ? <PauseCircle size={24} /> : <Music size={24} />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-obsidian/95 backdrop-blur-md overflow-hidden border-b border-black/10 dark:border-white/10"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-lg font-medium cursor-pointer"
                                    activeClass="font-bold text-black dark:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <ScrollProgress />

            {/* Welcome Modal */}
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-obsidian border border-white/10 p-8 md:p-12 rounded-2xl max-w-2xl text-center shadow-2xl"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                                Welcome To My Website!
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed italic">
                                All hard work brings a profit, but mere talk leads only to poverty.
                            </p>
                            <button
                                onClick={handleWelcome}
                                className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
                            >
                                Enter
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
