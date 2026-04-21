/*
  Design note — Contact.tsx
  Filosofie: editorial cinematic tech. Pagina de contact trebuie să reducă fricțiunea,
  să inspire încredere și să transforme formularul într-un început clar de conversație.
*/

import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Mail } from 'lucide-react';
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
      <section className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(17,24,43,1)_0%,rgba(8,10,18,1)_58%,rgba(4,6,10,1)_100%)]">
        <div className="content-frame py-20 md:py-24">
          <SectionHeading
            eyebrow={siteContent.contact.hero.eyebrow}
            title={siteContent.contact.hero.title}
            body={siteContent.contact.hero.body}
            className="max-w-[35rem]"
          />
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
            <SectionHeading
              eyebrow={siteContent.contact.form.title}
              title="Scrie contextul pe scurt. Noi îl transformăm într-o conversație structurată."
              body={siteContent.contact.form.description}
              className="max-w-[30rem]"
            />

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
                    La trimitere, pregătim automat un email cu brief-ul completat.
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
              title="Nu ai nevoie de un brief perfect. Ai nevoie doar de suficient context ca să pornim bine."
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
              <span className="section-eyebrow">Dacă vrei să te pregătești mai bine</span>
              <h2 className="cta-title mt-4">
                Poți vedea mai întâi și felul în care structurăm proiectele, ca să știi exact ce urmează după prima conversație.
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
