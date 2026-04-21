/*
  Design note — Process.tsx
  Filosofie: editorial cinematic tech. Pagina procesului trebuie să reducă incertitudinea,
  cu un ritm clar al etapelor și o prezentare care transmite ordine, nu complexitate artificială.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import EditorialGraphic from '@/components/EditorialGraphic';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

const processHeroSupport = [
  {
    label: 'Pornim cu',
    value: 'Obiective clare, public definit și o imagine realistă a site-ului actual.',
  },
  {
    label: 'Continuăm cu',
    value: 'Structură, conținut și design puse în ordinea corectă pentru a evita blocajele.',
  },
  {
    label: 'Închidem cu',
    value: 'Implementare, verificare și lansare într-o formă curată, ușor de folosit și de extins.',
  },
] as const;

const rhythmSupport = [
  'Feedback-ul scurt și clar reduce timpul pierdut între etape.',
  'Luăm deciziile importante când informația este deja suficient de clară.',
  'Prioritizăm paginile care aduc cel mai repede cereri și discuții utile.',
] as const;

const processFlowGraphicMetrics = [
  { value: '01', label: 'Audit și obiective' },
  { value: '02', label: 'Structură și copy de bază' },
  { value: '03', label: 'Design și reguli responsive' },
  { value: '04', label: 'Implementare și lansare' },
] as const;

const processRhythmGraphicMetrics = [
  { value: 'Short', label: 'Feedback concentrat' },
  { value: 'Clear', label: 'Decizii fără ambiguități' },
  { value: 'Live', label: 'Proiect ținut în mișcare' },
  { value: 'Focus', label: 'Priorități reale, nu zgomot' },
] as const;

export default function Process() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(140deg,rgba(14,22,40,1)_0%,rgba(7,10,18,1)_58%,rgba(4,6,10,1)_100%)]">
        <div className="content-frame grid gap-8 py-20 md:py-24 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
          <SectionHeading
            eyebrow={siteContent.process.hero.eyebrow}
            title={siteContent.process.hero.title}
            body={siteContent.process.hero.body}
            className="max-w-[35rem]"
          />

            <div className="grid gap-4 lg:pl-6">
              <div className="mini-stat-card flex flex-col gap-4" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">Cum arată procesul</span>
                <div className="grid gap-4">
                  {processHeroSupport.map((item) => (
                    <div key={item.label} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <EditorialGraphic
                eyebrow="Flux vizual"
                title="Facem procesul ușor de urmărit printr-o succesiune clară de decizii, nu prin pași complicați."
                variant="flow"
                metrics={processFlowGraphicMetrics}
                points={[
                  'Fiecare etapă are un rezultat concret, nu doar o discuție deschisă.',
                  'Clientul știe ce se decide acum și ce urmează imediat după.',
                ]}
                footer="Procesul rămâne clar de la brief până la lansare"
              />
            </div>

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
              title="Fiecare etapă are un scop clar și te apropie de un site gata de lansare."
              body="Mergem pas cu pas, astfel încât să fie clar ce decidem, ce construim și ce urmează în proiect."
              className="max-w-[31rem]"
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
          <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Ritmul colaborării"
              title="Ținem proiectul în mișcare fără să îl complicăm inutil."
              body="Lucrăm pe pași clari, cu feedback concentrat și decizii luate la momentul potrivit, astfel încât proiectul să avanseze constant."
              className="max-w-[33rem]"
            />

            <div className="grid gap-4 lg:ml-auto lg:max-w-[28rem]">
              <div className="mini-stat-card flex flex-col gap-4" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">Ce păstrăm simplu</span>
                <div className="grid gap-3">
                  {rhythmSupport.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                      <span className="text-[1.35rem] leading-none tracking-[-0.06em] text-[var(--accent-light)]">0{index + 1}</span>
                      <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <EditorialGraphic
                eyebrow="Ritm de lucru"
                title="Menținem proiectul fluent prin feedback scurt, decizii curate și priorități puse în ordinea corectă."
                variant="orbit"
                metrics={processRhythmGraphicMetrics}
                points={[
                  'Evităm pauzele lungi între pași și refacerile fără direcție.',
                  'Ne concentrăm pe paginile care trebuie să performeze primele.',
                ]}
                footer="Mai puțin blocaj, mai mult progres vizibil"
              />
            </div>
          </div>

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
              title="Răspunsuri rapide pentru lucrurile pe care vrei să le știi înainte să începem."
              className="max-w-[29rem]"
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
              <h2 className="cta-title mt-4">
                Dacă vrei, începem cu o discuție scurtă și un audit al site-ului actual, apoi stabilim cea mai bună variantă pentru pasul următor.
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
