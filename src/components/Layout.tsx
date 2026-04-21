/*
  Design note — Layout.tsx
  Filosofie: Systems Atelier. Layout-ul global trebuie să fie calm, stabil și previzibil,
  astfel încât fiecare pagină să pară parte din același sistem bine controlat.
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
    <div className="relative flex min-h-screen flex-col bg-[var(--bg)] text-[var(--ink)]">
      <Navbar />
      <main className="flex-1 pt-[82px]">{children}</main>
      <Footer />
    </div>
  );
}
