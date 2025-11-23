import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionProps } from '../../types';

export const Home: React.FC<SectionProps> = ({ x }) => {
  const parallaxText = useTransform(x, [0, -1000], [0, -200]);

  return (
    <section className="w-full h-full flex flex-col justify-center md:justify-end p-8 md:p-20 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-12 right-12 opacity-10 hidden md:block">
        <span className="font-display font-bold text-6xl">24-25</span>
      </div>

      {/* Main Content - Pushed down and smaller */}
      <div className="flex-1 flex items-center md:items-end pb-20 md:pb-32">
        <div className="max-w-[90vw] md:max-w-[80vw] z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[10vw] md:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tight text-black font-medium"
          >
            Award-winning <br />
            <span className="ml-[5vw] md:ml-[8vw] block font-normal text-gray-400 mix-blend-difference">design boutique</span>
            <span className="block text-right mr-[5vw]">agency</span>
          </motion.h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between w-full border-t border-black pt-8 absolute bottom-8 left-0 px-8 md:px-20">
         <div className="flex gap-12 text-xs md:text-sm font-mono uppercase tracking-widest text-gray-500">
            <span>Based in Digital Space</span>
            <span>Est. 2024</span>
         </div>

         <div className="flex items-center gap-4 mt-8 md:mt-0 group cursor-pointer">
            <span className="font-display text-lg uppercase font-bold group-hover:mr-4 transition-all duration-300">Scroll for more</span>
            <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>
         </div>
      </div>
    </section>
  );
};