import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const getActiveLink = () => {
    if (location.pathname === '/') return 'index';
    if (location.pathname === '/about') return 'about';
    if (location.pathname === '/cv') return 'cv';
    return null;
  };

  const activeLink = getActiveLink();
  const isSecondaryPage = location.pathname === '/about' || location.pathname === '/cv';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 text-white"
      style={{ fontFamily: "'Neue Haas Grotesk Display Pro'" }}
    >
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="block group">
            {/* 📝 NOM — petit, raffiné, uppercase */}
            <span className="block text-[11px] tracking-[0.22em] uppercase text-white transition-opacity duration-200 group-hover:opacity-60">
              Thais L'Hocine
            </span>
            {/* 📝 SOUS-TITRE — très petit, discret */}
            <span className={`block text-[10px] tracking-[0.15em] text-white/35 transition-opacity duration-200 group-hover:text-white/50 ${isSecondaryPage ? 'invisible' : ''}`}>
              Interaction Designer & Developer
            </span>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* 📝 NAVIGATION — petite, précise */}
          <ul className="flex gap-8 text-[11px] tracking-[0.18em] uppercase">
            {(['index', 'about', 'cv'] as const).map((key) => {
              const to = key === 'index' ? '/' : `/${key}`;
              const label = key === 'index' ? 'Index' : key === 'about' ? 'About' : 'CV';
              return (
                <li key={key}>
                  <Link
                    to={to}
                    className={`relative transition-opacity duration-200 ${
                      activeLink === key ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                    }`}
                    onMouseEnter={() => setHoveredLink(key)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {label}
                    {activeLink === key && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-white/70"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}