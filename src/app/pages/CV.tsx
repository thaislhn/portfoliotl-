import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function CV() {

  const CV_PDF_URL = '/cv-thais-lhocine..pdf';
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
      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        
        {/* En-tête avec nom et titre */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 pt-16"
        >
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light mb-4" style={{ marginLeft: 0, paddingLeft: 0, letterSpacing: '-0.01em' }}>
            Thaïs L'Hocine
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-6" style={{ marginLeft: 0, paddingLeft: 0 }}>Creative Developer & Designer</p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/60 text-sm">
            <a href="mailto:thais.lhocine@edu.gobelins.fr" className="hover:text-white transition-colors">
              thais.lhocine@edu.gobelins.fr
            </a>
            <span className="hidden md:inline">•</span>
            <span>07 68 86 76 87</span>
            <span className="hidden md:inline">•</span>
            <a href="www.linkedin.com/in/thaïs-l’hocine-795747280" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn: Thaïs L'Hocine
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href={CV_PDF_URL}
              download="CV_Thais_LHocine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <span>Télécharger le CV</span>
              <span className="inline-block group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Grid 2 colonnes sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Colonne principale - 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Qui je suis */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-white text-2xl md:text-3xl font-light mb-4 pb-2 border-b border-white/20">
                Qui je suis
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Bonjour ! Actuellement étudiante en DN MADE Design numérique (coder sa créativité) à Gobelins Paris, 
                je recherche une alternance dans le design graphique, code, UI/UX... afin de mettre en pratique 
                les compétences développées au cours de ma formation et poursuivre mon évolution professionnelle.
              </p>
            </motion.section>

            {/* Parcours */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-white text-2xl md:text-3xl font-light mb-6 pb-2 border-b border-white/20">
                Parcours
              </h2>
              
              <div className="space-y-6">
                {/* DN MADE */}
                <div className="border-l-2 border-white/30 pl-6 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-light">DN MADE mention numérique</h3>
                    <span className="text-white/50 text-sm whitespace-nowrap ml-4">2024 - 2027</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">Gobelins Paris</p>
                  <ul className="text-white/70 text-sm space-y-1 ml-4 list-disc">
                    <li>Formation en design interactif et développement web (HTML, CSS, JavaScript, Vue.js, Vite, React)</li>
                    <li>Projets collaboratifs en UI/UX, prototypage, 3D et graphisme</li>
                    <li>Apprentissage par projets et workshops pratiques</li>
                  </ul>
                </div>

                {/* Bac STMG */}
                <div className="border-l-2 border-white/30 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-light">Baccalauréat STMG Marketing</h3>
                    <span className="text-white/50 text-sm whitespace-nowrap ml-4">2021 - 2024</span>
                  </div>
                  <p className="text-white/60 text-sm">Lycée Les bourdonnières Nantes</p>
                </div>
              </div>
            </motion.section>

            {/* Expériences */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-white text-2xl md:text-3xl font-light mb-6 pb-2 border-b border-white/20">
                Expériences
              </h2>
              
              <div className="space-y-8">
                {/* DA Junior */}
                <div className="border-l-2 border-white/30 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-light">DA Junior</h3>
                    <span className="text-white/50 text-sm whitespace-nowrap ml-4">nov - maintenant</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">MerciBeau.cul</p>
                  <ul className="text-white/70 text-sm space-y-1 ml-4 list-disc">
                    <li>Newsletters &amp; flyers &gt; Refonte</li>
                    <li>Mise à jour site web</li>
                    <li>Retouche et post-production (photo &amp; vidéo)</li>
                  </ul>
                </div>

                {/* Bénévole */}
                <div className="border-l-2 border-white/30 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-light">Bénévole Programme Maison - Article</h3>
                    <span className="text-white/50 text-sm whitespace-nowrap ml-4">2024 - maintenant</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Participation à un projet collaboratif visant à favoriser l'insertion des étudiants
                  </p>
                </div>

                {/* Responsable comm */}
                <div className="border-l-2 border-white/30 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-light">Responsable communication Entreprise familiale</h3>
                    <span className="text-white/50 text-sm whitespace-nowrap ml-4">2022 - 2024</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">Nantes (44)</p>
                  <ul className="text-white/70 text-sm space-y-1 ml-4 list-disc">
                    <li>Création et alimentation du site web</li>
                    <li>Gestion des réseaux sociaux</li>
                    <li>Prise de photos, vidéos</li>
                    <li>Gestion des réseaux sociaux</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="space-y-8">
            
            {/* Compétences */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-white text-xl md:text-2xl font-light mb-4 pb-2 border-b border-white/20">
                Compétences
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white/90 text-sm font-light mb-2">Design UI/UX</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Figma</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Illustrator</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Photoshop</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-white/90 text-sm font-light mb-2">Mise en page</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Typographie</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">InDesign</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-white/90 text-sm font-light mb-2">3D & Motion</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">After Effect</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Blender</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Three.js</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-white/90 text-sm font-light mb-2">Développement</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">HTML</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">CSS</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Brevo</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-white/90 text-sm font-light mb-2">Autres</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Retouche photo/vidéo</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Marketing</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Communication</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">WordPress</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Langues */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-white text-xl md:text-2xl font-light mb-4 pb-2 border-b border-white/20">
                Langues
              </h2>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex justify-between">
                  <span>Anglais</span>
                  <span className="text-white/50">Courant</span>
                </div>
                <div className="flex justify-between">
                  <span>Français</span>
                  <span className="text-white/50">Natal</span>
                </div>
              </div>
            </motion.section>

            {/* Intérêts */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="text-white text-xl md:text-2xl font-light mb-4 pb-2 border-b border-white/20">
                Intérêts
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Pop culture</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Musique</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Exposition</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Photographie</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Voyages</span>
              </div>
            </motion.section>

            {/* Call to action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-6 border-t border-white/20"
            >
              <p className="text-white/70 text-sm mb-4">
                Découvrez mon portfolio !
              </p>
              <a 
                href="/"
                className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm backdrop-blur-sm"
              >
                thais-lhocine.fr
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer avec statut */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/20 flex items-center justify-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-white/70 text-sm">En recherche d'alternance • Mars 2026</p>
        </motion.div>
      </div>
    </div>
  );
}