/*
  Design note — Process.tsx
  Filosofie: Systems Atelier. Pagina procesului trebuie să reducă incertitudinea,
  să explice logic etapele și să transmită control, nu complexitate artificială.
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
        <section className="section-shell hero-shell overflow-hidden">
          <div className="content-frame grid gap-12 py-20 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-32">
            <div className="grid gap-8">
              <SectionHeading
                eyebrow={siteContent.process.hero.eyebrow}
                title={siteContent.process.hero.title}
                body={siteContent.process.hero.body}
                className="max-w-[40rem]"
              />

              <div className="surface-card max-w-[34rem]" data-reveal="up">
                <span className="mono-label">Principiu</span>
                <p className="mt-4 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
                  Procesul bun nu se simte complicat. Se simte clar, bine etapizat și suficient de flexibil încât să țină proiectul în mișcare fără să piardă controlul.
                </p>
              </div>
            </div>

            <div className="hero-panel grid gap-6" data-reveal="scale">
              <div className="flex items-center justify-between gap-4">
                <span className="panel-title">Process frame</span>
                <span className="mono-label">From brief to launch</span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                {siteContent.process.hero.supportTitle}
              </h2>

              <div className="support-list">
                {siteContent.process.hero.supportItems.map((item, index) => (
                  <div key={item} className="support-list-item">
                    <span className="support-list-index">0{index + 1}</span>
                    <p className="text-base leading-7 text-[var(--ink-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-[var(--line)] bg-[rgba(255,255,255,0.24)]">
          <div className="content-frame py-10 md:py-12">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {siteContent.process.principles.map((item) => (
                <article key={item} className="surface-card" data-reveal="up">
                  <p className="text-sm leading-7 text-[var(--ink-soft)] md:text-base">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionHeading
                eyebrow="Etape de lucru"
                title="Fiecare etapă aduce un output clar și reduce incertitudinea din proiect."
                body="Nu lăsăm procesul să devină abstract. Fiecare pas produce decizii, materiale și progres vizibil."
                className="max-w-[34rem]"
              />

              <div className="grid gap-5">
                {siteContent.process.stages.map((phase) => (
                  <article key={phase.number} className="process-card flex flex-col gap-5" data-reveal="up">
                    <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
                      <span className="process-card-number">{phase.number}</span>
                      <div className="grid gap-4">
                        <h3 className="text-[1.7rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{phase.title}</h3>
                        <p className="max-w-2xl text-[1rem] leading-7 text-[var(--ink-soft)]">{phase.description}</p>
                        <div className="chip-row">
                          {phase.outputs.map((item) => (
                            <span key={item} className="chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--surface-strong)]">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <SectionHeading
                eyebrow="Reguli de colaborare"
                title="Ținem proiectul clar prin feedback scurt, priorități reale și implementare fără complicații inutile."
                className="max-w-[34rem]"
              />

              <div className="rule-grid md:grid-cols-3">
                {siteContent.process.operatingRules.map((item) => (
                  <article key={item.title} className="rule-card" data-reveal="up">
                    <span className="mono-label">Rule</span>
                    <h3 className="mt-4 text-[1.3rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-3 text-[0.96rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionHeading
                eyebrow="Întrebări frecvente"
                title="Răspunsuri scurte pentru lucrurile pe care vrei să le știi înainte să pornim."
                className="max-w-[32rem]"
              />

              <div className="grid gap-4">
                {siteContent.process.faq.map((item) => (
                  <article key={item.question} className="faq-card flex flex-col gap-3" data-reveal="up">
                    <h3 className="text-[1.15rem] leading-7 tracking-[-0.02em] text-[var(--ink)]">{item.question}</h3>
                    <p className="text-[0.96rem] leading-7 text-[var(--ink-soft)]">{item.answer}</p>
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
                <h2 className="cta-title mt-5">Dacă vrei, începem cu o discuție scurtă și stabilim cea mai bună versiune de start pentru proiect.</h2>
                <p className="mt-5 max-w-[40rem] text-lg leading-8 text-[var(--ink-soft)]">
                  Nu trebuie să ai totul perfect definit. Este suficient să înțelegem obiectivul, iar de acolo punem proiectul într-o ordine clară.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Hai să discutăm
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
