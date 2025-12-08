
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase", "Python"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-obsidian transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 transition-colors">Technical Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">The technologies and tools I stare at for 10+ hours a day.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-gray-50 dark:bg-obsidian/50 p-8 rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/50 transition-colors shadow-sm dark:shadow-none"
                        >
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6 transition-colors">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white transition-colors cursor-default border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none"
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
