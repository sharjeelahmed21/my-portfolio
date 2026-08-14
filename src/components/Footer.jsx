import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass border-t border-white/5 py-8 mt-auto relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold font-sans tracking-wider mb-2">
            SHARJEEL<span className="text-primary">.DEV</span>
          </span>
          <p className="text-sm text-gray-400">Full Stack Developer based in the Cloud</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/sharjeelahmed21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          &copy; {currentYear} Sharjeel Ahmed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
