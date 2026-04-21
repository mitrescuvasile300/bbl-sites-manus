/*
  Design note — Navbar.tsx
  Filosofie: Systems Atelier. Header-ul trebuie să pară precis, matur și calm,
  ca interfața unui studio tehnic care își cunoaște foarte bine instrumentele.
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
        className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(247, 245, 239, 0.92)' : 'rgba(247, 245, 239, 0.76)',
          borderColor: 'rgba(34, 47, 55, 0.1)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 10px 30px rgba(23, 32, 37, 0.06)' : 'none',
        }}
      >
        <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-5 md:px-8 xl:px-10">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logos/logo-1-premium.png"
              alt={siteContent.brand.name}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="hidden flex-col lg:flex">
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--ink)]">
                {siteContent.brand.name}
              </span>
              <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                website build studio
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex xl:gap-8">
            {siteContent.navigation.links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  data-active={isActive ? 'true' : 'false'}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary !min-h-[3.15rem] !px-5 !py-3 !text-[0.72rem]">
              {siteContent.navigation.primaryCta}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] md:hidden"
            aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="sr-only">Meniu</span>
            <div className="relative h-4 w-5">
              <span
                className="absolute left-0 top-0 block h-px w-full bg-current transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-current transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="absolute bottom-0 left-0 block h-px w-full bg-current transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-40 flex flex-col justify-between bg-[rgba(247,245,239,0.98)] px-6 pb-10 pt-28 transition-all duration-300 md:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-5">
          {siteContent.navigation.links.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-[var(--line)] pb-4 font-[var(--font-display)] text-[clamp(2rem,8vw,3rem)] leading-none tracking-[-0.05em] text-[var(--ink)]"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-5">
          <p className="max-w-xs text-sm leading-6 text-[var(--ink-soft)]">
            Website-uri gândite ca instrumente de business, cu design coerent și implementare solidă.
          </p>
          <Link to="/contact" className="btn-primary w-fit !px-6 !py-4 !text-[0.72rem]">
            {siteContent.navigation.primaryCta}
          </Link>
        </div>
      </div>
    </>
  );
}
