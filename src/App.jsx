
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
        <div className="bg-obsidian min-h-screen text-gray-100 selection:bg-white selection:text-black">
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <About />
                <StoryTelling />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <footer className="bg-obsidian py-8 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Tyler J. Vuong.</p>
            </footer>
        </div>
    );
}

export default App;
