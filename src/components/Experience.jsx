
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "Aug 2025 - Present",
        role: "Team Lead Software Developer",
        company: "I-CCEW (Oklahoma's Largest Innovation Consultant)",
        description: "Led a 5-member developer team to deliver a consulting-strategy automation tool using Dart and Firebase, reducing consulting load by 70%. Applied agile practices, taught Git for version control, and bridged communication between business teams, clients, and developers."
    },
    {
        year: "Jun 2025 - Aug 2025",
        role: "Software Developer",
        company: "Textron Inc. (Fortune 500)",
        description: "Developed and deployed an automation tool that reduced image export processing time by 96% across 300K+ CAD files. Enhanced automation with a wrapper script to batch process 332,591 .cdd files, ultimately decommissioning a CAD license and eliminating future technical debt."
    },
    {
        year: "Jan 2025 - May 2025",
        role: "Software Developer",
        company: "I-CCEW",
        description: "Engineered and deployed a cross-platform safety application for lone workers that reduced time to alert emergency responders by 50%. Collaborated with developers to align technical goals with business objectives in bi-weekly sprints."
    },
    {
        year: "Aug 2025 - Present",
        role: "Executive Board of Strategy and Technology",
        company: "The Big Event (8K+ Volunteers)",
        description: "Directed promotional activities and managed logistics for 8K+ annual volunteers dedicated to community service projects. Built an application prototype to manage volunteers and their data for the University of Oklahoma's largest volunteering event."
    },
    {
        year: "Aug 2024 - Present",
        role: "Shift Lead",
        company: "Tamashii Inc. (Best Ramen Restaurant)",
        description: "Delegated responsibilities and monitored task completion to optimize team performance of 10 servers. Trained and mentored new hires, administering onboarding evaluations and performance feedback."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-obsidian transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 transition-colors">Work Experience</h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/20 dark:before:via-white/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-obsidian group-hover:border-black dark:group-hover:border-white transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                                <div className="w-3 h-3 bg-black dark:bg-white rounded-full transition-colors"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 dark:bg-obsidian/50 border border-black/10 dark:border-white/10 rounded-xl shadow-sm hover:border-black/30 dark:hover:border-white/30 transition-all">
                                <div className="flex flex-col sm:flex-row justify-between mb-2 sm:mb-4">
                                    <h3 className="font-bold text-lg text-black dark:text-white transition-colors">{exp.role}</h3>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm font-mono transition-colors">{exp.year}</span>
                                </div>
                                <div className="text-gray-500 font-medium mb-4">{exp.company}</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
