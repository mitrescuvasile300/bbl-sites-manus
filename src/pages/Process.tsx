/*
  Design note — Process.tsx
  Filosofie: editorial cinematic tech. Pagina procesului trebuie să reducă incertitudinea,
  cu un ritm clar al etapelor și o prezentare care transmite ordine, nu complexitate artificială.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

export default function Process() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(140deg,rgba(14,22,40,1)_0%,rgba(7,10,18,1)_58%,rgba(4,6,10,1)_100%)]">
        <div className="content-frame py-20 md:py-24">
          <SectionHeading
            eyebrow={siteContent.process.hero.eyebrow}
            title={siteContent.process.hero.title}
            body={siteContent.process.hero.body}
          />
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[rgba(10,14,24,0.72)]">
        <div className="content-frame py-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.process.principles.map((item) => (
              <article key={item} className="mini-principle-card" data-reveal="up">
                <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-base">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Etape"
              title="Fiecare pas există ca să facă următorul pas mai simplu și mai bine argumentat."
              body="În loc să amestecăm simultan strategia, designul și implementarea, mutăm proiectul prin etape care produc claritate reală."
            />

            <div className="grid gap-6">
              {siteContent.process.phases.map((phase) => (
                <article key={phase.number} className="timeline-card" data-reveal="up">
                  <div className="timeline-number">{phase.number}</div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl leading-tight text-[var(--text-primary)] md:text-3xl">{phase.title}</h3>
                    <p className="text-base leading-7 text-[var(--text-secondary)] md:text-lg">{phase.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {phase.outputs.map((item) => (
                        <span key={item} className="checkpoint-pill checkpoint-pill-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <SectionHeading
            eyebrow="Ritmul colaborării"
            title="Cum păstrăm proiectul rapid fără să sacrificăm calitatea deciziilor."
            body="Am înlocuit animațiile greoaie și secțiunile încărcate cu o structură mai clară, unde fiecare bloc explică o regulă de lucru importantă."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.process.rituals.map((item) => (
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
              eyebrow="Întrebări care apar des"
              title="Mai puține necunoscute la început înseamnă mai puțină fricțiune pe parcurs."
            />

            <div className="grid gap-5">
              {siteContent.process.faq.map((item) => (
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
              <span className="section-eyebrow">Pornim simplu</span>
              <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.04em] text-[var(--text-primary)]">
                Dacă vrei, putem începe cu o etapă scurtă de audit și structură, apoi decidem împreună cât de amplu trebuie să fie următorul pas.
              </h2>
            </div>

            <Link to="/contact" className="btn-primary mt-10 inline-flex items-center gap-3">
              Hai să discutăm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
