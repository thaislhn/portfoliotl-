import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <CustomCursor />

      {/* ── BACKGROUND ─────────────────────────────────────────────── */}
      {/* Dégradé teal de base - teal verdâtre profond (gauche) vers teal clair (milieu/droite) */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ 
          background: 'linear-gradient(to right, #0a2e2e 0%, #0d3838 15%, #124242 30%, #1a4d4d 50%, #226060 70%, #2d7171 85%, #387d7d 100%)' 
        }} 
      />
      
      {/* Très grande lueur radiale douce sur le côté droit - effet brouillard cyan pâle */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ 
          background: 'radial-gradient(ellipse 1400px 1200px at 95% 50%, rgba(138, 218, 219, 0.35), rgba(100, 200, 205, 0.15) 40%, transparent 70%)' 
        }} 
      />
      
      {/* Lueur secondaire pour renforcer l'atmosphère sur la droite */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ 
          background: 'radial-gradient(circle 1000px at 100% 30%, rgba(180, 235, 240, 0.12), transparent 60%)' 
        }} 
      />
      
      {/* Overlay très subtil pour texture minimaliste */}
      <div 
        className="fixed inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)', 
          mixBlendMode: 'overlay' 
        }} 
      />

      <Header />

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="w-full max-w-6xl">
          
          {/* Layout responsive : colonne sur mobile, ligne sur desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Colonne gauche : Informations */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8"
            >
              {/* Nom */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-white text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4"
                >
                  Thaïs L'Hocine
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-white/60 text-base md:text-lg"
                >
                  Designer & Developer
                </motion.p>
              </div>

              {/* Bio / Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Étudiante en design numérique spécialité code à Gobelins Paris, 
                  je suis à la recherche d'une alternance dès mars 2026.
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Contact</p>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:thais.lhocine@edu.gobelins.fr"
                  className="inline-block text-white text-lg md:text-xl hover:text-white/80 transition-colors duration-300 relative group"
                >
                  thais.lhocine@edu.gobelins.fr
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/60 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              </motion.div>

              {/* Liens sociaux */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <motion.a
                  whileHover={{ y: -2 }}
                  href="/cv-thais-lhocine.pdf"
                  download
                  className="group flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base transition-all duration-300"
                >
                  <span className="relative">
                    CV
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-xs opacity-60">↗</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://linkedin.com/in/thaislhocine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base transition-all duration-300"
                >
                  <span className="relative">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-xs opacity-60">↗</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://instagram.com/thais.lhocine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base transition-all duration-300"
                >
                  <span className="relative">
                    Instagram
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-xs opacity-60">↗</span>
                </motion.a>
              </motion.div>

              {/* Statut */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-white/70 text-sm">En recherche d'alternance • Mars 2026</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne droite : Photo de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-2xl shadow-2xl">
                {/* Image */}
                <img
                  src="https://res.cloudinary.com/diai5g2u8/image/upload/v1773156065/Sans_titre_1_tnxngt.png"
                  alt="Thaïs L'Hocine"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Élément décoratif */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border border-white/20 rounded-full blur-sm"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
