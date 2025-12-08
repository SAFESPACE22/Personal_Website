
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-obsidian relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Placeholder */}
                        <div className="w-64 h-64 shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-gray-500/10 dark:from-white/20 dark:to-gray-500/20 rounded-2xl rotate-6 opacity-50 blur-lg transition-colors"></div>
                            <div className="relative w-full h-full bg-gray-100 dark:bg-obsidian/50 rounded-2xl overflow-hidden border border-black/10 dark:border-white/20 flex items-center justify-center transition-colors">
                                <span className="text-gray-400 dark:text-gray-500 font-bold text-xl">IMG</span>
                                {/* Replace this div with actual <img> tag */}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3 transition-colors">
                                <span className="w-12 h-1 bg-black dark:bg-white rounded-full inline-block transition-colors"></span>
                                About Me
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 transition-colors">
                                I'm a passionate developer who loves turning complex problems into beautiful, simple interface designs. I started my journey in web development 5 years ago, and I have hands-on experience in building scaleable web applications.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                                When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming. I believe in continuous learning and always strive to improve my craft.
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default About;
