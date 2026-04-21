/*
  Design note — Navbar.tsx
  Filosofie: editorial cinematic tech. Header-ul trebuie să fie precis, aerisit și discret,
  cu accent pe orientare clară și un CTA care pare parte din sistem, nu un element strident.
*/

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '@/lib/siteContent';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(6, 10, 18, 0.86)' : 'rgba(6, 10, 18, 0.38)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: scrolled ? '1px solid rgba(168, 191, 255, 0.14)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 md:px-10 xl:px-16">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logos/logo-1-premium.png"
              alt={siteContent.brand.name}
              className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="hidden text-xs uppercase tracking-[0.28em] text-[var(--text-muted)] lg:inline-block">
              website systems
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteContent.navigation.links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[0.74rem] uppercase tracking-[0.22em] transition-colors duration-300"
                  style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-secondary !px-5 !py-3 !text-[0.72rem]">
              {siteContent.navigation.primaryCta}
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 md:hidden"
            aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="sr-only">Meniu</span>
            <div className="relative h-4 w-5">
              <span
                className="absolute left-0 top-0 block h-px w-full bg-[var(--text-primary)] transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-[var(--text-primary)] transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="absolute bottom-0 left-0 block h-px w-full bg-[var(--text-primary)] transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-40 flex flex-col justify-between bg-[rgba(6,10,18,0.96)] px-6 pb-10 pt-28 transition-all duration-500 md:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-5">
          {siteContent.navigation.links.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-white/8 pb-4 text-[clamp(2rem,8vw,3.25rem)] leading-none tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-6">
          <p className="max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
            Website-uri gândite ca instrumente de poziționare, nu doar ca suprafețe vizuale.
          </p>
          <Link to="/contact" className="btn-primary w-fit !px-6 !py-4 !text-[0.72rem]">
            {siteContent.navigation.primaryCta}
          </Link>
        </div>
      </div>
    </>
  );
}
