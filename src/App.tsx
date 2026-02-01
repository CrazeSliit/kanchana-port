import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>);

}