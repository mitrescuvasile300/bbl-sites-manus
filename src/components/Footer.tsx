/*
  Design note — Footer.tsx
  Filosofie: editorial cinematic tech. Footer-ul trebuie să închidă experiența cu claritate,
  densitate controlată și linkuri reale, fără zone moarte sau placeholder-e decorative.
*/

import { Link } from 'react-router-dom';
import { siteContent } from '@/lib/siteContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex max-w-md flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logos/logo-1-premium.png"
                alt={siteContent.brand.name}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-base leading-7 text-[var(--text-secondary)]">
              {siteContent.brand.shortDescription}
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Strategie. Design. Implementare.
            </p>
          </div>

          {siteContent.footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {column.title}
              </h3>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.to}-${link.label}`}
                    to={link.to}
                    className="text-sm leading-6 text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteContent.brand.name}. {siteContent.footer.copyright}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-fit uppercase tracking-[0.2em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
          >
            {siteContent.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
