
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

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
        <section id="projects" className="py-20 bg-obsidian">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index}>
                            <div
                                className="group bg-obsidian/50 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5 h-full"
                            >
                                <div className="h-48 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors relative overflow-hidden">
                                    {/* Image Placeholder or Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60"></div>
                                    <span className="text-gray-500 font-bold text-2xl z-10">PROJECT IMG</span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.links.live} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
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
