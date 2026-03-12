import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { SideNav } from '../components/SideNav';
import { useNavigate } from 'react-router';

// ── Liste des projets du carrousel ─────────────────────────────────────────
// 📝 MODIFIER ICI pour changer l'ordre, le titre, la catégorie ou l'image
const projects = [
  {
    id: 1,
    title: 'BNF',
    category: 'Borne interractive',
    // 📝 BNF COVER — remplacer l'URL ici
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1773069165/Capture_d_e%CC%81cran_2026-03-09_a%CC%80_16.12.28_bdm9bm.png',
    slug: 'bnf',
    useCanvas: false,
  },
  {
    id: 2,
    title: 'Date Mark',
    category: 'Design d\'une application',
    // 📝 DATEMAKR COVER — remplacer l'URL ici
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1772888673/coverdateamkr_vriu7l.png',
    slug: 'date-mark',
    useCanvas: false,
  },
  {
    id: 3,
    title: 'Pochette CD',
    category: 'Graphic Design',
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480837/mock_klwezr.png',
    slug: 'pochette-cd',
    useCanvas: false,
  },
  {
    id: 4,
    title: 'Underdog',
    category: 'Stage & Web Design',
    // 📝 UNDERDOG COVER — remplacer l'URL ici
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1772888741/Frame_14_iwydxq.png',
    slug: 'underdog',
    useCanvas: false, // 📝 canvas désactivé — utilise l'image cloudinary
  },
];

export function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // État pour le rideau de transition
  const [curtainActive, setCurtainActive] = useState(false);
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Déclenche le rideau puis navigue
  const handleProjectClick = useCallback((slug: string) => {
    setPendingSlug(slug);
    setCurtainActive(true);
  }, []);

  // Après 220ms (durée rideau), on navigue
  useEffect(() => {
    if (curtainActive && pendingSlug) {
      const timer = setTimeout(() => {
        navigate(`/project/${pendingSlug}`);
      }, 230);
      return () => clearTimeout(timer);
    }
  }, [curtainActive, pendingSlug, navigate]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const meshes: THREE.Mesh[] = [];
    const carouselGroup = new THREE.Group();
    carouselGroup.rotation.z = 0.1;
    carouselGroup.rotation.x = 0.1;
    scene.add(carouselGroup);

    projects.forEach((project, i) => {
      let texture: THREE.Texture;

      texture = loader.load(project.image || '');
      texture.minFilter = THREE.LinearFilter;
      const geometry = new THREE.PlaneGeometry(5, 3.2, 64, 64);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: 0 },
          uOpacity: { value: 1 },
          uBend: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uProgress;
          uniform float uBend;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float radius = 9.0;
            float angleX = pos.x / radius;
            pos.z = radius * (1.0 - cos(angleX));
            pos.x = radius * sin(angleX);
            float bendAmount = uBend * 0.4;
            float angleY = (pos.y / radius) * bendAmount;
            pos.z += sin(angleY) * 1.8;
            pos.x += cos(angleY) * 0.5;
            float angleXBend = (pos.x / radius) * bendAmount * 1.0;
            pos.z += sin(angleXBend) * 0.9;
            pos.y += cos(angleXBend) * 0.45;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uOpacity;
          varying vec2 vUv;
          void main() {
            vec4 texColor = texture2D(uTexture, vUv);
            vec2 center = vUv - 0.5;
            float dist = length(center);
            float vignette = 1.0 - smoothstep(0.2, 0.8, dist);
            float edgeDarkness = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
            vec3 finalColor = texColor.rgb * (0.8 + vignette * 0.2) * (0.7 + edgeDarkness * 0.3);
            gl_FragColor = vec4(finalColor, texColor.a * uOpacity);
          }
        `,
        side: THREE.DoubleSide,
        transparent: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = -i * 4.2;
      carouselGroup.add(mesh);
      meshes.push(mesh);
    });

    let targetScroll = 0;
    let currentScroll = 0;

    const handleWheel = (e: WheelEvent) => {
      targetScroll += e.deltaY * 0.002;
      targetScroll = Math.max(0, Math.min(targetScroll, projects.length - 1));
    };
    window.addEventListener('wheel', handleWheel, { passive: true });

    const animate = () => {
      requestAnimationFrame(animate);
      currentScroll += (targetScroll - currentScroll) * 0.08;
      meshes.forEach((mesh, i) => {
        const offset = i - currentScroll;
        mesh.position.y = -offset * 3.8;
        const arcDepth = Math.pow(Math.abs(offset), 1.3) * 0.8;
        mesh.position.z = arcDepth;
        mesh.position.x = offset * 0.15;
        const bendFactor = 0.4;
        const bendAngle = -Math.atan(offset * bendFactor);
        mesh.rotation.x = bendAngle;
        mesh.rotation.y = offset * 0.12;
        mesh.rotation.z = offset * 0.02;
        mesh.scale.set(1, 1, 1);
        if (mesh.material instanceof THREE.ShaderMaterial) {
          const distanceFromCenter = Math.abs(offset);
          mesh.material.uniforms.uOpacity.value = Math.max(0.2, 1 - distanceFromCenter * 0.35);
          mesh.material.uniforms.uBend.value = Math.pow(distanceFromCenter, 0.8) * 1.5;
          mesh.material.uniforms.uProgress.value = distanceFromCenter;
        }
        if (Math.abs(offset) < 0.4) setActiveIndex(i);
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative size-full overflow-hidden bg-black">
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

      {/* ── LOADING ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-xl"
            >
              Chargement...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── RIDEAU DE TRANSITION (gauche → droite) ───────────────────── */}
      {/* Deux panneaux noirs qui se ferment comme un rideau            */}
      <AnimatePresence>
        {curtainActive && (
          <motion.div
            key="curtain"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.22, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-black"
            style={{ transformOrigin: 'left center' }}
          />
        )}
      </AnimatePresence>

      <Header />
      <SideNav projects={projects} activeIndex={activeIndex} />

      {/* WebGL Canvas */}
      <div ref={mountRef} className="fixed inset-0 z-[5]" id="main" />

      {/* ── TEXT OVERLAY ─────────────────────────────────────────────── */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20 pl-12">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center px-6"
        >
          {/* Catégorie — petite, uppercase, tracking */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[12px] tracking-[0.25em] uppercase text-white/40 mb-4"
          >
            {projects[activeIndex].category}
          </motion.div>

          {/* Titre projet */}
          <motion.h2
            className="text-white tracking-tight mb-10"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: 1, fontFamily: "'Dahlia', serif" }}
          >
            {projects[activeIndex].title}
          </motion.h2>

          {/* Bouton — épuré, éditorial */}
          <button
            onClick={() => handleProjectClick(projects[activeIndex].slug)}
            className="inline-flex items-center gap-3 pointer-events-auto group"
          >
            <motion.span
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {/* Bouton avec bordure fine */}
              <span className="flex items-center gap-2 px-5 py-2.5 border border-white/25 text-white/70 hover:border-white/60 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group-hover:bg-white/5"
                style={{ fontFamily: "'Neue Haas Grotesk Display Pro'" }}>
                <span>View Project</span>
                <span className="text-xs">↗</span>
              </span>
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* ── FOOTER INFO ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-7 left-8 z-50 text-white"
        style={{ fontFamily: "'Neue Haas Grotesk Display Pro'', sans-serif" }}
      >
        <div className="text-[10px] tracking-[0.2em] uppercase text-white/50">En recherche d'alternance</div>
        <div className="text-[10px] tracking-[0.12em] text-white/30 mt-0.5">Février 2026</div>
      </motion.div>
    </div>
  );
}