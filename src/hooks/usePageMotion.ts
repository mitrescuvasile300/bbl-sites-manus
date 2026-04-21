/*
  Design note — usePageMotion.ts
  Filosofie: editorial cinematic tech. Motion-ul trebuie să fie coerent, cinematic și util,
  astfel încât scroll-ul să creeze progres narativ fără conflicte între biblioteci sau efecte excesive.
*/

import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UsePageMotionOptions {
  enableHeroScene?: boolean;
}

export function usePageMotion(
  scopeRef: RefObject<HTMLElement | HTMLDivElement | null>,
  options: UsePageMotionOptions = {}
) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope || typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const upItems = gsap.utils.toArray<HTMLElement>('[data-reveal="up"]', scope);
      upItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });

      const fadeItems = gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]', scope);
      fadeItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });

      const maskGroups = gsap.utils.toArray<HTMLElement>('[data-reveal="mask"]', scope);
      maskGroups.forEach((group) => {
        const children = Array.from(group.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, yPercent: 120 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: group,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      if (options.enableHeroScene) {
        const heroRoot = scope.querySelector<HTMLElement>('[data-hero-root]');
        const heroStage = scope.querySelector<HTMLElement>('[data-hero-stage]');
        const heroContent = scope.querySelector<HTMLElement>('[data-hero-copy]');
        const heroTitles = gsap.utils.toArray<HTMLElement>('.hero-title', scope);
        const heroPanels = gsap.utils.toArray<HTMLElement>('.hero-panel', scope);
        const orbitA = scope.querySelector<HTMLElement>('.hero-orbit-a');
        const orbitB = scope.querySelector<HTMLElement>('.hero-orbit-b');

        if (heroRoot && heroStage && heroTitles.length) {
          const heroTimeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroRoot,
              start: 'top top',
              end: '+=140%',
              scrub: 1.1,
              pin: true,
              anticipatePin: 1,
            },
          });

          heroTimeline
            .to(
              heroTitles,
              {
                yPercent: -16,
                opacity: 0.32,
                stagger: 0.05,
              },
              0
            )
            .to(
              heroContent,
              {
                yPercent: -10,
                opacity: 0.36,
              },
              0
            )
            .to(
              heroStage,
              {
                yPercent: -8,
                scale: 0.93,
                rotate: -2,
              },
              0
            )
            .to(
              heroPanels,
              {
                y: (index) => (index % 2 === 0 ? -56 : 52),
                rotate: (index) => (index === 0 ? -1.5 : index === 1 ? 2.2 : -2.8),
                stagger: 0.04,
              },
              0
            )
            .to(
              orbitA,
              {
                scale: 1.18,
                opacity: 0.22,
              },
              0
            )
            .to(
              orbitB,
              {
                scale: 0.82,
                opacity: 0.2,
              },
              0
            );
        }
      }
    }, scope);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [scopeRef, options.enableHeroScene]);
}
