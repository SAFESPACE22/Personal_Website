
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase", "Python"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">The technologies and tools I stare at for 10+ hours a day.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
