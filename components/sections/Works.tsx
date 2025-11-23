import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Project, SectionProps } from '../../types';

const projects: Project[] = [
    { id: 1, title: 'Nebula', category: 'Web Design', imageUrl: 'https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&w=2000&auto=format&fit=crop', year: '2023' },
    { id: 2, title: 'Mono', category: 'Branding', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop', year: '2023' },
    { id: 3, title: 'Flux', category: 'App Design', imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop', year: '2022' },
    { id: 4, title: 'Apex', category: 'Development', imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop', year: '2022' },
];

export const Works: React.FC<SectionProps> = ({ x }) => {
  return (
    <section className="w-full h-full bg-white flex items-center relative pl-20 border-l border-gray-100">
      
      {/* Intro Text */}
      <div className="flex-shrink-0 w-[500px] h-full flex flex-col justify-center pr-24 z-10 bg-white">
         <div className="mb-12">
             <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 block">Selected Projects</span>
             <h2 className="font-display text-[7rem] font-bold uppercase leading-[0.85] tracking-tight mb-8">
                Work <br/>
                <span className="text-outline text-transparent stroke-black ml-12" style={{ WebkitTextStroke: '2px black' }}>(0{projects.length})</span>
             </h2>
             <p className="text-gray-600 text-xl font-light max-w-sm leading-relaxed">
                A curation of digital products that define brands and drive engagement.
             </p>
         </div>
         <div className="flex gap-4">
             <button className="px-8 py-4 border border-black uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-colors">View Archive</button>
         </div>
      </div>

      {/* Projects Horizontal List */}
      <div className="flex items-center gap-12 h-full py-20">
         {projects.map((project, index) => (
             <WorkItem key={project.id} project={project} index={index} />
         ))}
         
         <div className="w-[20vw]"></div> {/* Spacer at end */}
      </div>
    </section>
  );
};

const WorkItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const isEven = index % 2 === 0;
    
    return (
        <motion.div 
            className={`relative flex-shrink-0 w-[45vw] md:w-[35vw] group cursor-pointer ${isEven ? 'self-start mt-12' : 'self-end mb-12'}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-10%" }}
        >
            <div className="w-full aspect-[4/5] overflow-hidden relative mb-6">
                <motion.img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            
            <div className="flex justify-between items-start border-t border-black pt-4">
                <div>
                    <h3 className="font-display text-4xl font-bold uppercase mb-1">{project.title}</h3>
                    <span className="text-sm font-mono text-gray-500">{project.category}</span>
                </div>
                <span className="font-mono text-sm border border-black rounded-full px-3 py-1">{project.year}</span>
            </div>
        </motion.div>
    );
}