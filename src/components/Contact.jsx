import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    // Simulate sending
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Have a question or want to work together? Drop me a message.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="p-4 bg-primary/20 text-primary rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400 text-sm">sharjeeljutt115@gmail.com</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-secondary/50 transition-colors">
              <div className="p-4 bg-secondary/20 text-secondary rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-400 text-sm">Remote / Open to Relocation</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="p-4 bg-primary/20 text-primary rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-400 text-sm">Available on request</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              {status && (
                <p className={`text-sm ${status.includes('successfully') ? 'text-secondary' : 'text-red-400'}`}>
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full md:w-auto md:ml-auto"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
