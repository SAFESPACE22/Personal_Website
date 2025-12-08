
import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const StoryTelling = () => {
    const stories = [
        {
            year: "2019",
            title: "The Beginning",
            text: "I started my coding journey by automating spreadsheets with Python. That simple spark of automation hooked me instantly, and I knew this was what I wanted to do."
        },
        {
            year: "2021",
            title: "Diving Deeper",
            text: "I enrolled in a Computer Science degree and started building my first web applications. Learning React was a game-changer—it felt like building with digital Legos."
        },
        {
            year: "2023",
            title: "Professional Growth",
            text: "Joined my first major project team. I learned that writing code is easy, but writing maintainable, scalable code is the real challenge. I focused heavily on clean architecture."
        },
        {
            year: "Now",
            title: "Continuous Learning",
            text: "Currently exploring AI agents and modern web frameworks like Next.js 14. I'm obsessed with performance optimization and building silky-smooth user interfaces."
        }
    ];

    return (
        <section className="py-20 bg-obsidian text-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">

                    {/* Sticky Left Panel */}
                    <div className="md:w-1/3">
                        <div className="md:sticky md:top-32">
                            <h2 className="text-4xl font-bold text-white mb-6">My Journey</h2>
                            <p className="text-gray-400 mb-8">
                                From writing my first "Hello World" to deploying complex applications, here's a brief look at my path so far.
                            </p>
                            <div className="w-full h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                <span className="text-gray-600 font-bold">Journey Visual</span>
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Right Panel */}
                    <div className="md:w-2/3 space-y-16 pb-20">
                        {stories.map((item, index) => (
                            <RevealOnScroll key={index}>
                                <div className="group relative pl-8 border-l border-white/10 hover:border-white transition-colors duration-300">
                                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="text-sm font-mono text-gray-500 mb-2 block">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StoryTelling;
