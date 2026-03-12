import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';
import { CustomCursor } from '../components/CustomCursor';

// ── Figma assets — remplacés par URLs Cloudinary pour compatibilité VS Code ──
// 📝 Remplace ces URLs par tes vraies images de moodboard si tu les as uploadées
const imgMoodboard1 = 'https://res.cloudinary.com/diai5g2u8/image/upload/v1773148793/6a6436c569f0a9ed489429bd96e28f92_cvlblv.jpg';
const imgMoodboard2 = 'https://res.cloudinary.com/diai5g2u8/image/upload/v1773148792/19ed24eaf9a7ff01488392fa917915a2_rkdbwz.jpg';

// ────────────────────────────────────────────────────────────────────────────
// 📝 DONNÉES PROJETS — Modifier ici pour changer textes, images, etc.
// ────────────────────────────────────────────────────────────────────────────
const projectsData = {

  // ── BNF ─────────────────────────────────────────────────────────────────
  bnf: {
    title: 'BNF',
    subtitle: 'Les Évangiles de la Sainte-Chapelle',
    category: 'Borne interractive',
    description: 'Dans le cadre d\'un partenariat entre la BNF de Richelieu et Gobelins Paris, j\'ai développé une borne interactive présentant différentes reliures du 7e siècle.',
    detailDescription: 'L\'interface a d\'abord été conçue sur Figma, puis entièrement développée en HTML / CSS / JS. L\'objectif était de faire découvrir ces reliures de façon ludique, lors d\'une future exposition, à travers différents jeux et activités de reconstitution.',
    designer: 'Thaïs L\'Hocine',
    role: 'Creative Developer',
    completed: '2026',
    url: 'bnf.fr',
    projectUrl: 'https://projets.gobelins-pedago.fr/dnmade-bnf/dnmade2-bnf-2025/html/views/book-restauration.html',
    logo: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1772114115/logobnf_scrhyi.png',
    processImages: [
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1773059341/Capture_d_e%CC%81cran_2026-03-09_a%CC%80_13.27.04_ktnbkn.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1773059340/Capture_d_e%CC%81cran_2026-03-09_a%CC%80_13.27.37_ybu2op.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1773059340/Capture_d_e%CC%81cran_2026-03-09_a%CC%80_13.28.27_mpzg2u.png',
    ],
    videoUrl: 'https://youtu.be/tLncJHN3w2M',
    colors: ['#f8a500', '#252525', '#e9e3d8'],
    typography: 'Theano Didot',
    nextProject: { title: 'Date Mark', slug: 'date-mark' },
  },

  // ── DATEMAKR ─────────────────────────────────────────────────────────────
  'date-mark': {
    title: 'datemakr',
    subtitle: 'Application Design',
    category: 'Application Design',
    description: 'Dans le cadre de ma formation à Gobelins et d\'un workshop sur le thème de l\'IA, j\'ai créé une application de dating permettant de gérer ses rendez-vous à l\'aide d\'une IA.',
    detailDescription: 'L\'utilisateur répond à différentes questions sur ses intérêts, ses goûts et sa personnalité. L\'application génère ensuite le meilleur date possible entre les deux profils, en optimisant les trajets, les réservations et les activités. Elle permet également de réserver directement les restaurants via Apple Pay.\n\nL\'application a été conçue et prototypée sur Figma.',
    designer: 'Thaïs L\'Hocine',
    role: 'UI/UX Designer',
    completed: '2025',
    url: 'datemark.app',
    videoUrl: 'https://youtube.com/shorts/LyqrKTk2STE',
    colors: ['#dbc6c6', '#252525', '#817c72'],
    typography: 'Neue Haas Grotesk',
    nextProject: { title: 'Pochette CD', slug: 'pochette-cd' },
  },

  // ── POCHETTE CD ───────────────────────────────────────────────────────────
  'pochette-cd': {
    title: 'pochette CD',
    subtitle: 'Graphic Design & 3D',
    category: 'Graphic Design & 3D',
    description: 'Dans le cadre d\'un projet à l\'école, on devait créer la pochette d\'un artiste. J\'ai choisi la cover réalisée par une artiste, puis de la transformer en y ajoutant mes propres éléments.',
    detailDescription: 'J\'ai travaillé en mélangeant mes propres dessins et textures avec des retouches, en passant par Illustrator, InDesign et Photoshop. Je voulais trouver une façon originale de présenter ma cover en mélangeant les dimensions.',
    designer: 'Thaïs L\'Hocine',
    role: 'Graphic Designer & 3D Artist',
    completed: '2025',
    url: '',
    // 📝 Images affichées après le cube 3D
    processImages: [
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480882/mockup_pochette1_nmwmia.jpg',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1755268100/mock_up_cd_iiiz03.jpg',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480837/mock_klwezr.png',
    ],
    // 📝 Images du cube 3D (faces avant / arrière / disque)
    cube: {
      front: 'https://i.pinimg.com/736x/71/d0/ba/71d0baded86ebf7a90c6510543db5576.jpg',
      back:  'https://i.pinimg.com/736x/61/04/ad/6104adf2e7ed6afa9a73f386166368a1.jpg',
      disc:  'https://i.pinimg.com/736x/44/d7/ef/44d7ef24279af92d74609d6885f6ffee.jpg',
    },
    nextProject: { title: 'Underdog', slug: 'underdog' },
  },

  // ── UNDERDOG ─────────────────────────────────────────────────────────────
  'underdog': {
    title: 'Underdog',
    subtitle: 'Stage & Web Design',
    category: 'Stage & Web Design',
    description: 'Lors de mon stage chez UnderDog, j\'ai participé à la gestion des annonces en ligne.',
    detailDescription: 'Je prenais en photo les appareils, les détourais puis préparais leur mise en page avant publication. J\'ai également conçu plusieurs visuels graphiques à l\'aide d\'Illustrator et contribué à la mise en ligne du site sur WordPress.',
    designer: 'Thaïs L\'Hocine',
    role: 'Stagiaire Designer & Web',
    completed: '2024',
    url: 'underdog.fr',
    // 📝 Images de process (alternance gauche / droite / centre)
    processImages: [
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575612/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.38_llrmp6.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575611/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.48_bnytps.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575603/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.29_znjqca.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575617/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.42_bsoqyl.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575618/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.53_rnid5p.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575614/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.57_zwqgxo.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575631/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.13_ashakj.png',
    ],
  },
};

// ── Variantes d'animation ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.01, 0.05, 0.95] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// ────────────────────────────────────────────────────────────────────────────
// 📐 ESPACEMENTS GLOBAUX — Modifier ici pour ajuster tous les paddings
// ────────────────────────────────────────────────────────────────────────────
const SPACING = {
  // 📝 Padding horizontal des pages
  px: 'px-15 md:px-16 lg:px-20',
  // 📝 Padding top de la section hero (depuis le header)
  heroTop: 'pt-40',
  // 📝 Espace vertical entre la section titre et le rectangle description
  titleToRect: 'clamp(3rem, 6vw, 6rem)',
  // 📝 Espace entre le rectangle et la section suivante (charte, moodboard…)
  rectToContent: 'clamp(9rem, 20vw, 13rem)',
};

// ────────────────────────────────────────────────────────────────────────────
// HERO PARTAGÉ — Même structure pour tous les projets
// titre | sous-titre | rectangle description (à droite)
// ────────────────────────────────────────────────────────────────────────────
function ProjectHero({
  title,
  subtitle,
  description,
  scrollY,
}: {
  title: string;
  subtitle: string;
  description: string;
  scrollY: ReturnType<typeof useScroll>['scrollY'];
}) {
  const titleY       = useTransform(scrollY, [0, 400], [0, -50]);
  const titleOpacity = useTransform(scrollY, [0, 280], [1, 0.35]);

  return (
    <section className={`${SPACING.heroTop} ${SPACING.px} pb-0`}>

      {/* 📝 TITRE PRINCIPAL — modifier clamp(min, vw, max) */}
      <motion.h1
        style={{ y: titleY, opacity: titleOpacity, fontSize: 'clamp(2.8rem, 6vw, 6.5rem)', lineHeight: 0.9 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.75, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="text-white font-light leading-none"
      >
        {title}
      </motion.h1>

      {/* 📝 SOUS-TITRE */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.88 }}
        className="text-white/50"
        style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.3rem)', marginTop: 'clamp(1rem, 2vw, 2rem)' }}
      >
        {subtitle}
      </motion.p>

      {/* 📝 RECTANGLE DESCRIPTION — décalé à droite mais pas au bout, espace sous le sous-titre */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        className="flex justify-end pr-0 md:pr-24 lg:pr-48"
        style={{ marginTop: SPACING.titleToRect }}
      >
        <div
          className="border border-white/60 p-5"
          style={{ maxWidth: 'clamp(260px, 34vw, 440px)' }}
        >
          <p
            className="text-white/80 leading-relaxed"
            style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}
          >
            {description}
          </p>
        </div>
      </motion.div>

      {/* Indicateur scroll ↘ */}
      <div className="flex justify-end mt-6">
        <motion.span
          className="text-white/30 text-xl"
          animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↘
        </motion.span>
      </div>

      {/* 📝 ESPACE ENTRE RECTANGLE ET CONTENU SUIVANT */}
      <div style={{ height: SPACING.rectToContent }} />
    </section>
  );
}

// ── Bouton retour ────────────────────────────────────────────────────────────
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed top-8 left-12 z-50 flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
      style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}
    >
      <motion.span
        className="text-xl"
        animate={{ x: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ←
      </motion.span>
      <span className="relative">
        retour
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </span>
    </motion.button>
  );
}

// ── Footer dégradé turquoise ─────────────────────────────────────────────────
function TurquoiseFooter({ projectUrl }: { projectUrl?: string }) {
  return (
    <div
      className="w-full py-10 flex items-center justify-center relative"
      style={{ backgroundColor: '#00FF11' }}
    >
      <p className="text-white" style={{ fontSize: 'clamp(1rem, 2.1vw, 1.1rem)' }}>
        © 2026 Developed by Thaïs L'Hocine
      </p>
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-10 text-white hover:underline transition-opacity hover:opacity-70"
          style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
        >
          Voir le projet →
        </a>
      )}
    </div>
  );
}

// ── Projet suivant ───────────────────────────────────────────────────────────
function NextProjectSection({ slug, title }: { slug: string; title: string }) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mt-24 py-20 px-10 md:px-16 lg:px-20 text-center"
    >
      <p className="text-white/40 tracking-widest uppercase mb-12"
        style={{ fontSize: 'clamp(0.65rem, 0.85vw, 0.85rem)' }}>
        Projet suivant
      </p>
      <Link to={`/project/${slug}`} className="group inline-block">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true }}
          className="text-white font-light tracking-tight mb-14 transition-opacity group-hover:opacity-40"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', lineHeight: 0.88, fontFamily: "'Dahlia', serif" }}
        >
          {title}
        </motion.h2>
        <motion.div
          whileHover={{ y: 6 }}
          className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto backdrop-blur-sm group-hover:bg-white transition-all duration-300"
        >
          <span className="text-white text-2xl group-hover:text-black transition-colors">↓</span>
        </motion.div>
      </Link>
    </motion.section>
  );
}

// ── Vidéo iPhone ─────────────────────────────────────────────────────────────
function IPhoneVideo({ videoUrl }: { videoUrl: string }) {
  const getEmbed = (url: string) => {
    if (url.includes('youtube.com/embed/')) return url;
    const m = url.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&loop=1&mute=1&controls=0&playlist=${m[1]}&playsinline=1&rel=0&modestbranding=1`;
    return url;
  };
  return (
    <div className="overflow-hidden rounded-[2.5rem] shadow-2xl"
      // 📝 Taille vidéo iPhone — modifier ici
      style={{ width: 'clamp(280px, 32vw, 420px)', aspectRatio: '9/19.5' }}>
      <iframe src={getEmbed(videoUrl)} className="w-full h-full" style={{ border: 'none' }}
        allow="autoplay; encrypted-media" title="App preview" />
    </div>
  );
}

// ── Vidéo cinématique BNF ─────────────────────────────────────────────────────
function CinematicVideo({ videoUrl }: { videoUrl: string }) {
  const getEmbed = (url: string) => {
    if (url.includes('youtube.com/embed/')) return url;
    const m = url.match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
    if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&loop=1&mute=1&controls=0&playlist=${m[1]}&playsinline=1&rel=0&modestbranding=1`;
    return url;
  };
  return (
    <div className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '16/9' }}>
      <iframe src={getEmbed(videoUrl)} className="w-full h-full" style={{ border: 'none' }}
        allow="autoplay; encrypted-media" title="BNF preview" />
    </div>
  );
}

// ── Cube CD 3D CSS ────────────────────────────────────────────────────────────
function CDBox3D({ cube }: { cube: { front: string; back: string; disc: string } }) {
  // 📝 Taille du cube en pixels
  const SIZE = 350;
  const DEPTH = 10;
  const boxColor = '#222';
  return (
    <>
      <style>{`
        @keyframes cd-spinaround { to { transform: rotateY(360deg); } }
        .cd-wrap { perspective: 800px; width: ${SIZE}px; height: ${SIZE}px; }
        .cd-box { width: 100%; height: 100%; transform-style: preserve-3d;
          /* 📝 Vitesse rotation — modifier 8s */
          animation: cd-spinaround 8s infinite linear; position: relative; }
        .cd-box > div { position: absolute; width: ${SIZE}px; height: ${SIZE}px; overflow: hidden; }
        .cd-front { background-color: ${boxColor}; background-image: url('${cube.front}'); background-size: cover; background-position: center; }
        .cd-back  { background-color: ${boxColor}; background-image: url('${cube.back}'); background-size: cover; background-position: center; transform: translateZ(-${DEPTH}px) rotateY(180deg); }
        .cd-disc  { transform: translateZ(-5px) translateX(125px); border-radius: 350px;
          box-shadow: 0 0 0 5px silver inset, 0 0 0 100px #f6f6f6 inset, 0 0 0 105px silver inset, 0 0 0 140px rgba(255,255,255,0.25) inset;
          background-image: url('${cube.disc}'); background-size: cover; background-position: center; }
        .cd-left   { background-color: ${boxColor}; width: ${DEPTH}px !important; transform: translateZ(-5px) rotateY(90deg); left: -5px; }
        .cd-top    { background-color: ${boxColor}; height: ${DEPTH}px !important; transform: translateZ(-5px) rotateX(90deg); top: -5px; }
        .cd-bottom { background-color: ${boxColor}; height: ${DEPTH}px !important; transform: translateZ(-5px) rotateX(90deg); top: ${SIZE - DEPTH + 5}px; }
      `}</style>
      <div className="flex items-center justify-center py-12">
        <div className="cd-wrap">
          <div className="cd-box">
            <div className="cd-front" /><div className="cd-disc" /><div className="cd-back" />
            <div className="cd-left" /><div className="cd-top" /><div className="cd-bottom" />
          </div>
        </div>
      </div>
    </>
  );
}

// ── Section charte graphique réutilisable ────────────────────────────────────
function CharteSection({
  typography,
  colors,
  logo,
  fontFamily,
}: {
  typography: string;
  colors: string[];
  logo?: string;
  fontFamily?: string;
}) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`${SPACING.px} pb-20`}
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white mb-16"
        // 📝 Taille titre "charte graphique"
        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
      >
        charte graphique
      </motion.h2>

      <div className="flex flex-col md:flex-row items-start gap-14 md:gap-20">
        {/* Typo specimen */}
        <div className="flex items-start gap-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-white select-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', lineHeight: 1, fontFamily: fontFamily ?? 'inherit' }}
          >
            Aa
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white space-y-1 pt-8"
            style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.9rem)', fontFamily: fontFamily ?? 'inherit' }}
          >
            <p>{typography}</p>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>1234567890 / . ? / % ¨ * _</p>
          </motion.div>
        </div>

        {/* Palette couleurs */}
        <div className="flex gap-4">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}
              className="relative border border-white/20 flex items-center justify-center"
              style={{
                backgroundColor: color,
                width: 'clamp(38px, 3.5vw, 58px)',
                height: 'clamp(120px, 14vw, 180px)',
                transformOrigin: 'bottom',
              }}
            >
              <span className="absolute text-[9px] font-mono select-none"
                style={{
                  writingMode: 'vertical-rl', textOrientation: 'mixed',
                  color: color === '#ffffff' || color === '#e9e3d8' ? '#000' : '#fff',
                }}>
                {color.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Logo optionnel */}
        {logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          >
            <img src={logo} alt="logo" className="h-24 md:h-28 w-auto object-contain" />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

// ── Galerie d'images alternées ───────────────────────────────────────────────
function ProcessGallery({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  return (
    <section className={`${SPACING.px} py-16 space-y-24`}>
      {images.map((url, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true, margin: '-80px' }}
          // 📝 Alternance gauche / droite / centre
          className={`max-w-4xl ${i % 3 === 0 ? '' : i % 3 === 1 ? 'ml-auto' : 'mx-auto'}`}
        >
          <img src={url} alt={`${altPrefix} ${i + 1}`} className="w-full h-auto rounded-lg shadow-2xl" />
        </motion.div>
      ))}
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE DATEMAKR
// ════════════════════════════════════════════════════════════════════════════
function DatemakrPage({ project }: { project: typeof projectsData['date-mark'] }) {
  const { scrollY } = useScroll();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── HERO COMMUN ─────────────────────────────────────────────────── */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        scrollY={scrollY}
      />

      {/* ── CHARTE GRAPHIQUE ────────────────────────────────────────────── */}
      <CharteSection
        typography={project.typography}
        colors={project.colors}
        fontFamily="Helvetica Neue, sans-serif"
      />

      {/* ── APERÇU VIDÉO IPHONE ─────────────────────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} py-20 flex flex-col items-center gap-10`}
      >
        <p className="text-white/40 tracking-widest uppercase"
          style={{ fontSize: 'clamp(0.65rem, 0.85vw, 0.85rem)' }}>
          aperçu de l'application
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }} viewport={{ once: true }}
        >
          <IPhoneVideo videoUrl={project.videoUrl} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
          className="text-white/60 text-center max-w-sm leading-relaxed"
          style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)' }}
        >
          {project.detailDescription}
        </motion.p>
      </motion.section>

      <NextProjectSection slug={project.nextProject.slug} title={project.nextProject.title} />
      <TurquoiseFooter />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE POCHETTE CD
// ════════════════════════════════════════════════════════════════════════════
function PochetteCDPage({ project }: { project: typeof projectsData['pochette-cd'] }) {
  const { scrollY } = useScroll();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── HERO COMMUN ─────────────────────────────────────────────────── */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        scrollY={scrollY}
      />

      {/* ── MOODBOARD ───────────────────────────────────────────────────── */}
      <motion.section
        variants={fadeIn} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} pb-16`}
      >
        <div className="border border-white/60 px-5 py-2 inline-block mb-12">
          <span style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}>moodboard</span>
        </div>

        {/* 📝 COLLAGE — positions ajustables via style */}
        <div className="relative" style={{ height: '400px', maxWidth: '700px' }}>
          {[
            { img: imgMoodboard1, style: { left: '46%', top: '0px',   width: '185px', height: '185px' } },
            { img: imgMoodboard1, style: { left: '18%', top: '155px', width: '185px', height: '185px' } },
            { img: imgMoodboard2, style: { left: '63%', top: '175px', width: '180px', height: '180px' } },
            { img: imgMoodboard2, style: { left: '49%', top: '210px', width: '180px', height: '180px' } },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
              className="absolute" style={item.style}>
              <img src={item.img} alt={`moodboard ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <motion.span className="text-white/30 text-xl"
            animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            ↘
          </motion.span>
        </div>
      </motion.section>

      {/* ── 3D USE — CUBE CSS ANIMÉ ──────────────────────────────────────── */}
      <motion.section
        variants={fadeIn} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} pb-16`}
      >
        <CDBox3D cube={project.cube} />
      </motion.section>

      {/* ── IMAGES APRÈS LE CUBE ─────────────────────────────────────────── */}
      {project.processImages.length > 0 && (
        <>
          <p className={`${SPACING.px} text-white/40 text-xs tracking-widest uppercase mb-2`}>
            visuels
          </p>
          <ProcessGallery images={project.processImages} altPrefix="pochette CD" />
        </>
      )}

      {/* ── DESCRIPTION DÉTAILLÉE ───────────────────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} py-14`}
      >
        <p className="text-white/60 leading-relaxed max-w-lg ml-auto"
          style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)' }}>
          {project.detailDescription}
        </p>
      </motion.section>

      <NextProjectSection slug={project.nextProject.slug} title={project.nextProject.title} />
      <TurquoiseFooter />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE BNF
// ════════════════════════════════════════════════════════════════════════════
function BnfPage({ project }: { project: typeof projectsData['bnf'] }) {
  const { scrollY } = useScroll();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── HERO COMMUN ─────────────────────────────────────────────────── */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        scrollY={scrollY}
      />

      {/* ── CHARTE GRAPHIQUE ────────────────────────────────────────────── */}
      <CharteSection
        typography={project.typography}
        colors={project.colors}
        logo={project.logo}
        fontFamily={project.typography}
      />

      {/* ── VIDÉO CINÉMATIQUE ───────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} py-24 flex flex-col items-center gap-12`}
      >
        <p className="text-white/40 tracking-widest uppercase"
          style={{ fontSize: 'clamp(0.65rem, 0.85vw, 0.85rem)' }}>
          aperçu du projet
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }} viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <CinematicVideo videoUrl={project.videoUrl} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
          className="text-white/60 text-center max-w-xl leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)' }}
        >
          {project.detailDescription}
        </motion.p>
      </motion.section>

      {/* ── IMAGES DE PROCESS ───────────────────────────────────────────── */}
      <ProcessGallery images={project.processImages} altPrefix="BNF" />

      <NextProjectSection slug={project.nextProject.slug} title={project.nextProject.title} />
      <TurquoiseFooter projectUrl={project.projectUrl} />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE UNDERDOG
// ════════════════════════════════════════════════════════════════════════════
function UnderdogPage({ project }: { project: typeof projectsData['underdog'] }) {
  const { scrollY } = useScroll();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── HERO COMMUN ─────────────────────────────────────────────────── */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        scrollY={scrollY}
      />

      {/* ── IMAGES DE PROCESS ───────────────────────────────────────────── */}
      <ProcessGallery images={project.processImages} altPrefix="Underdog" />

      {/* ── DESCRIPTION DÉTAILLÉE ───────────────────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`${SPACING.px} py-20`}
      >
        <p className="text-white/60 max-w-lg leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 1.15vw, 1.15rem)' }}>
          {project.detailDescription}
        </p>
      </motion.section>

      <TurquoiseFooter />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL — routing vers la bonne page
// ════════════════════════════════════════════════════════════════════════════
export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#0f1]">Project not found</h1>
          <Link to="/" className="text-white underline">Return home</Link>
        </div>
      </div>
    );
  }

  // Rideau d'entrée
  const curtain = (
    <motion.div
      key={slug}
      initial={{ scaleX: 1 }} animate={{ scaleX: 0 }}
      transition={{ duration: 0.22, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black pointer-events-none"
      style={{ transformOrigin: 'right center' }}
    />
  );

  const back = <BackButton onClick={() => navigate('/')} />;

  if (slug === 'bnf')         return <><CustomCursor />{curtain}{back}<BnfPage       project={project as typeof projectsData['bnf']}        /></>;
  if (slug === 'date-mark')   return <><CustomCursor />{curtain}{back}<DatemakrPage  project={project as typeof projectsData['date-mark']}  /></>;
  if (slug === 'pochette-cd') return <><CustomCursor />{curtain}{back}<PochetteCDPage project={project as typeof projectsData['pochette-cd']} /></>;
  if (slug === 'underdog')    return <><CustomCursor />{curtain}{back}<UnderdogPage  project={project as typeof projectsData['underdog']}   /></>;

  return null;
}