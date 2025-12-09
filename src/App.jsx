
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StoryTelling from './components/StoryTelling';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-white dark:bg-obsidian text-gray-900 dark:text-gray-100 min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
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

            <footer className="bg-white dark:bg-obsidian py-8 text-center text-gray-600 dark:text-gray-500 text-sm transition-colors duration-300">
                <p>© {new Date().getFullYear()} Tyler J. Vuong.</p>
            </footer>
        </div>
    );
}

export default App;
