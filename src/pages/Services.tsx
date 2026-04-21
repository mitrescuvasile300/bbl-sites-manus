/*
  Design note — Services.tsx
  Filosofie: Systems Atelier. Pagina de servicii trebuie să explice clar ce se livrează,
  de ce contează și cum se vede competența tehnică în execuția finală.
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
        <section className="section-shell hero-shell overflow-hidden">
          <div className="content-frame grid gap-12 py-20 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-32">
            <SectionHeading
              eyebrow={siteContent.services.hero.eyebrow}
              title={siteContent.services.hero.title}
              body={siteContent.services.hero.body}
              className="max-w-[40rem]"
            />

            <div className="hero-panel grid gap-6" data-reveal="scale">
              <div className="flex items-center justify-between gap-4">
                <span className="panel-title">Delivery frame</span>
                <span className="mono-label">Service systems</span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                {siteContent.services.hero.supportTitle}
              </h2>

              <div className="support-list">
                {siteContent.services.hero.supportItems.map((item, index) => (
                  <div key={item} className="support-list-item">
                    <span className="support-list-index">0{index + 1}</span>
                    <p className="text-base leading-7 text-[var(--ink-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <SectionHeading
              eyebrow="Module de lucru"
              title="Organizăm serviciile în etape ușor de înțeles, nu într-o listă lungă de promisiuni."
              body="Fiecare modul are rol clar în proiect și produce un output ușor de urmărit pentru client."
              className="max-w-[42rem]"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {siteContent.services.modules.map((service) => (
                <article key={service.number} className="service-card flex flex-col gap-6" data-reveal="up">
                  <div className="grid gap-4">
                    <span className="service-card-number">{service.number}</span>
                    <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[0.96] tracking-[-0.04em] text-[var(--ink)]">
                      {service.title}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-[var(--ink-soft)]">{service.intro}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-[var(--line)] bg-white/60 px-4 py-4 text-sm leading-6 text-[var(--ink-soft)]"
                      >
                        <div className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--surface-strong)]">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow={siteContent.services.proof.eyebrow}
                title={siteContent.services.proof.title}
                className="max-w-[34rem]"
              />

              <div className="grid gap-4 md:grid-cols-3">
                {siteContent.services.proof.items.map((item) => (
                  <article key={item.title} className="proof-card flex flex-col gap-3" data-reveal="up">
                    <span className="mono-label">Proof</span>
                    <h3 className="text-[1.3rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                    <p className="text-[0.96rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <SectionHeading
              eyebrow="Modele de colaborare"
              title="Pornim cu forma potrivită pentru obiectivul actual și extindem doar ce aduce valoare."
              body="Unele proiecte au nevoie de o lansare rapidă, altele de reconstrucție completă. Important este să păstrăm claritatea și coerența sistemului din prima etapă." 
              className="max-w-[44rem]"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {siteContent.services.models.map((item) => (
                <article key={item.title} className="surface-card flex flex-col gap-4" data-reveal="up">
                  <span className="mono-label">Model</span>
                  <h3 className="text-[1.5rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                  <p className="text-[0.98rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[rgba(255,255,255,0.24)]">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionHeading
                eyebrow="Întrebări frecvente"
                title="Clarificăm repede cum putem începe și ce are sens pentru proiectul tău."
                className="max-w-[32rem]"
              />

              <div className="grid gap-4">
                {siteContent.services.faq.map((item) => (
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
                <span className="section-eyebrow">Discuție inițială</span>
                <h2 className="cta-title mt-5">Dacă ai nevoie de structură, design și build într-un singur flux, putem începe de aici.</h2>
                <p className="mt-5 max-w-[40rem] text-lg leading-8 text-[var(--ink-soft)]">
                  Ne spui contextul proiectului, iar noi îți spunem ce format are sens, care sunt prioritățile și cum ar arăta primul pas corect.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Discută proiectul
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
