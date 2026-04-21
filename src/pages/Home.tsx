/*
  Design note — Home.tsx
  Filosofie: editorial cinematic tech. Pagina principală trebuie să curgă ca o secvență de capitole,
  cu un hero cinematic, layout asimetric și secțiuni care construiesc progresiv claritatea ofertei.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

const hero = siteContent.home.hero;
const trust = siteContent.home.trust;

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef, { enableHeroScene: true });

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="home-hero section-shell overflow-hidden" data-hero-root>
        <div className="content-frame grid gap-16 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
          <div className="flex flex-col gap-8" data-hero-copy>
            <span className="section-eyebrow max-w-md" data-reveal="fade">
              {hero.eyebrow}
            </span>

            <div className="flex flex-col gap-2" data-reveal="mask">
              {hero.title.map((line) => (
                <h1 key={line} className="hero-title">
                  {line}
                </h1>
              ))}
            </div>

            <p className="hero-copy max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl" data-reveal="up">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4" data-reveal="up">
              <Link to={hero.primaryCta.to} className="btn-primary">
                {hero.primaryCta.label}
              </Link>
              <Link to={hero.secondaryCta.to} className="btn-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="hero-stage" data-hero-stage>
            <div className="hero-stage-grid">
              <div className="hero-orbit hero-orbit-a" />
              <div className="hero-orbit hero-orbit-b" />
              <div className="hero-panel hero-panel-lead">
                <span className="hero-panel-label">{hero.sideLabel}</span>
                <p className="hero-panel-copy">
                  Un website matur nu doar impresionează. El ordonează informația, stabilește ritmul și conduce vizitatorul către pasul următor.
                </p>
              </div>

              <div className="hero-panel hero-panel-stack">
                {hero.panels.map((panel) => (
                  <div key={panel.value} className="hero-stack-item">
                    <span className="hero-stack-value">{panel.value}</span>
                    <p className="hero-stack-copy">{panel.label}</p>
                  </div>
                ))}
              </div>

              <div className="hero-panel hero-panel-track">
                <div className="flex items-center justify-between gap-4">
                  <span className="hero-panel-label">{hero.scene.caption}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Home</span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {hero.scene.checkpoints.map((checkpoint) => (
                    <span key={checkpoint} className="checkpoint-pill">
                      {checkpoint}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[rgba(10,14,24,0.76)]">
        <div className="content-frame py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <span className="section-eyebrow">{trust.eyebrow}</span>
            <div className="flex flex-wrap gap-3">
              {trust.items.map((item) => (
                <span key={item} className="checkpoint-pill checkpoint-pill-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <SectionHeading
            eyebrow="De ce funcționează"
            title="Structurăm experiența astfel încât vizitatorul să înțeleagă repede, să simtă diferența și să știe ce are de făcut mai departe."
            body="Fiecare secțiune are un rol precis: clarifică oferta, ridică încrederea sau mută conversația către contact."
            className="max-w-[33rem]"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.home.highlights.map((item) => (
              <article key={item.title} className="feature-card" data-reveal="up">
                <span className="feature-card-index">0{siteContent.home.highlights.indexOf(item) + 1}</span>
                <h3 className="text-2xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-base leading-7 text-[var(--text-secondary)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <SectionHeading
            eyebrow="Lucrări și direcții"
            title="Secțiuni care pot arăta premium, dar rămân utile și credibile în conversația comercială."
            body="Am refăcut zona de proiecte astfel încât să susțină mai bine oferta, nu doar galeria de imagini."
            className="max-w-[31rem]"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {siteContent.home.caseStudies.map((study) => (
              <article key={study.title} className="case-card" data-reveal="up">
                <div className="case-card-media">
                  <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-7">
                  <span className="section-eyebrow !text-[0.68rem]">{study.label}</span>
                  <h3 className="text-2xl leading-tight text-[var(--text-primary)]">{study.title}</h3>
                  <p className="text-base leading-7 text-[var(--text-secondary)]">{study.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow={siteContent.home.processPreview.eyebrow}
              title={siteContent.home.processPreview.title}
              body={siteContent.home.processPreview.body}
              className="max-w-[30rem]"
            />

            <div className="grid gap-5">
              {siteContent.home.processPreview.steps.map((step) => (
                <article key={step.number} className="timeline-card" data-reveal="up">
                  <div className="timeline-number">{step.number}</div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl leading-tight text-[var(--text-primary)]">{step.title}</h3>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{step.description}</p>
                  </div>
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
              <span className="section-eyebrow">Următorul pas</span>
              <h2 className="cta-title mt-4">
                {siteContent.home.closing.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                {siteContent.home.closing.body}
              </p>
            </div>

            <Link to={siteContent.home.closing.primaryCta.to} className="btn-primary mt-10 inline-flex items-center gap-3">
              {siteContent.home.closing.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
