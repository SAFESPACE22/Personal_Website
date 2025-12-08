
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase", "Python"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-obsidian">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The technologies and tools I stare at for 10+ hours a day.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-obsidian/50 p-8 rounded-2xl border border-white/10 hover:border-white/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default border border-white/5"
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
