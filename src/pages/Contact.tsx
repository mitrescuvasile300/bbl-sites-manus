/*
  Design note — Contact.tsx
  Filosofie: Systems Atelier. Pagina de contact trebuie să reducă fricțiunea,
  să inspire încredere și să transforme formularul într-un început clar de conversație.
*/

import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
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
        <section className="section-shell hero-shell overflow-hidden">
          <div className="content-frame grid gap-12 py-20 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-32">
            <div className="grid gap-8">
              <SectionHeading
                eyebrow={siteContent.contact.hero.eyebrow}
                title={siteContent.contact.hero.title}
                body={siteContent.contact.hero.body}
                className="max-w-[40rem]"
              />

              <div className="surface-card max-w-[34rem]" data-reveal="up">
                <div className="flex items-center gap-3 text-[var(--accent-strong)]">
                  <Mail className="h-5 w-5" />
                  <span className="mono-label">Brief simplu, răspuns clar</span>
                </div>
                <p className="mt-4 text-[1.02rem] leading-8 text-[var(--ink-soft)]">
                  Nu ai nevoie de specificații perfecte. Este suficient să înțelegem contextul, iar de acolo structurăm împreună cea mai bună direcție de start.
                </p>
              </div>
            </div>

            <div className="hero-panel grid gap-6" data-reveal="scale">
              <div className="flex items-center justify-between gap-4">
                <span className="panel-title">Contact frame</span>
                <span className="mono-label">Low friction start</span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                {siteContent.contact.hero.supportTitle}
              </h2>

              <div className="support-list">
                {siteContent.contact.hero.supportItems.map((item, index) => (
                  <div key={item} className="support-list-item">
                    <span className="support-list-index">0{index + 1}</span>
                    <p className="text-base leading-7 text-[var(--ink-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-[var(--line)] bg-[rgba(255,255,255,0.24)]">
          <div className="content-frame py-10 md:py-12">
            <div className="grid gap-4 md:grid-cols-3">
              {siteContent.contact.cards.map((item) => (
                <article key={item.title} className="surface-card" data-reveal="up">
                  <span className="mono-label">Contact note</span>
                  <h3 className="mt-4 text-[1.25rem] leading-tight tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[var(--ink-soft)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div className="grid gap-8">
                <SectionHeading
                  eyebrow={siteContent.contact.form.title}
                  title="Spune-ne ce vrei să rezolve noul site, iar noi revenim cu direcția potrivită."
                  body={siteContent.contact.form.description}
                  className="max-w-[32rem]"
                />

                <div className="rule-grid">
                  <article className="rule-card" data-reveal="up">
                    <span className="mono-label">Ce ajută</span>
                    <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">
                      Cel mai util este să ne spui ce face business-ul, ce vrei să obții și unde simți că actualul site nu mai ajută.
                    </p>
                  </article>
                  <article className="rule-card" data-reveal="up">
                    <span className="mono-label">Cum răspundem</span>
                    <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">
                      Revenim cu întrebările potrivite, cu tipul de proiect recomandat și cu pasul cel mai bun pentru început.
                    </p>
                  </article>
                </div>
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
                      className="form-input min-h-[12rem] resize-y"
                      placeholder={siteContent.contact.form.placeholders.message}
                      value={form.message}
                      onChange={(event) => {
                        setForm((prev) => ({ ...prev, message: event.target.value }));
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                    />
                    {errors.message ? <span className="form-error">{errors.message}</span> : null}
                  </div>

                  {status ? <div className="status-note">{status}</div> : null}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[26rem] text-sm leading-6 text-[var(--ink-soft)]">
                      La trimitere, pregătim automat un email cu brief-ul tău, ca să pornim discuția fără pași inutili.
                    </p>
                    <button type="submit" className="btn-primary sm:w-auto">
                      {siteContent.contact.form.submit}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--surface-strong)]">
          <div className="content-frame py-24 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionHeading
                eyebrow="Întrebări frecvente"
                title="Câteva clarificări rapide înainte să pornească discuția."
                className="max-w-[32rem]"
              />

              <div className="grid gap-4">
                {siteContent.contact.faq.map((item) => (
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
                <h2 className="cta-title mt-5">Dacă preferi, putem începe și cu o conversație scurtă înainte de orice brief mai detaliat.</h2>
                <p className="mt-5 max-w-[40rem] text-lg leading-8 text-[var(--ink-soft)]">
                  Important este să înțelegem ce trebuie să facă noul site mai bine decât cel actual.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/services" className="btn-secondary">
                  Vezi serviciile
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
