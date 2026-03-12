import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProjectDetail } from './pages/ProjectDetail';
import { CV } from './pages/CV';

// import.meta.env.BASE_URL est automatiquement défini par Vite
// selon la valeur de `base` dans vite.config.ts
// → '/'          pour Netlify / Vercel
// → '/portfolio-/' pour GitHub Pages (via VITE_BASE env var)
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/cv',
      element: <CV />,
    },
    {
      path: '/project/:slug',
      element: <ProjectDetail />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);