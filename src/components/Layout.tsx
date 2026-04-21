/*
  Design note — Layout.tsx
  Filosofie: editorial cinematic tech. Layout-ul global trebuie să fie calm și predictibil,
  astfel încât motion-ul dintre secțiuni să se simtă intenționat, nu accidental sau conflictual.
*/

import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main className="flex-1 pt-[76px]">{children}</main>
      <Footer />
    </div>
  );
}
