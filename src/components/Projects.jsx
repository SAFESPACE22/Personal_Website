
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
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index}>
                            <div
                                className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 h-full"
                            >
                                <div className="h-48 bg-slate-700 flex items-center justify-center group-hover:bg-slate-750 transition-colors relative overflow-hidden">
                                    {/* Image Placeholder or Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                    <span className="text-slate-500 font-bold text-2xl z-10">PROJECT IMG</span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium text-slate-300 bg-slate-900 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.links.live} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
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
