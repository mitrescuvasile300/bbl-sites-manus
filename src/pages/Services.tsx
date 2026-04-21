/*
  Design note — Services.tsx
  Filosofie: editorial cinematic tech. Pagina de servicii trebuie să pară un cadru de lucru solid,
  nu o listă generică. Fiecare bloc trebuie să explice clar valoarea și livrabilele.
*/

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import EditorialGraphic from '@/components/EditorialGraphic';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

const servicesHeroSupport = [
  {
    label: 'Livrăm frecvent',
    value: 'Site-uri de prezentare, landing page-uri, redesign-uri și magazine online construite pentru claritate și conversie.',
  },
  {
    label: 'Pentru cine',
    value: 'IMM-uri, companii de servicii, business-uri locale, firme B2B și branduri care au nevoie de o imagine mai solidă online.',
  },
  {
    label: 'Rezultat urmărit',
    value: 'Mai multă încredere, traseu mai simplu către contact și un site care susține vânzarea, nu doar prezența.',
  },
] as const;

const siteTypeSupport = [
  'Alegem tipul de site în funcție de obiectivul comercial real.',
  'Clarificăm din start ce pagini sunt esențiale și ce poate veni în etape.',
  'Păstrăm aceeași logică de design și conversie indiferent de formatul ales.',
] as const;

const businessTypeSupport = [
  {
    title: 'Decizie diferită',
    body: 'Un client B2B nu citește și nu decide ca un client local sau ca un cumpărător din e-commerce.',
  },
  {
    title: 'Structură adaptată',
    body: 'De aceea ajustăm mesajul, ordinea secțiunilor și CTA-urile în funcție de contextul fiecărui business.',
  },
] as const;

const engagementSupport = [
  'Putem începe rapid cu varianta minimă care aduce claritate și contact.',
  'Extindem apoi în etape, fără să pierdem coerența vizuală sau tehnică.',
  'Stabilim de la început ce este prioritar și ce poate veni după lansare.',
] as const;

const servicesHeroGraphicMetrics = [
  { value: 'UX', label: 'Mesaj și structură înainte de efecte' },
  { value: 'UI', label: 'Sistem vizual coerent pentru pagini' },
  { value: 'DEV', label: 'Implementare curată și responsive' },
  { value: 'CTA', label: 'Flux clar către contact și ofertă' },
] as const;

const servicesDeliveryGraphicMetrics = [
  { value: '01', label: 'Audit și prioritizare' },
  { value: '02', label: 'Paginile esențiale' },
  { value: '03', label: 'Direcție vizuală și secțiuni' },
  { value: '04', label: 'Lansare și extindere ulterioară' },
] as const;

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMotion(pageRef);

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(16,24,44,1)_0%,rgba(8,10,18,1)_58%,rgba(5,6,12,1)_100%)]">
        <div className="content-frame grid gap-8 py-20 md:py-24 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
          <SectionHeading
            eyebrow={siteContent.services.hero.eyebrow}
            title={siteContent.services.hero.title}
            body={siteContent.services.hero.body}
            className="max-w-[36rem]"
          />

            <div className="grid gap-4 lg:pl-6">
              <div className="mini-stat-card flex flex-col gap-4" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">Cum arată oferta</span>
                <div className="grid gap-4">
                  {servicesHeroSupport.map((item) => (
                    <div key={item.label} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <EditorialGraphic
                eyebrow="Sistem de servicii"
                title="Oferta este gândită ca o structură continuă: strategie, design, dezvoltare și conversie."
                variant="signal"
                metrics={servicesHeroGraphicMetrics}
                points={[
                  'Fiecare etapă pregătește următoarea, nu funcționează izolat.',
                  'Păstrăm aceeași logică de claritate de la homepage la paginile interne.',
                ]}
                footer="Servicii conectate într-un flux unic de livrare"
              />
            </div>

        </div>
      </section>

      <section className="section-shell">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.services.items.map((service) => (
              <article key={service.number} className="service-card" data-reveal="up">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="service-card-number">{service.number}</span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)]">
                      {service.title}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
                      {service.intro}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="inline-flex items-start gap-3 rounded-none border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-6 text-[var(--text-secondary)]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-light)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Tipuri de site-uri"
              title="Construim tipul de website potrivit pentru oferta, publicul și obiectivul business-ului tău."
              body="Nu toate firmele au nevoie de același format. De aceea diferențiem clar între site de prezentare, landing page, redesign și magazin online."
              className="max-w-[34rem]"
            />

            <div className="mini-stat-card flex flex-col gap-4 lg:ml-auto lg:max-w-[28rem]" data-reveal="up">
              <span className="section-eyebrow !text-[0.66rem]">Cum decidem formatul</span>
              <div className="grid gap-3">
                {siteTypeSupport.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                    <span className="text-[1.35rem] leading-none tracking-[-0.06em] text-[var(--accent-light)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {siteContent.services.siteTypes.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Pentru cine lucrăm"
              title="Adaptăm structura și designul în funcție de tipul de afacere, nu folosim aceeași rețetă pentru toți."
              body="Fie că vorbim despre companii B2B, IMM-uri, clinici, afaceri locale sau branduri cu produse, construim site-ul în jurul modului în care acei clienți decid și cumpără."
              className="max-w-[36rem]"
            />

            <div className="grid gap-4 lg:pl-6">
              {businessTypeSupport.map((item) => (
                <article key={item.title} className="mini-stat-card flex flex-col gap-3" data-reveal="up">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">Context</span>
                  <h3 className="text-xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                  <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.services.businessTypes.map((item) => (
              <article key={item.title} className="feature-card" data-reveal="up">
                <h3 className="text-2xl leading-tight text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-base leading-7 text-[var(--text-secondary)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Cum putem colabora"
              title="Alegem forma de lucru potrivită în funcție de ce are nevoie acum business-ul tău."
              body="Putem porni cu un site nou, cu un redesign, cu un magazin online sau cu o pagină de campanie, în funcție de obiectiv, buget și urgență."
              className="max-w-[34rem]"
            />

            <div className="grid gap-4 lg:ml-auto lg:max-w-[28rem]">
              <div className="mini-stat-card flex flex-col gap-4" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">Cum pornim proiectul</span>
                <div className="grid gap-3">
                  {engagementSupport.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 border-t border-white/8 pt-3 first:border-t-0 first:pt-0">
                      <span className="text-[1.35rem] leading-none tracking-[-0.06em] text-[var(--accent-light)]">0{index + 1}</span>
                      <p className="text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <EditorialGraphic
                eyebrow="Flux de livrare"
                title="Pornim compact, validăm repede și extindem doar ce aduce valoare reală în proiect."
                variant="flow"
                metrics={servicesDeliveryGraphicMetrics}
                points={[
                  'Definim ce intră în prima lansare și ce rămâne pentru etapa următoare.',
                  'Nu umflăm proiectul cu pagini sau funcții care nu ajută obiectivul comercial.',
                ]}
                footer="Implementare etapizată, fără pierdere de coerență"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.services.engagementModels.map((item) => (
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
              eyebrow="Întrebări frecvente"
              title="Răspunsuri scurte la întrebările pe care le primim cel mai des înainte de începerea unui proiect."
              body="Dacă vrei să înțelegi mai bine cum lucrăm, ce livrăm și de unde începem, aici găsești cele mai importante clarificări."
              className="max-w-[32rem]"
            />

            <div className="grid gap-5">
              {siteContent.services.faq.map((item) => (
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
              <span className="section-eyebrow">Discuție inițială</span>
              <h2 className="cta-title mt-4">
                Putem începe cu o discuție scurtă despre site-ul actual, obiectivele firmei și ce ar trebui să facă mai bine noua versiune.
              </h2>
            </div>

            <Link to="/contact" className="btn-primary mt-10 inline-flex items-center gap-3">
              Programează o discuție
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
