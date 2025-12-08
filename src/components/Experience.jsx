
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2023 - Present",
        role: "Senior Frontend Engineer",
        company: "Tech Corp",
        description: "Leading the frontend team in rebuilding the core platform using React and Next.js."
    },
    {
        year: "2021 - 2023",
        role: "Full Stack Developer",
        company: "Startup Inc",
        description: "Built and scaled the MVP from 0 to 10k users. Implemented real-time features using WebSockets."
    },
    {
        year: "2019 - 2021",
        role: "Junior Web Developer",
        company: "Agency Studio",
        description: "Collaborated with designers to implement pixel-perfect landing pages for various clients."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-800/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Work Experience</h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-cyan-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between mb-2 sm:mb-4">
                                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                                    <span className="text-cyan-400 text-sm font-mono">{exp.year}</span>
                                </div>
                                <div className="text-slate-500 font-medium mb-4">{exp.company}</div>
                                <p className="text-slate-400 text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
