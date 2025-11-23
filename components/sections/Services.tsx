import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionProps } from '../../types';

const services = [
    { id: '01', title: 'UX/UI Design', description: 'Transform complex data into intuitive, visually refined dashboards.' },
    { id: '02', title: 'Dashboard Design', description: 'Built to decode complexity, our dashboards transform data into elegance.' },
    { id: '03', title: 'Web & App Design', description: 'Crafted for clarity and growth, our web experiences engage seamlessly.' },
    { id: '04', title: 'Brand Identity', description: 'From strategy to visual identity, we build scalable brands across every touchpoint.' },
];

export const Services: React.FC<SectionProps> = ({ x }) => {
  return (
    <section className="w-full h-full bg-white flex items-center border-l border-gray-100 overflow-hidden">
      
      {/* Horizontal List Container */}
      <div className="flex h-full w-full">
          {services.map((service, index) => (
              <div 
                key={service.id} 
                className="flex-1 h-full border-r border-gray-200 min-w-[30vw] md:min-w-[25vw] flex flex-col justify-between p-8 md:p-16 group hover:bg-neutral-50 transition-colors duration-500 relative"
              >
                  {/* Header - Pushed down with margin-top */}
                  <div className="w-full flex justify-between items-start border-b border-gray-200 pb-8 mt-16 md:mt-24">
                      <div className="flex flex-col">
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Service</span>
                        <div className="overflow-hidden">
                            <motion.h3 
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="font-display text-3xl md:text-5xl font-medium leading-tight"
                            >
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </motion.h3>
                        </div>
                      </div>
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Body - Giant Number */}
                  <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-[12rem] md:text-[18rem] font-bold text-black leading-none tracking-tighter mix-blend-overlay opacity-90"
                      >
                        {index + 1}
                      </motion.span>
                  </div>

                  {/* Footer Description */}
                  <div>
                      <p className="text-gray-600 font-light leading-relaxed text-lg max-w-xs">
                          {service.description}
                      </p>
                  </div>
              </div>
          ))}
      </div>
    </section>
  );
};