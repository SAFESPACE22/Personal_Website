
import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const storyData = [
    {
        title: "The Beginning",
        text: "It all started with a curiosity for how things work on the web. I wrote my first line of HTML in 2018 and was instantly hooked by the ability to create something from nothing.",
    },
    {
        title: "The Growth",
        text: "I spent years mastering JavaScript and the React ecosystem. I built countless side projects, broke things, fixed them, and learned the importance of clean, maintainable code.",
    },
    {
        title: "The Professional Era",
        text: "Transitioning into professional development taught me about collaboration, agile methodologies, and the impact of performance optimization on user experience.",
    },
    {
        title: "The Future",
        text: "Now, I'm focused on building scalable applications and exploring new frontiers like AI integration and 3D web experiences.",
    }
];

const StoryTelling = () => {
    return (
        <section id="story" className="py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-6">
                {/* Mobile: Stacked, Desktop: Two columns */}
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Left Column: Sticky */}
                    <div className="md:w-1/2">
                        <div className="md:sticky md:top-32 md:h-[calc(100vh-200px)] flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-cyan-500 font-bold tracking-wider uppercase mb-4 block">My Journey</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital <br /> Narratives</h2>
                                <p className="text-slate-400 text-lg mb-8 max-w-md">
                                    Every line of code tells a story. Here's a glimpse into the chapters that define my career as a developer.
                                </p>
                                <div className="hidden md:block w-full h-64 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-2xl">
                                        VISUAL ASSET
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Scrollable Content */}
                    <div className="md:w-1/2 space-y-24 md:py-20 pb-20">
                        {storyData.map((item, index) => (
                            <RevealOnScroll key={index}>
                                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-mono border border-cyan-500/50">{index + 1}</span>
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">
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
