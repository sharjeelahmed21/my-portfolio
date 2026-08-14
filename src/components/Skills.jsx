import React from 'react';
import { motion } from 'framer-motion';
import FloatingSkills from './FloatingSkills';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'Git', 'GitHub', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <FloatingSkills />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Tech <span className="text-secondary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Technologies I use to build scalable and responsive applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border-t-4 border-t-primary hover:border-t-secondary transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary hover:bg-primary/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
