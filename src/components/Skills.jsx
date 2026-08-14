import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { skillCategories } from '../personalData';
import { Code, Database, Layout, Terminal } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiCplusplus,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiLinux,
} from 'react-icons/si';

const iconMap = {
  Code,
  Database,
  Layout,
  Terminal,
};

const techShowcase = [
  // Languages
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'SQL', icon: Database, color: '#4479A1' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },

  // Frontend
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },

  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'REST API', icon: Terminal, color: '#ffffff' },

  // Databases
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },

  // Tools & Platforms
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'VS Code', icon: Terminal, color: '#007ACC' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
];

const TechIconItem = ({ tech }) => {
  const [hovered, setHovered] = useState(false);
  const TechIcon = tech.icon;
  return (
    <div
      className="group relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] cursor-pointer">
        <TechIcon
          className="text-[22px] sm:text-[28px]"
          style={{
            color: hovered ? tech.color : '#4b5563',
            transition: 'color 0.3s ease',
          }}
        />
      </div>
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#111] px-3 py-1.5 opacity-0 -translate-y-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1 whitespace-nowrap z-10">
        <TechIcon size={12} style={{ color: tech.color }} />
        <span className="text-xs text-white font-medium">{tech.name}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="skills" className="pt-36 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            My Skills
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </Motion.div>

        <Motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <Motion.div
                key={index}
                variants={item}
                className="group border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/10 text-gray-400 text-sm rounded-full font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <p className="mb-6 text-md uppercase tracking-[0.2em] text-gray-500">
            Technologies I work with
          </p>
          <div className="grid grid-cols-8 grid-rows-3 gap-x-2 gap-y-4 md:grid-cols-12 md:grid-rows-2 md:gap-4">
            {techShowcase.map((tech) => (
              <TechIconItem key={tech.name} tech={tech} />
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
