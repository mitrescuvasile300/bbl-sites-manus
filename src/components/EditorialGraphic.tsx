/*
  Design note — EditorialGraphic.tsx
  Filosofie: grafică editorială premium pentru pagini comerciale B2B.
  Componenta oferă panouri vizuale și infografice reutilizabile,
  astfel încât fiecare pagină să aibă contrapondere grafică, nu doar text și carduri simple.
*/

import type { ReactNode } from 'react';
import { ArrowRight, Circle, Sparkles } from 'lucide-react';

interface EditorialMetric {
  label: string;
  value: string;
}

interface EditorialGraphicProps {
  eyebrow: string;
  title: string;
  variant: 'signal' | 'flow' | 'orbit' | 'story' | 'contact';
  metrics: readonly EditorialMetric[];
  points?: readonly string[];
  footer?: string;
  className?: string;
}

function VariantScene({ variant }: { variant: EditorialGraphicProps['variant'] }) {
  if (variant === 'signal') {
    return (
      <div className="graphic-scene graphic-scene-signal" aria-hidden="true">
        <div className="graphic-orbit graphic-orbit-lg" data-float="slow" />
        <div className="graphic-orbit graphic-orbit-sm" data-float="fast" />
        <div className="graphic-signal-grid">
          <div className="graphic-signal-bar graphic-signal-bar-a" />
          <div className="graphic-signal-bar graphic-signal-bar-b" />
          <div className="graphic-signal-bar graphic-signal-bar-c" />
          <div className="graphic-signal-line" />
        </div>
      </div>
    );
  }

  if (variant === 'flow') {
    return (
      <div className="graphic-scene graphic-scene-flow" aria-hidden="true">
        <div className="graphic-flow-node graphic-flow-node-a" data-float="slow" />
        <div className="graphic-flow-node graphic-flow-node-b" data-float="fast" />
        <div className="graphic-flow-node graphic-flow-node-c" data-float="slow" />
        <div className="graphic-flow-node graphic-flow-node-d" data-float="fast" />
        <div className="graphic-flow-link graphic-flow-link-a" />
        <div className="graphic-flow-link graphic-flow-link-b" />
        <div className="graphic-flow-link graphic-flow-link-c" />
      </div>
    );
  }

  if (variant === 'orbit') {
    return (
      <div className="graphic-scene graphic-scene-orbit" aria-hidden="true">
        <div className="graphic-ring graphic-ring-outer" />
        <div className="graphic-ring graphic-ring-mid" />
        <div className="graphic-ring graphic-ring-core" />
        <div className="graphic-orbit-dot graphic-orbit-dot-a" data-float="fast" />
        <div className="graphic-orbit-dot graphic-orbit-dot-b" data-float="slow" />
        <div className="graphic-orbit-dot graphic-orbit-dot-c" data-float="fast" />
      </div>
    );
  }

  if (variant === 'story') {
    return (
      <div className="graphic-scene graphic-scene-story" aria-hidden="true">
        <div className="graphic-story-panel graphic-story-panel-a" data-float="slow" />
        <div className="graphic-story-panel graphic-story-panel-b" data-float="fast" />
        <div className="graphic-story-panel graphic-story-panel-c" data-float="slow" />
        <div className="graphic-story-track" />
      </div>
    );
  }

  return (
    <div className="graphic-scene graphic-scene-contact" aria-hidden="true">
      <div className="graphic-contact-ring" />
      <div className="graphic-contact-point graphic-contact-point-a" data-float="fast" />
      <div className="graphic-contact-point graphic-contact-point-b" data-float="slow" />
      <div className="graphic-contact-point graphic-contact-point-c" data-float="fast" />
      <div className="graphic-contact-beam" />
    </div>
  );
}

function MetricRow({ metric }: { metric: EditorialMetric }) {
  return (
    <div className="graphic-metric-row">
      <span className="graphic-metric-value">{metric.value}</span>
      <span className="graphic-metric-label">{metric.label}</span>
    </div>
  );
}

function PointRow({ children }: { children: ReactNode }) {
  return (
    <div className="graphic-point-row">
      <Circle className="graphic-point-icon" />
      <span>{children}</span>
    </div>
  );
}

export default function EditorialGraphic({ eyebrow, title, variant, metrics, points = [], footer, className = '' }: EditorialGraphicProps) {
  return (
    <aside className={`editorial-graphic ${className}`.trim()} data-reveal="scale">
      <div className="editorial-graphic-shell">
        <div className="editorial-graphic-copy">
          <span className="section-eyebrow !text-[0.66rem]">{eyebrow}</span>
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-[16ch] text-[clamp(1.65rem,2.4vw,2.45rem)] leading-[0.98] tracking-[-0.045em] text-[var(--text-primary)]">
              {title}
            </h3>
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-light)]" />
          </div>
        </div>

        <VariantScene variant={variant} />

        <div className="graphic-metric-grid">
          {metrics.map((metric) => (
            <MetricRow key={`${metric.label}-${metric.value}`} metric={metric} />
          ))}
        </div>

        {points.length ? (
          <div className="graphic-points-list">
            {points.map((point) => (
              <PointRow key={point}>{point}</PointRow>
            ))}
          </div>
        ) : null}

        {footer ? (
          <div className="graphic-footer-row">
            <span>{footer}</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--accent-light)]" />
          </div>
        ) : null}
      </div>
    </aside>
  );
}
