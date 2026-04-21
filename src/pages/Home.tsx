/*
  Design note — Home.tsx
  Filosofie: Systems Atelier. Homepage-ul trebuie să combine poziționarea comercială
  cu semnale clare de expertiză tehnică, într-un ritm aerisit și matur.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
        <section className="section-shell hero-shell overflow-hidden">
          <div className="content-frame grid gap-14 py-20 md:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-32">
            <div className="flex flex-col gap-8 lg:max-w-[44rem]">
              <span className="section-eyebrow" data-reveal="fade">
                {siteContent.home.hero.eyebrow}
              </span>

              <div className="grid gap-6" data-reveal="mask">
                <h1 className="hero-title">{siteContent.home.hero.title}</h1>
              </div>

              <p className="max-w-[42rem] text-[1.05rem] leading-8 text-[var(--ink-soft)] md:text-[1.12rem]" data-reveal="up">
                {siteContent.home.hero.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row" data-reveal="up">
                <Link to={siteContent.home.hero.primaryCta.to} className="btn-primary">
                  {siteContent.home.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={siteContent.home.hero.secondaryCta.to} className="btn-secondary">
                  {siteContent.home.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="hero-panel grid gap-6 self-start" data-reveal="scale">
              <div className="flex items-center justify-between gap-4">
                <span className="panel-title">System note</span>
                <span className="mono-label">BBL / website build</span>
              </div>

              <div className="grid gap-4">
                <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                  {siteContent.home.hero.supportTitle}
                </h2>
                <p className="max-w-[32rem] text-base leading-7 text-[var(--ink-soft)]">
                  Un website bun nu este doar prezentabil. El trebuie să fie ușor de înțeles, ușor de folosit și suficient de bine construit încât să poată evolua fără haos.
                </p>
              </div>

              <div className="support-list">
                {siteContent.home.hero.supportItems.map((item, index) => (
                  <div key={item} className="support-list-item">
                    <span className="support-list-index">0{index + 1}</span>
                    <p className="text-base leading-7 text-[var(--ink-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-[var(--line)] bg-[rgba(255,255,255,0.22)]">
          <div className="content-frame py-10 md:py-12">
            <div className="metric-strip" data-reveal="up">
              <div className="metric-grid metric-grid-4">
                {siteContent.home.metrics.map((item) => (
                  <article key={item.label} className="metric-item">
                    <span className="metric-value">{item.value}</span>
                    <p className="metric-label">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <SectionHeading
              eyebrow={siteContent.home.offers.eyebrow}
              title={siteContent.home.offers.title}
              body={siteContent.home.offers.body}
              className="max-w-[44rem]"
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {siteContent.home.offers.items.map((item) => (
                <article key={item.title} className="surface-card flex flex-col gap-4" data-reveal="up">
                  <span className="mono-label">Format</span>
                  <h3 className="text-[1.55rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                  <p className="text-[0.98rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--surface-strong)]">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="grid gap-8">
                <SectionHeading
                  eyebrow={siteContent.home.capabilities.eyebrow}
                  title={siteContent.home.capabilities.title}
                  body={siteContent.home.capabilities.body}
                  className="max-w-[34rem]"
                />

                <div className="quote-block max-w-[32rem]" data-reveal="fade">
                  <p className="text-base leading-7">
                    Designul bun devine credibil atunci când se vede că în spate există logică de structură, disciplină de implementare și grijă pentru cum va funcționa site-ul după lansare.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {siteContent.home.capabilities.items.map((item) => (
                  <article key={item.title} className="proof-card flex flex-col gap-3" data-reveal="up">
                    <span className="mono-label">Capability</span>
                    <h3 className="text-[1.35rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
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
              eyebrow={siteContent.home.processPreview.eyebrow}
              title={siteContent.home.processPreview.title}
              body={siteContent.home.processPreview.body}
              className="max-w-[40rem]"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {siteContent.home.processPreview.steps.map((step) => (
                <article key={step.number} className="process-card flex flex-col gap-5" data-reveal="up">
                  <span className="process-card-number">{step.number}</span>
                  <div className="grid gap-3">
                    <h3 className="text-[1.5rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{step.title}</h3>
                    <p className="text-[0.98rem] leading-7 text-[var(--ink-soft)]">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="content-frame">
            <div className="cta-panel" data-reveal="up">
              <div className="max-w-3xl">
                <span className="section-eyebrow">Pasul următor</span>
                <h2 className="cta-title mt-5">{siteContent.home.closing.title}</h2>
                <p className="mt-5 max-w-[42rem] text-lg leading-8 text-[var(--ink-soft)]">
                  {siteContent.home.closing.body}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to={siteContent.home.closing.primaryCta.to} className="btn-primary">
                  {siteContent.home.closing.primaryCta.label}
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
