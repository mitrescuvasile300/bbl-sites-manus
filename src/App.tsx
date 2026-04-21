/*
  Design note — App.tsx
  Filosofie: Systems Atelier. Structura aplicației trebuie să rămână suplă,
  cu rute clare și tranziții curate între pagini, fără dramatizare inutilă.
*/

import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Process = lazy(() => import('./pages/Process'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6 text-center font-[var(--font-mono)] text-sm uppercase tracking-[0.24em] text-[var(--ink-muted)]">
      Se încarcă pagina…
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
