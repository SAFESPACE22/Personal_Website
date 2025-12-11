
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import tiktok from '../Assets/images/tiktok.png';
import Diamond from '../Assets/images/Diamond.png';
import cook from '../Assets/images/Cook.jpg';

const projects = [
    {
        title: "Automated Social Media Scrolling",
        description: "Developed a hands-free application utilizing computer vision and person tracking for automated social media scrolling. Reduced the need to hold a mobile device by 100% to binge watch scrolling social media platforms.",
        tech: ["Mediapipe", "OpenCV", "RaspberryPI", "PyAutoGui", "PyTorch"],
        links: { github: "https://github.com/SAFESPACE22", live: "https://safespace22.github.io" }
    },
    {
        title: "I-CCEW Safety Application",
        description: "Cross-platform safety application for lone workers that successfully reduced the time to alert emergency responders by 50%.",
        tech: ["Dart", "Firebase"],
        links: { github: "https://github.com/SAFESPACE22", live: "https://safespace22.github.io" }
    },
    {
        title: "CAD Automation Tool",
        description: "Automation tool that reduced image export processing time by 96% across 300K+ CAD files at Textron Inc.",
        tech: ["C/C++", "Fortran", "Shell", "Unix/Linux"],
        links: { github: "https://github.com/SAFESPACE22", live: "https://safespace22.github.io" }
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
                                            src={Diamond}
                                            alt="Diamond project"
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
