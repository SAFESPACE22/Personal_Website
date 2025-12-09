
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import tiktok from '../Assets/images/tiktok.png';
import diamond from '../Assets/images/diamond.png';
import cook from '../Assets/images/Cook.jpg';

const projects = [
    {
        title: "Project Alpha",
        description: "A full-stack e-commerce platform with real-time inventory management.",
        tech: ["React", "Node.js", "MongoDB"],
        links: { github: "#", live: "#" }
    },
    {
        title: "Beta App",
        description: "Social media dashboard for analytics and content scheduling.",
        tech: ["Vue.js", "Firebase", "Tailwind"],
        links: { github: "#", live: "#" }
    },
    {
        title: "Gamma Tools",
        description: "CLI tool for automating developer workflows.",
        tech: ["Rust", "Clap"],
        links: { github: "#", live: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-obsidian transition-colors duration-300">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 transition-colors">Featured Projects</h2>
                        <div className="w-20 h-1 bg-black dark:bg-white rounded-full transition-colors"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index}>
                            <div
                                className="group bg-gray-50 dark:bg-obsidian/50 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 h-full"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                    {index === 0 && (
                                        <img
                                            src={tiktok}
                                            alt="TikTok project"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    )}
                                    {index === 1 && (
                                        <img
                                            src={diamond}
                                            alt="diamond project"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    )}
                                    {index === 2 && (
                                        <img
                                            src={cook}
                                            alt="cook project"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-1 rounded transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.links.live} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
