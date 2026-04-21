/*
  Design note — siteContent.ts
  Filosofie: editorial cinematic tech. Acest fișier concentrează tot conținutul în română,
  astfel încât textele, CTA-urile și secțiunile să rămână coerente pe toate paginile.
*/

export const siteContent = {
  locale: 'ro',
  brand: {
    name: 'BBL Sites',
    shortDescription:
      'Construim website-uri, interfețe și sisteme de prezentare care transformă interesul în conversații și cererile în oportunități reale.',
    positioning:
      'Studio digital specializat în website-uri de prezentare, platforme de servicii și experiențe de brand cu accent pe claritate, viteză și execuție atentă.',
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
      eyebrow: 'Studio digital pentru branduri care vor să pară la fel de bine pe cât livrează',
      title: ['Construim', 'prezențe digitale', 'care mișcă business-ul înainte'],
      description:
        'De la direcție creativă și structură de conținut până la design, prototipare și implementare, proiectăm site-uri care arată matur, se mișcă fluent și comunică limpede.',
      primaryCta: { label: 'Vezi serviciile', to: '/services' },
      secondaryCta: { label: 'Cum lucrăm', to: '/process' },
      checkpoints: ['Poziționare', 'Structură', 'Identitate', 'Lansare'],
    },
    trust: {
      eyebrow: 'Ce aducem în proiect',
      items: ['Strategie', 'Design web', 'UI systems', 'Copy structure', 'Frontend performant', 'Optimizare conversie'],
    },
    highlights: [
      {
        title: 'Arhitectură clară înainte de estetică',
        body: 'Pornim cu structură, ierarhie și fluxuri. Înainte de orice animație sau ornament, paginile trebuie să spună clar ce oferi, cui și de ce contează.',
      },
      {
        title: 'Identitate digitală coerentă',
        body: 'Aliniem tipografia, tonul, ritmul și detaliile vizuale astfel încât fiecare secțiune să pară parte din același sistem, nu din pagini lipite între ele.',
      },
      {
        title: 'Implementare gândită pentru iterație',
        body: 'Construim componente reutilizabile și conținut ușor de actualizat, pentru ca site-ul să poată evolua fără refaceri costisitoare.',
      },
    ],
    caseStudies: [
      {
        title: 'Flux Systems',
        image: '/cs-flux-thumb.jpg',
        label: 'Website de poziționare B2B',
        summary:
          'Reașezare completă de mesaj, structură și ritm vizual pentru o companie tehnică ce avea nevoie de un website cu ton mai sigur și mai comercial.',
      },
      {
        title: 'Spark News',
        image: '/cs-sparknews-thumb.jpg',
        label: 'Produs media digital',
        summary:
          'Layout modular, accent editorial și secvențe de citire mai rapide pentru un produs care trebuia să comunice mai bine atât conținutul, cât și produsul.',
      },
      {
        title: 'LMVR',
        image: '/cs-lmvr-thumb.jpg',
        label: 'Platformă de prezentare pentru servicii premium',
        summary:
          'Sistem de secțiuni full-width, dovadă socială mai bine integrată și un parcurs mai convingător de la ofertă către contact.',
      },
    ],
    processPreview: {
      eyebrow: 'Cum lucrăm',
      title: 'Mai puțină improvizație. Mai multă intenție.',
      body: 'Procesul este construit pentru ritm și decizie. Clarificăm poziționarea, rafinăm mesajul și livrăm într-o ordine care reduce rework-ul.',
      steps: [
        {
          number: '01',
          title: 'Audit și direcție',
          description: 'Mapăm oferta, publicul și blocajele curente. Stabilim axa vizuală și argumentul comercial central.',
        },
        {
          number: '02',
          title: 'Structură și conținut',
          description: 'Organizăm paginile, secțiunile și mesajele-cheie astfel încât site-ul să fie clar înainte să fie spectaculos.',
        },
        {
          number: '03',
          title: 'Design și implementare',
          description: 'Construim interfața, definim motion-ul și implementăm un frontend curat, pregătit pentru iterații și lansare.',
        },
      ],
    },
    closing: {
      title: 'Dacă site-ul actual arată bine doar în screenshot-uri, nu și în conversațiile de vânzare, e momentul pentru o versiune mai matură.',
      body: 'Clarificăm mesajul, ordonăm structura și construim o experiență care susține decizia, nu doar prima impresie.',
      primaryCta: { label: 'Vorbește cu noi', to: '/contact' },
    },
  },
  services: {
    hero: {
      eyebrow: 'Servicii',
      title: 'Servicii gândite ca un sistem, nu ca o listă de livrabile fără legătură.',
      body: 'Acoperim direcția strategică, arhitectura de conținut, designul interfeței și implementarea frontend pentru proiecte care trebuie să arate convingător și să funcționeze clar.',
    },
    items: [
      {
        number: '01',
        title: 'Strategie de website',
        intro: 'Clarificăm ce trebuie să comunice site-ul, în ce ordine și pentru cine.',
        deliverables: ['Audit de poziționare', 'Arhitectură de informație', 'Sitemap și prioritizare de secțiuni', 'Mesaje-cheie pe pagină'],
      },
      {
        number: '02',
        title: 'Design UX/UI',
        intro: 'Transformăm structura într-o experiență coerentă, elegantă și ușor de parcurs.',
        deliverables: ['Direcție vizuală', 'Wireframes și compoziții', 'Componente reutilizabile', 'Motion design pentru interacțiuni'],
      },
      {
        number: '03',
        title: 'Implementare frontend',
        intro: 'Construim interfața în React, cu accent pe performanță, adaptabilitate și mentenanță simplă.',
        deliverables: ['Componente modulare', 'Animații calibrate', 'Responsive complet', 'Pregătire pentru publicare'],
      },
      {
        number: '04',
        title: 'Optimizare de conversie',
        intro: 'Ajustăm secțiunile și traseul de citire astfel încât vizitatorul să știe rapid ce are de făcut mai departe.',
        deliverables: ['Ierarhie CTA', 'Secțiuni de dovadă socială', 'Clarificare ofertă', 'Curățare fricțiuni de contact'],
      },
    ],
    engagementModels: [
      {
        title: 'Sprint de clarificare',
        body: 'Potrivit când mesajul, structura sau prioritățile produsului nu sunt suficient de clare și trebuie stabilite înainte de design.',
      },
      {
        title: 'Redesign complet',
        body: 'Potrivit când site-ul actual nu mai susține nivelul business-ului sau când brandul a evoluat, dar experiența digitală a rămas în urmă.',
      },
      {
        title: 'Parteneriat iterativ',
        body: 'Potrivit când ai deja o bază bună, dar vrei să continui cu landing pages, noi secțiuni, rafinări de motion și experimente controlate.',
      },
    ],
    faq: [
      {
        question: 'Lucrați doar pe design sau și pe implementare?',
        answer: 'Putem intra punctual pe strategie și design, dar rezultatele cele mai bune apar când putem controla și implementarea frontend, pentru a păstra ritmul și coerența deciziilor.',
      },
      {
        question: 'Puteți lucra peste un site existent?',
        answer: 'Da. În unele cazuri are sens o optimizare etapizată a site-ului existent, iar în altele este mai eficient să reconstruim zonele-cheie pe un sistem nou. Alegerea depinde de structură, conținut și nivelul actual de complexitate.',
      },
      {
        question: 'Ce primiți de la noi la început?',
        answer: 'Ideal, avem nevoie de o imagine clară asupra ofertei, diferențiatorilor, exemplelor care vă plac și obiectivului principal al site-ului. Dacă acestea nu sunt încă bine articulate, le clarificăm împreună în faza de audit.',
      },
    ],
  },
  process: {
    hero: {
      eyebrow: 'Proces',
      title: 'Un proces clar face proiectul mai rapid, mai coerent și mai ușor de dus la lansare.',
      body: 'Fiecare etapă pregătește deciziile următoare și păstrează proiectul într-un ritm predictibil, cu mai puține revizii sterile și mai multă claritate reală.',
    },
    principles: [
      'Pornim de la logică de business, nu de la efecte vizuale.',
      'Validăm ierarhia informației înainte de a rafina suprafața.',
      'Construim componente și reguli, nu pagini tratate izolat.',
      'Motion-ul este folosit pentru orientare și accent, nu pentru distragere.',
    ],
    phases: [
      {
        number: '01',
        title: 'Audit și aliniere',
        description: 'Revizuim oferta, țintele comerciale, materialele existente și punctele unde actualul site pierde claritate sau încredere.',
        outputs: ['Interviu de kickoff', 'Audit de structură', 'Inventar de conținut', 'Direcție de poziționare'],
      },
      {
        number: '02',
        title: 'Arhitectură și conținut',
        description: 'Organizăm fluxul de citire, definim ce intră în fiecare pagină și în ce succesiune trebuie să apară argumentele importante.',
        outputs: ['Sitemap', 'Structură de pagină', 'Microcopy de secțiune', 'Plan de CTA-uri'],
      },
      {
        number: '03',
        title: 'Design vizual și motion',
        description: 'Dezvoltăm direcția vizuală, compozițiile principale și o logică de animație care să accentueze ritmul și povestea fiecărei pagini.',
        outputs: ['Direcție vizuală', 'Sistem de componente', 'Reguli de motion', 'Stări responsive'],
      },
      {
        number: '04',
        title: 'Implementare și lansare',
        description: 'Traducem designul într-un frontend curat, optimizat și pregătit pentru publicare, cu verificări finale pentru detalii și consistență.',
        outputs: ['Implementare React', 'QA vizual', 'Optimizări finale', 'Suport pentru publicare'],
      },
    ],
    rituals: [
      {
        title: 'Revizuiri concentrate',
        body: 'Preferăm runde scurte de feedback cu decizii clare, în locul documentelor lungi care amână alegerea reală.',
      },
      {
        title: 'Dovadă înainte de ornament',
        body: 'Secțiunile care trebuie să convingă sunt dezvoltate prioritar. Abia după aceea rafinăm detaliile de suprafață.',
      },
      {
        title: 'Lansare fără improvizații',
        body: 'Intrăm în publicare doar după ce fluxurile principale și experiența pe ecrane diferite au fost verificate cu atenție.',
      },
    ],
    faq: [
      {
        question: 'Cât de implicată trebuie să fie echipa noastră?',
        answer: 'Avem nevoie de disponibilitate la început pentru aliniere și apoi în punctele de decizie. Restul procesului este construit tocmai ca să vă economisească timp și context-switching.',
      },
      {
        question: 'Putem lansa întâi o versiune mai scurtă?',
        answer: 'Da. În multe proiecte are sens un nucleu de pagini esențiale lansat rapid, urmat de iterații pe conținut, pagini secundare și rafinări de motion.',
      },
    ],
  },
  about: {
    hero: {
      eyebrow: 'Despre BBL Sites',
      title: 'Nu facem site-uri doar ca să umple ecranul. Le facem ca să clarifice valoarea.',
      body: 'BBL Sites este un studio orientat spre website-uri de prezentare și experiențe digitale unde tonul, ierarhia și detaliul trebuie să transmită maturitate, nu doar tendințe de moment.',
    },
    story: [
      'BBL Sites a apărut din nevoia de a construi site-uri care arată bine, dar mai ales explică bine. În multe proiecte, problema nu este lipsa designului, ci lipsa unei ordini clare între mesaj, structură și execuție.',
      'Modelul de lucru rămâne compact, cu puține straturi între decizie și implementare. Accentul cade pe discuții clare, argumente solide și pagini care susțin business-ul în mod real.',
    ],
    values: [
      {
        title: 'Claritate înainte de spectacol',
        body: 'Un vizitator nu trebuie să admire un website fără să înțeleagă ce vinde. Forma există ca să întărească fondul.',
      },
      {
        title: 'Rigoare în detalii',
        body: 'Spațierea, tipografia, microcopy-ul și ritmul animațiilor sunt tratate ca un sistem. Nu lăsăm consistența la întâmplare.',
      },
      {
        title: 'Execuție apropiată de decizie',
        body: 'Păstrăm distanța scurtă între strategie, design și implementare, pentru a evita pierderea intenției pe parcurs.',
      },
    ],
    toolkit: ['React', 'Vite', 'Tailwind', 'GSAP', 'Content systems', 'Design systems'],
    stats: [
      { value: '1', label: 'sistem coerent de design, nu pagini disparate' },
      { value: '4', label: 'etape clare până la lansare' },
      { value: '∞', label: 'atenție pentru micro-detaliile care schimbă percepția' },
    ],
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Dacă ai un proiect, o relansare sau doar suspiciunea că site-ul actual nu mai ține pasul, hai să îl punem în ordine.',
      body: 'Formularul de mai jos pregătește un brief compact pe care îl poți trimite rapid din clientul tău de email. Dacă preferi, putem porni și de la o descriere scurtă a contextului.',
    },
    cards: [
      {
        title: 'Tip de proiect',
        body: 'Redesign, website nou, pagină de campanie, rafinare de poziționare sau iterare pe un produs deja lansat.',
      },
      {
        title: 'Timp de răspuns',
        body: 'Revenim, de regulă, în maximum o zi lucrătoare cu pașii următori și întrebările esențiale.',
      },
      {
        title: 'Format de colaborare',
        body: 'Workshop inițial, sprint de structură, execuție completă sau parteneriat iterativ pentru extinderea site-ului.',
      },
    ],
    budgetOptions: ['Sub 2.000 €', '2.000 – 5.000 €', '5.000 – 10.000 €', 'Peste 10.000 €', 'Încă evaluăm'],
    form: {
      title: 'Pregătește brief-ul',
      description:
        'Scrie pe scurt contextul, obiectivul și ce vrei să se schimbe. Noi ne ocupăm de structurarea discuției mai departe.',
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
        company: 'Numele brandului, dacă există',
        budget: 'Selectează un interval',
        message: 'Ce trebuie să facă noul site mai bine decât cel actual?',
      },
      submit: 'Generează mesajul',
      success: 'Brief-ul a fost pregătit și copiat pentru trimitere.',
      errors: {
        name: 'Te rog completează numele.',
        email: 'Te rog introdu un email valid.',
        message: 'Te rog descrie pe scurt proiectul.',
      },
    },
    faq: [
      {
        question: 'Aveți nevoie de un brief foarte detaliat de la început?',
        answer: 'Nu. Dacă avem contextul de business, publicul și obiectivul principal, putem ghida noi structura discuției.',
      },
      {
        question: 'Puteți prelua și conținutul, nu doar designul?',
        answer: 'Da, putem lucra și pe structură de conținut, microcopy și formulări pentru secțiunile esențiale, astfel încât pagina să comunice mai clar.',
      },
      {
        question: 'Lucrați doar pentru branduri mari?',
        answer: 'Nu. Proiectul potrivit nu este definit doar de dimensiune, ci de claritatea obiectivului și de disponibilitatea de a construi o experiență matură, nu doar „ceva frumos”.',
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
        title: 'Ce facem',
        links: [
          { label: 'Strategie de website', to: '/services' },
          { label: 'Design UX/UI', to: '/services' },
          { label: 'Implementare frontend', to: '/services' },
          { label: 'Optimizare conversie', to: '/services' },
        ],
      },
      {
        title: 'Colaborare',
        links: [
          { label: 'Vezi procesul', to: '/process' },
          { label: 'Discută despre proiect', to: '/contact' },
          { label: 'Despre studio', to: '/about' },
        ],
      },
    ],
    copyright: 'Toate drepturile rezervate.',
    backToTop: 'Înapoi sus',
  },
  meta: {
    title: 'BBL Sites',
    description:
      'BBL Sites construiește website-uri, interfețe și experiențe digitale clare, elegante și orientate spre conversie.',
  },
} as const;

export type SiteContent = typeof siteContent;
