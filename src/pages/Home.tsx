/*
  Design note — Home.tsx
  Filosofie: landing page premium pentru servicii B2B. Hero-ul trebuie să fie full-width,
  cu video integrat pe toată lățimea ecranului și copy clar, lizibil, orientat spre conversie.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import EditorialGraphic from '@/components/EditorialGraphic';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

const hero = siteContent.home.hero;
const trust = siteContent.home.trust;

const heroProof = [
  {
    title: 'Mesaj clar',
    body: 'Clientul înțelege rapid ce oferi și cui te adresezi.',
  },
  {
    title: 'Imagine profesionistă',
    body: 'Designul susține încrederea și poziționarea firmei.',
  },
  {
    title: 'Contact mai simplu',
    body: 'Structura și CTA-urile duc natural către cerere de ofertă.',
  },
] as const;

const sectionSupport = [
  {
    title: 'Structură pentru decizie',
    body: 'Punem în ordinea corectă serviciile, diferențiatorii și pașii prin care un client ajunge la contact.',
  },
  {
    title: 'Imagine care inspiră încredere',
    body: 'Designul trebuie să arate profesionist și să susțină nivelul real al firmei, nu doar să fie modern.',
  },
  {
    title: 'Flux clar către contact',
    body: 'CTA-urile, secțiunile și formularele sunt plasate astfel încât cererea de ofertă să fie un pas firesc.',
  },
] as const;

const offerFormats = [
  {
    title: trust.items[0],
    body: 'Pentru firme care trebuie să explice clar serviciile, echipa și motivele pentru care merită contactate.',
    tag: 'Claritate + încredere',
  },
  {
    title: trust.items[1],
    body: 'Pentru campanii, oferte sau servicii unde vrei o singură acțiune clară: contact, înscriere sau cerere de ofertă.',
    tag: 'Focus pe conversie',
  },
  {
    title: trust.items[2],
    body: 'Pentru companii care au deja un site, dar vor o versiune mai credibilă, mai matură și mai bine organizată.',
    tag: 'Repoziționare vizuală',
  },
  {
    title: trust.items[3],
    body: 'Pentru business-uri cu produse care au nevoie de catalog clar, pagini de produs curate și flux simplu către comandă.',
    tag: 'Vânzare online',
  },
  {
    title: trust.items[4],
    body: 'Pentru proiecte care au nevoie de interfață coerentă, sistem de componente și o imagine digitală bine controlată.',
    tag: 'Coerență de brand',
  },
  {
    title: trust.items[5],
    body: 'Pentru echipe care au deja designul sau structura și au nevoie de dezvoltare curată, rapidă și responsive.',
    tag: 'Execuție tehnică',
  },
] as const;

const closingSignals = [
  'Oferta nu este înțeleasă în primele secunde.',
  'Site-ul actual arată sub nivelul firmei.',
  'Vizitatorul ajunge greu la formular sau cerere de ofertă.',
] as const;

const projectTypeSupport = [
  {
    label: 'Pentru cine',
    value: 'Firme de servicii, business-uri locale și companii care trebuie să explice clar ce oferă.',
  },
  {
    label: 'Ce alegem',
    value: 'Site de prezentare, landing page, redesign sau magazin online, în funcție de obiectivul real.',
  },
  {
    label: 'Ce urmărim',
    value: 'Mesaj clar, structură logică și traseu simplu către apel, formular sau cerere de ofertă.',
  },
] as const;

const projectTypeHighlights = [
  {
    title: 'Structură pentru ofertă',
    body: 'Așezăm paginile, secțiunile și ordinea informației astfel încât un client să înțeleagă repede ce primește.',
  },
  {
    title: 'Traseu clar spre acțiune',
    body: 'Gândim CTA-urile, formularul și zonele de încredere în funcție de felul în care vrei să vină lead-urile.',
  },
] as const;

const closingSupportCards = [
  {
    title: 'Ce primim de la tine',
    body: 'Context despre firmă, servicii, public și ce nu mai funcționează în site-ul actual.',
  },
  {
    title: 'Ce primești de la noi',
    body: 'Direcție clară, priorități de pagini și recomandarea potrivită pentru următorul pas.',
  },
] as const;

const homeOfferGraphicMetrics = [
  { value: '4', label: 'Formate principale de proiect' },
  { value: '3', label: 'Obiective urmărite în paralel' },
  { value: '1', label: 'Direcție aleasă clar pentru business' },
  { value: '24h', label: 'Claritate mai bună încă din structură' },
] as const;

const homeProjectGraphicMetrics = [
  { value: 'B2B', label: 'Servicii și firme comerciale' },
  { value: 'Local', label: 'Business-uri cu contact rapid' },
  { value: 'UI', label: 'Sisteme clare de pagini și componente' },
  { value: 'Shop', label: 'E-commerce și pagini de vânzare' },
] as const;

const homeClosingGraphicMetrics = [
  { value: '01', label: 'Audit rapid al mesajului actual' },
  { value: '02', label: 'Direcție pentru structura nouă' },
  { value: '03', label: 'Priorități de pagini și CTA-uri' },
  { value: '04', label: 'Plan clar pentru pasul următor' },
] as const;

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
        <section className="home-hero section-shell overflow-hidden">
          <div className="hero-stage" aria-hidden="true">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/hero-dow-poster.jpg"
            >
              <source src="/media/hero-dow.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay" />
          </div>

          <div className="home-hero-inner">
            <div className="content-frame">
              <div className="hero-copy-shell flex max-w-[42rem] flex-col gap-8" data-reveal="up">
                <span className="section-eyebrow max-w-lg" data-reveal="fade">
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

                <div className="hero-actions flex flex-wrap gap-4" data-reveal="up">
                  <Link to={hero.primaryCta.to} className="btn-primary btn-primary-hero">
                    {hero.primaryCta.label}
                  </Link>
                  <Link to={hero.secondaryCta.to} className="btn-secondary btn-secondary-hero">
                    {hero.secondaryCta.label}
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-3" data-reveal="up">
                  {hero.checkpoints.map((checkpoint) => (
                    <span key={checkpoint} className="checkpoint-pill">
                      {checkpoint}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hero-proof-grid" data-reveal="up">
                {heroProof.map((item) => (
                  <article key={item.title} className="hero-proof-card">
                    <h2 className="text-base font-medium tracking-[-0.02em] text-[var(--text-primary)] md:text-lg">{item.title}</h2>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-white/8 bg-[rgba(10,14,24,0.76)]">
          <div className="content-frame py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
              <div className="max-w-[31rem]" data-reveal="up">
                <span className="section-eyebrow">{trust.eyebrow}</span>
                <h2 className="cta-title mt-5 max-w-[14ch] md:max-w-[15ch]">
                  Alegem tipul de site după obiectivul business-ului, nu după un șablon generic.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                  Uneori ai nevoie de un site de prezentare clar și credibil. Alteori, de un landing page orientat spre ofertă sau de un magazin online bine organizat. Structura se decide în funcție de cum vin clienții către tine.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/services" className="btn-secondary">
                    Vezi toate serviciile
                  </Link>
                  <Link to="/contact" className="btn-primary">
                    Discută proiectul
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <EditorialGraphic
                  className="md:col-span-2 xl:col-span-3"
                  eyebrow="Diagram ofertă"
                  title="Alegem formatul și traseul comercial înainte să desenăm secțiunile finale."
                  variant="signal"
                  metrics={homeOfferGraphicMetrics}
                  points={[
                    'Separăm clar site-ul de prezentare de landing page și de e-commerce.',
                    'Punem în aceeași schemă mesajul, paginile și CTA-urile.',
                    'Evităm un site prea mare când business-ul are nevoie de claritate, nu de complexitate.',
                  ]}
                  footer="Structură, design și lansare într-un singur fir logic"
                />

                {offerFormats.map((item) => (
                  <article key={item.title} className="mini-stat-card flex h-full flex-col gap-4" data-reveal="up">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.tag}</span>
                    <h3 className="text-xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
              <SectionHeading
                eyebrow="De ce funcționează"
                title="Un site bun spune clar cine ești, ce oferi și de ce ar trebui un client să te contacteze."
                body="Construim pagini care explică simplu serviciile, susțin imaginea firmei și conduc vizitatorul natural către formular, apel sau cerere de ofertă."
                className="max-w-[33rem]"
              />

              <div className="grid gap-4 lg:pl-6">
                {sectionSupport.map((item) => (
                  <article key={item.title} className="mini-stat-card flex flex-col gap-3" data-reveal="up">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">Argument</span>
                    <h3 className="text-xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

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
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.82fr] lg:items-start lg:gap-12">
              <SectionHeading
                eyebrow="Tipuri de proiecte"
                title="Construim site-uri adaptate tipului de business, obiectivului și modului în care vin clienții către tine."
                body="Fie că vorbim despre firme de servicii, business-uri locale sau pagini de campanie, organizăm site-ul astfel încât mesajul să fie clar și contactul să vină mai ușor."
                className="max-w-[34rem]"
              />

              <div className="grid gap-4 lg:pl-2">
                <div className="mini-stat-card flex h-full flex-col gap-5" data-reveal="up">
                  <span className="section-eyebrow !text-[0.66rem]">Cum alegem direcția</span>
                  <div className="grid gap-4">
                    {projectTypeSupport.map((item) => (
                      <div key={item.label} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {projectTypeHighlights.map((item) => (
                    <article key={item.title} className="mini-stat-card flex h-full flex-col gap-3" data-reveal="up">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">Direcție</span>
                      <h3 className="text-xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                      <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                    </article>
                  ))}
                </div>

                <EditorialGraphic
                  eyebrow="Hartă de proiect"
                  title="Punem același sistem de claritate peste tipuri diferite de business și pagini."
                  variant="orbit"
                  metrics={homeProjectGraphicMetrics}
                  points={[
                    'Oferta trebuie citită repede, indiferent de domeniu.',
                    'Designul și conținutul trebuie să ducă spre aceeași acțiune.',
                  ]}
                  footer="Mesaj + structură + conversie într-o compoziție unitară"
                />
              </div>
            </div>

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
            <div className="cta-panel grid gap-10 lg:grid-cols-[1fr_0.94fr] lg:items-start lg:gap-12" data-reveal="up">
              <div className="max-w-[44rem]">
                <span className="section-eyebrow">Următorul pas</span>
                <h2 className="cta-title mt-4 max-w-[18ch]">{siteContent.home.closing.title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                  {siteContent.home.closing.body}
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {closingSupportCards.map((item) => (
                    <article key={item.title} className="mini-stat-card flex h-full flex-col gap-3">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">Clarificare</span>
                      <h3 className="text-lg leading-tight text-[var(--text-primary)]">{item.title}</h3>
                      <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to={siteContent.home.closing.primaryCta.to} className="btn-primary btn-primary-hero inline-flex items-center gap-3">
                    {siteContent.home.closing.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="btn-secondary btn-secondary-hero">
                    Vezi ce putem construi
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 lg:pl-2">
                <div className="mini-stat-card flex h-full flex-col gap-4">
                  <span className="section-eyebrow !text-[0.66rem]">Semne că merită refăcut</span>
                  <div className="grid gap-3">
                    {closingSignals.map((signal, index) => (
                      <div key={signal} className="flex items-start gap-4 border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                        <span className="text-[1.35rem] leading-none tracking-[-0.06em] text-[var(--accent-light)]">0{index + 1}</span>
                        <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{signal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <EditorialGraphic
                  eyebrow="Audit vizual"
                  title="Vedem rapid unde se rupe claritatea și cum poate arăta o versiune mai coerentă a site-ului."
                  variant="contact"
                  metrics={homeClosingGraphicMetrics}
                  points={[
                    'Identificăm secțiunile care nu susțin încrederea.',
                    'Separăm urgentul de ce poate veni într-o etapă ulterioară.',
                    'Stabilim ce tip de pagini are sens pentru obiectivul real.',
                  ]}
                  footer="Pasul următor: discuție scurtă și direcție clară"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
