/*
  Design note — About.tsx
  Filosofie: editorial cinematic tech. Pagina despre trebuie să explice temperamentul studioului,
  cu o poveste sobru-premium, argumentată prin principii și prin felul în care este construită pagina.
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
      <section className="section-shell overflow-hidden bg-[linear-gradient(150deg,rgba(18,26,44,1)_0%,rgba(10,12,20,1)_52%,rgba(5,6,10,1)_100%)]">
        <div className="content-frame grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center md:py-24">
          <SectionHeading
            eyebrow={siteContent.about.hero.eyebrow}
            title={siteContent.about.hero.title}
            body={siteContent.about.hero.body}
            className="max-w-[34rem]"
          />

          <div className="about-hero-media" data-reveal="up">
            <img src="/about-hero.jpg" alt="Cadru editorial pentru BBL Sites" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Poveste"
              title="Lucrăm compact, aproape de decizie și cu multă atenție pentru felul în care un site susține percepția unui business."
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
          <SectionHeading
            eyebrow="Principii"
            title="Trei reguli după care luăm deciziile mari și detaliile mici."
            className="max-w-[30rem]"
          />

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
              title="Tehnologii și sisteme pe care le folosim pentru a livra rapid, curat și repetabil."
              body="Stack-ul contează pentru că influențează viteza, flexibilitatea și felul în care site-ul poate fi extins după lansare."
              className="max-w-[30rem]"
            />

            <div className="flex flex-wrap gap-3" data-reveal="up">
              {siteContent.about.toolkit.map((item) => (
                <span key={item} className="checkpoint-pill checkpoint-pill-muted">
                  {item}
                </span>
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
              <h2 className="cta-title mt-4">
                Dacă tonul și felul nostru de lucru se potrivesc cu ce cauți, următorul pas este o discuție scurtă despre contextul proiectului tău.
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
