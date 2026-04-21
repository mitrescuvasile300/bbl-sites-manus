/*
  Design note — Footer.tsx
  Filosofie: Systems Atelier. Footer-ul trebuie să închidă experiența cu claritate,
  structură bună și o senzație de ordine tehnică, nu cu densitate inutilă.
*/

import { Link } from 'react-router-dom';
import { siteContent } from '@/lib/siteContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-strong)]">
      <div className="mx-auto max-w-[1280px] px-5 py-18 md:px-8 md:py-24 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div className="flex max-w-md flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logos/logo-1-premium.png"
                alt={siteContent.brand.name}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--ink)]">
                  {siteContent.brand.name}
                </span>
                <span className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                  systems atelier
                </span>
              </div>
            </Link>

            <p className="text-base leading-7 text-[var(--ink-soft)]">
              {siteContent.brand.shortDescription}
            </p>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              {siteContent.brand.signature}
            </div>
          </div>

          {siteContent.footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                {column.title}
              </h3>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.to}-${link.label}`}
                    to={link.to}
                    className="text-sm leading-6 text-[var(--ink)] transition-colors duration-200 hover:text-[var(--accent-strong)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteContent.brand.name}. {siteContent.footer.copyright}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-fit uppercase tracking-[0.18em] text-[var(--ink)] transition-colors duration-200 hover:text-[var(--accent-strong)]"
          >
            {siteContent.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
