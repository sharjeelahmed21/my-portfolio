import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Layout } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <Code size={24} />, title: 'Frontend', desc: 'Crafting responsive, interactive UIs with React and modern CSS.' },
    { icon: <Database size={24} />, title: 'Backend', desc: 'Building robust APIs and server logic with Node.js and Express.' },
    { icon: <Layout size={24} />, title: 'UI/UX', desc: 'Designing intuitive user experiences and sleek modern interfaces.' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans"><span className="text-primary">About</span> Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <User size={28} />
                </div>
                <h3 className="text-2xl font-bold">Who am I?</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm Sharjeel Ahmed, a dedicated BSCS student and an aspiring Full Stack Developer with a strong passion for building innovative and impactful web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology is driven by a constant desire to learn and adapt to modern web standards. Whether it's designing a seamless user interface or structuring a robust database, I thrive on the challenges of bringing ideas to life through clean, scalable code.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className={`glass p-6 rounded-xl glass-hover group ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-secondary mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
