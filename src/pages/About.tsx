/*
  Design note — About.tsx
  Filosofie: Systems Atelier. Pagina despre trebuie să arate felul de a gândi proiectele:
  clar, matur, orientat spre sistem și responsabilitate în implementare.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
        <section className="section-shell hero-shell overflow-hidden">
          <div className="content-frame grid gap-12 py-20 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-32">
            <SectionHeading
              eyebrow={siteContent.about.hero.eyebrow}
              title={siteContent.about.hero.title}
              body={siteContent.about.hero.body}
              className="max-w-[40rem]"
            />

            <div className="hero-panel grid gap-6" data-reveal="scale">
              <div className="flex items-center justify-between gap-4">
                <span className="panel-title">Studio note</span>
                <span className="mono-label">Method over noise</span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                Ce urmăresc în fiecare proiect
              </h2>

              <div className="support-list">
                <div className="support-list-item">
                  <span className="support-list-index">01</span>
                  <p className="text-base leading-7 text-[var(--ink-soft)]">Mesaj clar și ierarhie bună a informației.</p>
                </div>
                <div className="support-list-item">
                  <span className="support-list-index">02</span>
                  <p className="text-base leading-7 text-[var(--ink-soft)]">UI coerent, cu proporții și componente care pot fi extinse.</p>
                </div>
                <div className="support-list-item">
                  <span className="support-list-index">03</span>
                  <p className="text-base leading-7 text-[var(--ink-soft)]">Build curat, responsive și ușor de întreținut după lansare.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <SectionHeading
                eyebrow="Poveste"
                title="Interesul nu este doar cum arată un site, ci cât de clar gândește și cât de bine susține business-ul."
                className="max-w-[34rem]"
              />

              <div className="grid gap-6">
                {siteContent.about.story.map((paragraph) => (
                  <p key={paragraph} className="text-[1.05rem] leading-8 text-[var(--ink-soft)] md:text-[1.1rem]" data-reveal="up">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--surface-strong)]">
          <div className="content-frame py-24 md:py-32">
            <SectionHeading
              eyebrow="Principii"
              title="Trei principii care țin proiectul clar de la prima schiță până la lansare."
              className="max-w-[40rem]"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {siteContent.about.principles.map((item) => (
                <article key={item.title} className="proof-card flex flex-col gap-3" data-reveal="up">
                  <span className="mono-label">Principiu</span>
                  <h3 className="text-[1.35rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                  <p className="text-[0.98rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <SectionHeading
                eyebrow="Standarde de lucru"
                title="Designul și implementarea sunt tratate ca același sistem, nu ca două etape rupte între ele."
                body="Asta face diferența între o pagină frumoasă și un website care poate fi folosit, întreținut și extins fără fricțiune inutilă."
                className="max-w-[34rem]"
              />

              <div className="rule-grid md:grid-cols-2">
                {siteContent.about.standards.map((item) => (
                  <article key={item.title} className="rule-card" data-reveal="up">
                    <span className="mono-label">Standard</span>
                    <h3 className="mt-4 text-[1.35rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
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
                <span className="section-eyebrow">Ce urmează</span>
                <h2 className="cta-title mt-5">Dacă vrei un site mai clar și mai bine construit, putem începe cu o discuție scurtă despre contextul proiectului.</h2>
                <p className="mt-5 max-w-[40rem] text-lg leading-8 text-[var(--ink-soft)]">
                  De acolo vedem împreună ce are sens: site nou, redesign sau o primă etapă mai compactă.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Intră în contact
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
