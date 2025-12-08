
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="py-20 bg-obsidian relative">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Placeholder */}
                        <div className="w-64 h-64 shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-gray-500/20 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                            <div className="relative w-full h-full bg-obsidian/50 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center">
                                <span className="text-gray-500 font-bold text-xl">IMG</span>
                                {/* Replace this div with actual <img> tag */}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-12 h-1 bg-white rounded-full inline-block"></span>
                                About Me
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                I'm a passionate developer who loves turning complex problems into beautiful, simple interface designs. I started my journey in web development 5 years ago, and I have hands-on experience in building scaleable web applications.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
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
