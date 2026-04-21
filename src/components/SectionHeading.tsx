/*
  Design note — SectionHeading.tsx
  Filosofie: editorial cinematic tech. Introducerile de secțiune trebuie să aibă ierarhie clară,
  spațiu generos și o tensiune vizuală calmă între etichetă, titlu și textul explicativ.
*/

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={[
        'flex max-w-[40rem] flex-col gap-5 md:gap-6',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <span className="section-eyebrow" data-reveal="fade">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="section-title" data-reveal="up">
        {title}
      </h2>

      {body ? (
        <p className="section-copy max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8" data-reveal="up">
          {body}
        </p>
      ) : null}
    </div>
  );
}
