/*
  Design note — App.tsx
  Filosofie: editorial cinematic tech. Structura aplicației trebuie să rămână suplă,
  cu încărcare pe rute și tranziții curate între capitolele site-ului.
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
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-6 text-center text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
      Se încarcă experiența…
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
