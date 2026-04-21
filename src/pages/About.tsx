/*
  Design note — About.tsx
  Filosofie: editorial cinematic tech. Pagina despre trebuie să explice temperamentul studioului,
  cu o poveste sobru-premium, argumentată prin principii și prin felul în care este construită pagina.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import EditorialGraphic from '@/components/EditorialGraphic';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

const aboutPrinciplesSupport = [
  'Pornim de la mesaj și structură, nu de la efecte puse arbitrar.',
  'Designul trebuie să susțină încrederea înainte să caute originalitatea cu orice preț.',
  'Implementarea trebuie să rămână curată, rapidă și ușor de extins după lansare.',
] as const;

const aboutToolkitSupport = [
  {
    label: 'Alegem tehnologiile pentru',
    value: 'afișare bună pe mobil, viteză, mentenanță simplă și o bază solidă pentru dezvoltări ulterioare.',
  },
  {
    label: 'Evităm',
    value: 'soluțiile complicate inutil, care arată bine doar în demo și devin greu de întreținut după publicare.',
  },
] as const;

const aboutStoryGraphicMetrics = [
  { value: 'RO', label: 'Copy orientat spre piața locală' },
  { value: 'B2B', label: 'Focus pe servicii și companii' },
  { value: 'Clear', label: 'Mesaj și ierarhie înainte de ornament' },
  { value: 'Fast', label: 'Implementare rapidă și curată' },
] as const;

const aboutToolkitGraphicMetrics = [
  { value: 'React', label: 'Interfețe clare și controlate' },
  { value: 'TS', label: 'Bază stabilă pentru extindere' },
  { value: 'Motion', label: 'Mișcare discretă, cu rol clar' },
  { value: 'UI', label: 'Sistem vizual coerent' },
] as const;

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(150deg,rgba(18,26,44,1)_0%,rgba(10,12,20,1)_52%,rgba(5,6,10,1)_100%)]">
          <div className="content-frame grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center md:py-24">
            <SectionHeading
              eyebrow={siteContent.about.hero.eyebrow}
              title={siteContent.about.hero.title}
              body={siteContent.about.hero.body}
              className="max-w-[34rem]"
            />

            <div className="grid gap-4">
              <div className="about-hero-media" data-reveal="up">
                <img src="/about-hero.jpg" alt="Cadru editorial pentru BBL Sites" className="h-full w-full object-cover" />
              </div>

              <EditorialGraphic
                eyebrow="Cadru de studio"
                title="Povestea noastră pornește din nevoia de a traduce servicii bune într-o prezență online clară și convingătoare."
                variant="story"
                metrics={aboutStoryGraphicMetrics}
                points={[
                  'Construim în jurul clarității, nu în jurul efectelor fără rol.',
                  'Fiecare alegere vizuală trebuie să susțină încrederea percepută.',
                ]}
                footer="Poveste, poziționare și execuție într-un singur sistem"
              />
            </div>
          </div>

      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Poveste"
              title="Construim site-uri pentru firme care au nevoie să se prezinte mai clar, mai profesionist și mai convingător online."
              className="max-w-[31rem]"
            />

            <div className="grid gap-6">
              {siteContent.about.story.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-[var(--text-secondary)] md:text-xl" data-reveal="up">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {siteContent.about.stats.map((item) => (
                  <article key={item.label} className="mini-stat-card" data-reveal="up">
                    <span className="mini-stat-value">{item.value}</span>
                    <p className="text-sm leading-6 text-[var(--text-secondary)]">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Principii"
              title="Trei principii după care construim fiecare site, de la mesaj la implementare."
              className="max-w-[30rem]"
            />

            <div className="mini-stat-card flex flex-col gap-4 lg:ml-auto lg:max-w-[28rem]" data-reveal="up">
              <span className="section-eyebrow !text-[0.66rem]">Ce nu negociem</span>
              <div className="grid gap-3">
                {aboutPrinciplesSupport.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                    <span className="text-[1.35rem] leading-none tracking-[-0.06em] text-[var(--accent-light)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.about.values.map((item) => (
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
              eyebrow="Instrumentar"
              title="Folosim tehnologii moderne care ne ajută să livrăm site-uri rapide, curate și ușor de extins."
              body="Alegem instrumente care susțin viteza de lucru, afișarea bună pe toate dispozitivele și o bază solidă pentru actualizări viitoare."
              className="max-w-[30rem]"
            />

            <div className="grid gap-4" data-reveal="up">
              <div className="flex flex-wrap gap-3">
                {siteContent.about.toolkit.map((item) => (
                  <span key={item} className="checkpoint-pill checkpoint-pill-muted">
                    {item}
                  </span>
                ))}
              </div>

              <EditorialGraphic
                eyebrow="Sistem tehnic"
                title="Alegem un stack care susține performanța, claritatea și viitoarele extinderi fără complicații inutile."
                variant="orbit"
                metrics={aboutToolkitGraphicMetrics}
                points={[
                  'Tehnologia trebuie să ajute pagina să pară solidă, nu doar modernă.',
                  'Designul și dezvoltarea sunt gândite ca același sistem, nu ca etape rupte între ele.',
                ]}
                footer="Instrumente moderne, alese pentru utilitate reală"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {aboutToolkitSupport.map((item) => (
                  <article key={item.label} className="mini-stat-card flex flex-col gap-3">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.label}</span>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24 md:pb-32">
        <div className="content-frame">
          <div className="cta-panel" data-reveal="up">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Ce urmează</span>
              <h2 className="cta-title mt-4">
                Dacă ai nevoie de un site nou sau de un redesign, următorul pas este o discuție scurtă despre firmă, obiective și direcția potrivită.
              </h2>
            </div>

            <Link to="/contact" className="btn-primary mt-10 inline-flex items-center gap-3">
              Intră în contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
