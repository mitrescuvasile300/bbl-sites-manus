/*
  Design note — Services.tsx
  Filosofie: editorial cinematic tech. Pagina de servicii trebuie să pară un cadru de lucru solid,
  nu o listă generică. Fiecare bloc trebuie să explice clar valoarea și livrabilele.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(16,24,44,1)_0%,rgba(8,10,18,1)_58%,rgba(5,6,12,1)_100%)]">
        <div className="content-frame py-20 md:py-24">
          <SectionHeading
            eyebrow={siteContent.services.hero.eyebrow}
            title={siteContent.services.hero.title}
            body={siteContent.services.hero.body}
            className="max-w-[36rem]"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.services.items.map((service) => (
              <article key={service.number} className="service-card" data-reveal="up">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="service-card-number">{service.number}</span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)]">
                      {service.title}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
                      {service.intro}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="inline-flex items-start gap-3 rounded-none border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-6 text-[var(--text-secondary)]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-light)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
            <SectionHeading
              eyebrow="Moduri de colaborare"
              title="Intrăm în proiect în ritmul potrivit pentru stadiul în care vă aflați acum."
              body="Alegem formatul de colaborare în funcție de claritatea de care aveți nevoie acum: sprint de strategie, redesign complet sau evoluție iterativă."
              className="max-w-[34rem]"
            />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.services.engagementModels.map((item) => (
              <article key={item.title} className="feature-card" data-reveal="up">
                <h3 className="text-2xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-base leading-7 text-[var(--text-secondary)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Întrebări frecvente"
              title="Răspunsuri scurte pentru deciziile care apar aproape în fiecare proiect."
              body="Mai jos sunt răspunsurile la întrebările care apar cel mai des despre ritm, livrabile și modul de colaborare."
              className="max-w-[32rem]"
            />

            <div className="grid gap-5">
              {siteContent.services.faq.map((item) => (
                <article key={item.question} className="faq-card" data-reveal="up">
                  <h3 className="text-xl leading-tight text-[var(--text-primary)]">{item.question}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24 md:pb-32">
        <div className="content-frame">
          <div className="cta-panel" data-reveal="up">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Discuție inițială</span>
              <h2 className="cta-title mt-4">
                Dacă vrei, putem începe cu o analiză scurtă a site-ului actual și a paginilor care au nevoie cel mai urgent de claritate.
              </h2>
            </div>

            <Link to="/contact" className="btn-primary mt-10 inline-flex items-center gap-3">
              Programează o discuție
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
