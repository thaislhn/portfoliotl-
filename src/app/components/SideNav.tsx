import { motion } from 'motion/react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

interface SideNavProps {
  projects: Project[];
  activeIndex: number;
}

export function SideNav({ projects, activeIndex }: SideNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-7 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {projects.map((project, index) => (
        <motion.button
          key={project.id}
          className="group relative flex items-center justify-end"
          whileHover={{ scale: 1.3, x: -3 }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        >
          {/* Dot indicator — petit et précis */}
          <motion.div
            className="w-1 h-1 rounded-full border border-white/50 transition-all duration-300"
            animate={{
              scale: index === activeIndex ? 1.6 : 1,
              backgroundColor:
                index === activeIndex
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(255, 255, 255, 0)',
              borderColor:
                index === activeIndex
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(255, 255, 255, 0.35)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          />

          {/* Tooltip on hover — éditorial */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-5 px-3 py-2 bg-black/80 backdrop-blur-sm border border-white/10 whitespace-nowrap pointer-events-none"
          >
            <span className="block text-[10px] tracking-[0.15em] uppercase text-white/80">{project.title}</span>
            <span className="block text-[9px] text-white/35 mt-0.5">{project.category}</span>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black/80 border-r border-t border-white/10 transform rotate-45" />
          </motion.div>
        </motion.button>
      ))}
    </motion.div>
  );
}