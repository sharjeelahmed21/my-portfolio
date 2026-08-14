import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 mt-20 md:mt-0"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border-primary/30 text-primary mb-6 text-sm font-medium">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Sharjeel Ahmed</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
            Full Stack Developer
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Building modern, responsive and scalable web applications with React, Node.js and modern web technologies. I turn complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#projects" className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass glass-hover text-white rounded-lg font-medium transition-all text-center border border-white/10">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/sharjeelahmed21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 glass glass-hover rounded-full">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors p-3 glass glass-hover rounded-full">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene Container */}
      <Scene3D />
    </section>
  );
}
