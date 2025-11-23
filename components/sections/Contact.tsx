import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import { SectionProps } from '../../types';

export const Contact: React.FC<SectionProps> = ({ x }) => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-white text-black px-8 md:px-0 relative overflow-hidden">
        {/* Background typographic texture */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-[0.03] pointer-events-none select-none overflow-hidden">
             <motion.div 
                animate={{ x: [0, -100, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap"
             >
                <span className="text-[25vh] font-display font-black leading-none">SAY HELLO SAY HELLO SAY HELLO</span>
             </motion.div>
             <motion.div 
                animate={{ x: [-100, 0, -100] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap self-end"
             >
                <span className="text-[25vh] font-display font-black leading-none">GET IN TOUCH GET IN TOUCH</span>
             </motion.div>
        </div>

      <div className="max-w-5xl w-full text-center z-10 flex flex-col items-center">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
        >
             <h2 className="font-display text-6xl md:text-9xl font-bold mb-4 uppercase tracking-tighter">
                Let's Make
            </h2>
            <div className="relative inline-block">
                <span className="font-cursive text-7xl md:text-[12rem] text-black normal-case block transform -rotate-6 z-10 relative">
                    magic
                </span>
                <span className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-sm pointer-events-none">
                    TOGETHER
                </span>
            </div>
        </motion.div>
            
        <p className="text-gray-600 text-lg md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Got a project in mind? Or just want to say hi? We are always open to new ideas and collaborations.
        </p>

        <a 
            href="mailto:hello@noobies.design" 
            className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden border-2 border-black rounded-full transition-all duration-300 bg-white hover:bg-black"
        >
            <span className="relative z-10 text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-black group-hover:text-white transition-colors duration-300">
                hello@noobies.design
            </span>
        </a>

        <div className="flex justify-center gap-12 mt-20">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="text-black hover:scale-125 transition-transform duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                </a>
            ))}
        </div>
        
        <footer className="absolute bottom-8 w-full text-center">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
                &copy; {new Date().getFullYear()} Noobies Design
            </span>
        </footer>
      </div>
    </section>
  );
};