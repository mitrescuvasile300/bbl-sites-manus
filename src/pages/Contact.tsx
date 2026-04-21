/*
  Design note — Contact.tsx
  Filosofie: editorial cinematic tech. Pagina de contact trebuie să reducă fricțiunea,
  să inspire încredere și să transforme formularul într-un început clar de conversație.
*/

import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
import EditorialGraphic from '@/components/EditorialGraphic';
import SectionHeading from '@/components/SectionHeading';
import { usePageMotion } from '@/hooks/usePageMotion';
import { siteContent } from '@/lib/siteContent';

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
};

const contactHeroSupport = [
  {
    label: 'Potrivit pentru',
    value: 'site nou, redesign, landing page sau magazin online care trebuie să genereze discuții mai bune.',
  },
  {
    label: 'Ce ne trimiți',
    value: 'câteva informații despre firmă, servicii, obiectiv și ce nu mai funcționează bine în site-ul actual.',
  },
  {
    label: 'Ce primești',
    value: 'o direcție clară despre ce tip de site are sens, ce pagini sunt prioritare și care este pasul următor.',
  },
] as const;

const contactHeroGraphicMetrics = [
  { value: '24h', label: 'Răspuns normal pentru primul pas' },
  { value: 'Brief', label: 'Mesaj pregătit clar din formular' },
  { value: 'Route', label: 'Direcție pentru tipul de site' },
  { value: 'Next', label: 'Pașii următori explicați simplu' },
] as const;

const contactFormGraphicMetrics = [
  { value: '01', label: 'Context despre firmă și servicii' },
  { value: '02', label: 'Obiectivul noului site' },
  { value: '03', label: 'Ce nu mai funcționează acum' },
  { value: '04', label: 'Buget și pas următor' },
] as const;

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState('');

  usePageMotion(pageRef);

  const budgetFallback = useMemo(() => siteContent.contact.budgetOptions.at(-1) ?? 'Încă evaluăm', []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = siteContent.contact.form.errors.name;
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = siteContent.contact.form.errors.email;
    }

    if (!form.message.trim()) {
      nextErrors.message = siteContent.contact.form.errors.message;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildBrief = () => {
    return [
      'Salut,',
      '',
      'Trimit mai jos un brief scurt pentru un posibil proiect BBL Sites.',
      '',
      `Nume: ${form.name}`,
      `Email: ${form.email}`,
      `Companie / brand: ${form.company || '—'}`,
      `Buget estimativ: ${form.budget || budgetFallback}`,
      '',
      'Context proiect:',
      form.message,
      '',
      'Mulțumesc!',
    ].join('\n');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('Te rog revizuiește câmpurile marcate și încearcă din nou.');
      return;
    }

    const brief = buildBrief();

    try {
      await navigator.clipboard.writeText(brief);
      setStatus(siteContent.contact.form.success);
    } catch {
      setStatus('Brief-ul a fost pregătit. Dacă browserul nu permite copierea automată, îl poți copia manual după deschiderea emailului.');
    }

    const mailto = `mailto:?subject=${encodeURIComponent(`Solicitare proiect — ${form.company || form.name}`)}&body=${encodeURIComponent(brief)}`;
    window.location.href = mailto;
  };

  return (
    <Layout>
      <div ref={pageRef}>
      <section className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(17,24,43,1)_0%,rgba(8,10,18,1)_58%,rgba(4,6,10,1)_100%)]">
        <div className="content-frame grid gap-8 py-20 md:py-24 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-12">
          <SectionHeading
            eyebrow={siteContent.contact.hero.eyebrow}
            title={siteContent.contact.hero.title}
            body={siteContent.contact.hero.body}
            className="max-w-[35rem]"
          />

            <div className="grid gap-4 lg:pl-6">
              <div className="mini-stat-card flex flex-col gap-4" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">Ce clarificăm din prima</span>
                <div className="grid gap-4">
                  {contactHeroSupport.map((item) => (
                    <div key={item.label} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] md:text-[0.96rem]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <EditorialGraphic
                eyebrow="Start de conversație"
                title="Formularul și primul răspuns trebuie să reducă fricțiunea, nu să o crească."
                variant="contact"
                metrics={contactHeroGraphicMetrics}
                points={[
                  'Clarificăm repede dacă ai nevoie de site nou, redesign sau landing page.',
                  'Îți răspundem cu o direcție, nu doar cu un mesaj generic de primire.',
                ]}
                footer="Contactul devine începutul unui proces clar"
              />
            </div>

        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[rgba(10,14,24,0.72)]">
        <div className="content-frame py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.contact.cards.map((item) => (
              <article key={item.title} className="mini-principle-card" data-reveal="up">
                <span className="section-eyebrow !text-[0.66rem]">{item.title}</span>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div className="grid gap-4">
                <SectionHeading
                  eyebrow={siteContent.contact.form.title}
                  title="Spune-ne pe scurt ce tip de site îți dorești, iar noi revenim cu o direcție clară și cu următorii pași."
                  body={siteContent.contact.form.description}
                  className="max-w-[30rem]"
                />

                <EditorialGraphic
                  eyebrow="Ce ne ajută"
                  title="Un brief bun înseamnă câteva informații clare despre business, obiectiv și blocajele actuale."
                  variant="flow"
                  metrics={contactFormGraphicMetrics}
                  points={[
                    'Nu trebuie să ai totul pregătit perfect ca să pornim discuția.',
                    'Ne ajută cel mai mult claritatea, nu volumul mare de text.',
                  ]}
                  footer="Cu cât brief-ul e mai clar, cu atât direcția vine mai repede"
                />
              </div>

              <div className="form-panel" data-reveal="up">

              <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">
                      {siteContent.contact.form.labels.name}
                    </label>
                    <input
                      id="name"
                      className="form-input"
                      placeholder={siteContent.contact.form.placeholders.name}
                      value={form.name}
                      onChange={(event) => {
                        setForm((prev) => ({ ...prev, name: event.target.value }));
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                    />
                    {errors.name ? <span className="form-error">{errors.name}</span> : null}
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="email">
                      {siteContent.contact.form.labels.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder={siteContent.contact.form.placeholders.email}
                      value={form.email}
                      onChange={(event) => {
                        setForm((prev) => ({ ...prev, email: event.target.value }));
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                    />
                    {errors.email ? <span className="form-error">{errors.email}</span> : null}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr_0.72fr]">
                  <div className="form-field">
                    <label className="form-label" htmlFor="company">
                      {siteContent.contact.form.labels.company}
                    </label>
                    <input
                      id="company"
                      className="form-input"
                      placeholder={siteContent.contact.form.placeholders.company}
                      value={form.company}
                      onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="budget">
                      {siteContent.contact.form.labels.budget}
                    </label>
                    <select
                      id="budget"
                      className="form-input"
                      value={form.budget}
                      onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
                    >
                      <option value="">{siteContent.contact.form.placeholders.budget}</option>
                      {siteContent.contact.budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">
                    {siteContent.contact.form.labels.message}
                  </label>
                  <textarea
                    id="message"
                    className="form-input min-h-[180px] resize-y"
                    placeholder={siteContent.contact.form.placeholders.message}
                    value={form.message}
                    onChange={(event) => {
                      setForm((prev) => ({ ...prev, message: event.target.value }));
                      setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                  />
                  {errors.message ? <span className="form-error">{errors.message}</span> : null}
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <button type="submit" className="btn-primary inline-flex items-center gap-3">
                    {siteContent.contact.form.submit}
                    <Mail className="h-4 w-4" />
                  </button>

                  <p className="text-sm leading-6 text-[var(--text-muted)]">
                    La trimitere, pregătim automat un email cu toate informațiile completate.
                  </p>
                </div>
              </form>

              {status ? (
                <div className="status-note mt-6 inline-flex items-start gap-3" role="status">
                  <Copy className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-light)]" />
                  <span>{status}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-secondary)]">
        <div className="content-frame py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Întrebări utile înainte să ne scrii"
              title="Nu trebuie să ai totul perfect pregătit. E suficient să ne spui clar cu ce se ocupă firma și ce vrei să obții."
              className="max-w-[29rem]"
            />

            <div className="grid gap-5">
              {siteContent.contact.faq.map((item) => (
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
              <span className="section-eyebrow">Vezi și procesul</span>
              <h2 className="cta-title mt-4">
                Dacă vrei să știi cum lucrăm de la brief la lansare, poți vedea și pașii prin care construim fiecare proiect.
              </h2>
            </div>

            <Link to="/process" className="btn-secondary mt-10 inline-flex items-center gap-3">
              Vezi procesul
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
