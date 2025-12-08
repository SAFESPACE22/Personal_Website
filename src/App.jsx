
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StoryTelling from './components/StoryTelling';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
    return (
        <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Tyler Vuong. Built with React & Tailwind CSS.</p>
            </footer>
        </div>
    );
}

export default App;
