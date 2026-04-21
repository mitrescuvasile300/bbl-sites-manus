/*
  Design note — siteContent.ts
  Filosofie: Systems Atelier. Conținutul trebuie să rămână orientat spre client,
  dar să lase vizibile gândirea de produs, claritatea de implementare și disciplina tehnică.
*/

export const siteContent = {
  locale: 'ro',
  brand: {
    name: 'BBL Sites',
    shortDescription:
      'Construim website-uri pentru firme și business-uri de servicii care au nevoie de claritate, credibilitate și implementare solidă.',
    positioning:
      'BBL Sites proiectează și implementează website-uri de prezentare, landing page-uri, redesign-uri și experiențe digitale gândite ca instrumente de business, nu doar ca suprafețe vizuale.',
    signature: 'Strategy, UI systems, build, launch',
  },
  navigation: {
    primaryCta: 'Programează o discuție',
    links: [
      { label: 'Servicii', to: '/services' },
      { label: 'Proces', to: '/process' },
      { label: 'Despre', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  home: {
    hero: {
      eyebrow: 'Website-uri pentru business-uri care au nevoie de claritate și execuție bună',
      title: 'Design și implementare web care arată bine și funcționează corect.',
      description:
        'Construim site-uri de prezentare, landing page-uri și redesign-uri pentru firme care vor o prezență online mai clară, mai credibilă și mai ușor de folosit.',
      primaryCta: { label: 'Vezi serviciile', to: '/services' },
      secondaryCta: { label: 'Discută proiectul', to: '/contact' },
      supportTitle: 'Ce trebuie să facă un site bun',
      supportItems: [
        'să explice rapid ce oferi și cui te adresezi',
        'să transmită încredere prin design și structură',
        'să fie construit curat, responsive și ușor de extins',
      ],
    },
    metrics: [
      { value: 'UX', label: 'Structură clară pentru decizii rapide' },
      { value: 'UI', label: 'Design coerent cu business-ul și brandul' },
      { value: 'Build', label: 'Implementare curată și responsive' },
      { value: 'Care', label: 'Site gândit pentru mentenanță și evoluție' },
    ],
    offers: {
      eyebrow: 'Ce putem construi',
      title: 'Alegem formatul potrivit pentru obiectivul tău, nu doar o formă frumoasă.',
      body: 'Fie că ai nevoie de prezentare, ofertă, conversie sau relansare, construim fiecare proiect cu aceeași logică: claritate, încredere și execuție curată.',
      items: [
        {
          title: 'Site de prezentare',
          body: 'Pentru firme care au nevoie de o prezentare clară a serviciilor, diferențiatorilor și modului de contact.',
        },
        {
          title: 'Landing page',
          body: 'Pentru pagini de campanie, servicii noi sau oferte care trebuie să conducă spre o singură acțiune clară.',
        },
        {
          title: 'Redesign website',
          body: 'Pentru business-uri care au deja un site, dar vor o versiune mai matură, mai bine structurată și mai convingătoare.',
        },
        {
          title: 'Build și optimizare',
          body: 'Pentru proiecte care au nevoie nu doar de look bun, ci și de implementare stabilă, responsive și ușor de întreținut.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Cum se vede competența tehnică',
      title: 'Nu vindem doar pagini. Construim un sistem web care susține mesajul, conversia și mentenanța.',
      body: 'Skillurile de programator devin vizibile când designul, conținutul și implementarea lucrează împreună. De aceea, proiectele noastre urmăresc aceeași logică de la structură până la lansare.',
      items: [
        {
          title: 'Arhitectură clară de pagini',
          body: 'Fiecare secțiune are un rol: orientare, dovadă, clarificare sau conversie.',
        },
        {
          title: 'Sisteme UI ușor de extins',
          body: 'Folosim componente și reguli vizuale coerente, astfel încât site-ul să poată crește fără haos.',
        },
        {
          title: 'Responsive gândit, nu doar adaptat',
          body: 'Paginile sunt proiectate pentru ecrane reale și trasee reale de utilizare.',
        },
        {
          title: 'Performanță și mentenanță',
          body: 'Build-ul este organizat astfel încât să poată fi actualizat și extins fără complicații inutile.',
        },
      ],
    },
    processPreview: {
      eyebrow: 'Cum lucrăm',
      title: 'Procesul este simplu: clarificăm, proiectăm, construim și lansăm.',
      body: 'Ținem proiectul în mișcare prin decizii scurte, etape clare și livrabile ușor de urmărit.',
      steps: [
        {
          number: '01',
          title: 'Clarificare',
          description: 'Pornim de la obiective, servicii, public și ce nu mai funcționează în prezent.',
        },
        {
          number: '02',
          title: 'Sistem vizual și structură',
          description: 'Punem în ordine paginile, conținutul și direcția vizuală care susține business-ul.',
        },
        {
          number: '03',
          title: 'Build și lansare',
          description: 'Implementăm, verificăm, ajustăm și pregătim site-ul pentru utilizare reală.',
        },
      ],
    },
    closing: {
      title: 'Dacă vrei un site mai clar, mai credibil și mai bine construit, putem începe cu o discuție scurtă.',
      body: 'Îți spunem ce are sens pentru proiectul tău și care ar fi pasul următor.',
      primaryCta: { label: 'Programează o discuție', to: '/contact' },
    },
  },
  services: {
    hero: {
      eyebrow: 'Servicii',
      title: 'Servicii web pentru proiecte care trebuie să fie clare, utile și bine implementate.',
      body: 'Lucrăm de la structură și mesaj până la design și build, astfel încât site-ul final să arate profesionist și să funcționeze coerent în practică.',
      supportTitle: 'Cum lucrăm pe scurt',
      supportItems: [
        'definim ce trebuie să comunice site-ul',
        'transformăm direcția în sistem vizual și UI',
        'implementăm curat și verificăm înainte de lansare',
      ],
    },
    modules: [
      {
        number: '01',
        title: 'Strategie și structură',
        intro: 'Clarificăm ce trebuie să spună site-ul, ce pagini are sens să existe și cum ghidăm vizitatorul spre contact.',
        deliverables: ['Audit website', 'Mesaje-cheie', 'Sitemap', 'Structură de pagini'],
      },
      {
        number: '02',
        title: 'Design UI și sistem vizual',
        intro: 'Construim o direcție vizuală matură și un sistem de componente care păstrează coerența în toate paginile.',
        deliverables: ['Direcție vizuală', 'UI kit', 'Design pagini-cheie', 'Reguli responsive'],
      },
      {
        number: '03',
        title: 'Build și integrare',
        intro: 'Transformăm designul într-un website rapid, responsive și ușor de întreținut, cu o implementare organizată corect.',
        deliverables: ['Frontend build', 'Responsive complet', 'Micro-interacțiuni utile', 'Verificare finală'],
      },
      {
        number: '04',
        title: 'Optimizare și evoluție',
        intro: 'Așezăm conținutul, CTA-urile și fluxurile astfel încât site-ul să fie mai clar pentru vizitator și mai ușor de extins ulterior.',
        deliverables: ['Claritate de conținut', 'Ajustări de conversie', 'Plan de extindere', 'Suport pentru iterații'],
      },
    ],
    proof: {
      eyebrow: 'Ce se vede în livrabil',
      title: 'Serviciile nu înseamnă doar ecrane. Înseamnă decizii de produs, sistem vizual și execuție controlată.',
      items: [
        {
          title: 'Structură cu sens',
          body: 'Conținutul este pus în ordinea corectă pentru ca vizitatorul să înțeleagă repede ce are de făcut.',
        },
        {
          title: 'Sistem de componente',
          body: 'Designul este construit ca un set coerent de piese, nu ca o colecție de pagini fără legătură.',
        },
        {
          title: 'Build curat',
          body: 'Implementarea urmărește claritate, responsive logic și mentenanță simplă după lansare.',
        },
      ],
    },
    models: [
      {
        title: 'Site nou',
        body: 'Pentru business-uri care pornesc corect de la zero sau vor să își ridice standardul online.',
      },
      {
        title: 'Redesign',
        body: 'Pentru proiecte existente care au nevoie de mai multă claritate, credibilitate și coerență.',
      },
      {
        title: 'Landing sau extindere',
        body: 'Pentru servicii noi, pagini de ofertă sau etape suplimentare construite peste un site existent.',
      },
    ],
    faq: [
      {
        question: 'Lucrați doar pe design sau și pe implementare?',
        answer: 'Putem livra atât direcția de structură și design, cât și implementarea completă a site-ului.',
      },
      {
        question: 'Puteți lucra peste un site existent?',
        answer: 'Da. În funcție de context, putem face ajustări, redesign sau reconstrucție aproape completă.',
      },
      {
        question: 'Aveți nevoie de specificații tehnice complete de la început?',
        answer: 'Nu. Este suficient să înțelegem obiectivul, oferta și unde apar blocajele actuale.',
      },
    ],
  },
  process: {
    hero: {
      eyebrow: 'Proces',
      title: 'Un proces clar pentru proiecte web care trebuie să ajungă repede într-o formă bună.',
      body: 'Lucrăm etapizat, cu decizii scurte și livrabile clare, astfel încât proiectul să rămână ușor de urmărit și de validat.',
      supportTitle: 'Cum ținem proiectul în mișcare',
      supportItems: [
        'stabilim prioritățile de la început',
        'luăm deciziile când informația e suficient de clară',
        'evităm refacerile fără direcție și pașii inutili',
      ],
    },
    principles: [
      'Punem claritatea înaintea efectelor decorative.',
      'Fiecare etapă are output concret, nu doar discuții.',
      'Păstrăm feedback-ul scurt și deciziile ușor de luat.',
      'Construim doar ce ajută real experiența și obiectivul site-ului.',
    ],
    stages: [
      {
        number: '01',
        title: 'Brief și audit',
        description: 'Înțelegem business-ul, oferta, publicul și situația actuală a site-ului sau a prezenței online.',
        outputs: ['Obiective', 'Audit', 'Priorități', 'Direcție de lucru'],
      },
      {
        number: '02',
        title: 'Structură și mesaj',
        description: 'Punem în ordine paginile, secțiunile și mesajele astfel încât proiectul să fie ușor de parcurs și de aprobat.',
        outputs: ['Sitemap', 'Structură pagini', 'Mesaje-cheie', 'CTA logic'],
      },
      {
        number: '03',
        title: 'Design și sistem UI',
        description: 'Construim direcția vizuală și componentele care vor păstra coerența în toate ecranele.',
        outputs: ['Direcție vizuală', 'UI system', 'Responsive rules', 'Pagini-cheie'],
      },
      {
        number: '04',
        title: 'Implementare și lansare',
        description: 'Transformăm totul într-un website funcțional, verificat și pregătit pentru publicare.',
        outputs: ['Build', 'QA', 'Optimizări', 'Lansare'],
      },
    ],
    operatingRules: [
      {
        title: 'Feedback concentrat',
        body: 'Preferăm răspunsuri scurte și clare, pentru a menține proiectul în mișcare.',
      },
      {
        title: 'Priorități reale',
        body: 'Începem cu paginile și mesajele care contează cel mai mult pentru contact și încredere.',
      },
      {
        title: 'Build fără complicații inutile',
        body: 'Păstrăm implementarea curată și alegem soluții ușor de întreținut după lansare.',
      },
    ],
    faq: [
      {
        question: 'Cât de implicată trebuie să fie echipa noastră?',
        answer: 'Mai ales la început și în momentele de decizie. În rest, structurăm proiectul astfel încât să fie ușor de urmărit.',
      },
      {
        question: 'Putem începe cu o versiune mai scurtă?',
        answer: 'Da. Putem porni cu homepage și câteva pagini esențiale, apoi extindem în etape.',
      },
    ],
  },
  about: {
    hero: {
      eyebrow: 'Despre',
      title: 'Construim site-uri ca sisteme clare de comunicare, nu doar ca suprafețe vizuale.',
      body: 'BBL Sites combină gândirea de produs, designul UI și implementarea frontend pentru proiecte care trebuie să inspire încredere și să fie ușor de folosit în viața reală.',
    },
    story: [
      'Multe site-uri arată acceptabil, dar nu explică suficient de clar ce oferă un business, cui se adresează și de ce merită ales. De aici apar pierderile de încredere, blocajele în decizie și paginile care nu ajută cu adevărat conversia.',
      'Abordarea noastră pornește de la structură și logică. Designul vine să susțină mesajul, iar implementarea vine să susțină experiența, viteza și mentenanța. Astfel, rezultatul este mai coerent pentru client și mai sănătos pe termen lung.',
    ],
    principles: [
      {
        title: 'Claritate comercială',
        body: 'Site-ul trebuie să spună repede ce oferi și de ce contează pentru clientul potrivit.',
      },
      {
        title: 'Sistem, nu improvizație',
        body: 'Paginile și componentele trebuie să aibă reguli clare, nu să fie construite la întâmplare.',
      },
      {
        title: 'Implementare responsabilă',
        body: 'Responsive, performanță și mentenanță fac parte din calitatea reală a proiectului.',
      },
    ],
    standards: [
      {
        title: 'Structură și ierarhie',
        body: 'Punem informația în ordinea corectă pentru orientare rapidă și decizii simple.',
      },
      {
        title: 'UI coerent',
        body: 'Designul urmărește consistență, proporții bune și o relație clară între conținut și componentă.',
      },
      {
        title: 'Build ușor de evoluat',
        body: 'Proiectul este gândit astfel încât să poată primi iterații și extinderi fără haos.',
      },
      {
        title: 'Detalii care contează',
        body: 'Micro-interacțiuni, spațiere, stări de focus și ritm de pagină care susțin experiența, nu o încarcă.',
      },
    ],
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Spune-ne pe scurt ce proiect ai în minte și revenim cu o direcție clară.',
      body: 'Nu ai nevoie de un brief perfect. Este suficient să înțelegem contextul, obiectivul și unde simți că actualul site nu mai ajută.',
      supportTitle: 'Ce clarificăm repede',
      supportItems: [
        'ce tip de site are sens pentru proiect',
        'ce pagini sunt prioritare',
        'care este pasul cel mai bun pentru început',
      ],
    },
    cards: [
      {
        title: 'Tip de proiect',
        body: 'Site nou, redesign, landing page sau extindere a unui proiect existent.',
      },
      {
        title: 'Timp de răspuns',
        body: 'În mod normal revenim în maximum o zi lucrătoare cu direcție și întrebările potrivite.',
      },
      {
        title: 'Primul pas',
        body: 'Putem porni cu audit, structură și direcție vizuală sau direct cu definirea livrabilului potrivit.',
      },
    ],
    budgetOptions: ['Sub 2.000 €', '2.000 – 5.000 €', '5.000 – 10.000 €', 'Peste 10.000 €'],
    form: {
      title: 'Trimite-ne brief-ul',
      description: 'Scrie pe scurt ce face business-ul tău, ce vrei să îmbunătățești și ce rezultat urmărești. Noi structurăm de aici pasul următor.',
      submit: 'Generează mesajul',
      success:
        'Am pregătit automat mesajul pentru email. Dacă se deschide clientul de mail, poți trimite brief-ul direct de acolo.',
      labels: {
        name: 'Nume',
        email: 'Email',
        company: 'Companie sau brand',
        budget: 'Buget estimativ',
        message: 'Despre proiect',
      },
      placeholders: {
        name: 'Cum te numești?',
        email: 'nume@companie.ro',
        company: 'Numele firmei sau al brandului',
        budget: 'Selectează un interval',
        message: 'Ce servicii oferi, ce tip de site ai nevoie și ce vrei să funcționeze mai bine?',
      },
      errors: {
        name: 'Te rog completează numele.',
        email: 'Te rog completează un email valid.',
        message: 'Te rog descrie pe scurt proiectul.',
      },
    },
    faq: [
      {
        question: 'Aveți nevoie de multe informații de la început?',
        answer: 'Nu. Este suficient un context scurt, iar restul îl clarificăm împreună.',
      },
      {
        question: 'Puteți ajuta și cu structura sau textele?',
        answer: 'Da. Putem lucra atât la organizarea paginilor, cât și la formularea mesajelor principale.',
      },
      {
        question: 'Lucrați doar pentru companii mari?',
        answer: 'Nu. Lucrăm și cu IMM-uri, afaceri locale și business-uri de servicii care vor un site mai bun.',
      },
    ],
  },
  footer: {
    columns: [
      {
        title: 'Navigare',
        links: [
          { label: 'Acasă', to: '/' },
          { label: 'Servicii', to: '/services' },
          { label: 'Proces', to: '/process' },
          { label: 'Despre', to: '/about' },
          { label: 'Contact', to: '/contact' },
        ],
      },
      {
        title: 'Capabilități',
        links: [
          { label: 'Structură website', to: '/services' },
          { label: 'Design UI', to: '/services' },
          { label: 'Build frontend', to: '/services' },
          { label: 'Proces de lucru', to: '/process' },
        ],
      },
      {
        title: 'Începe de aici',
        links: [
          { label: 'Discută proiectul', to: '/contact' },
          { label: 'Vezi cum lucrăm', to: '/process' },
          { label: 'Despre studio', to: '/about' },
        ],
      },
    ],
    copyright: 'Website-uri gândite ca produse clare, nu doar ca prezentări vizuale.',
    backToTop: 'Înapoi sus',
  },
} as const;
