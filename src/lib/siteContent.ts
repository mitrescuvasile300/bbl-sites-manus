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
      'Creăm site-uri de prezentare, landing page-uri și experiențe digitale care ajută firmele să inspire încredere și să obțină mai ușor cereri de ofertă.',
    positioning:
      'BBL Sites este un studio digital care creează website-uri pentru companii, IMM-uri și business-uri de servicii care au nevoie de o prezență online clară, modernă și convingătoare.',
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
      eyebrow: 'Site-uri de prezentare pentru firme care vor să inspire încredere din primul ecran',
      title: ['Website-uri', 'profesioniste', 'care aduc cereri'],
      description:
        'Pentru companii, IMM-uri și afaceri de servicii, construim website-uri clare, rapide și convingătoare — de la structură și design până la implementare și lansare.',
      primaryCta: { label: 'Vezi serviciile', to: '/services' },
      secondaryCta: { label: 'Solicită o discuție', to: '/contact' },
      checkpoints: ['Strategie', 'Design', 'Implementare', 'Lansare'],
    },
    trust: {
      eyebrow: 'Ce putem construi pentru tine',
      items: ['Site de prezentare', 'Landing page', 'Redesign website', 'Magazin online', 'Design UI', 'Implementare frontend'],
    },
    highlights: [
      {
        title: 'Mesaj clar pentru clienții potriviți',
        body: 'Structurăm paginile astfel încât un potențial client să înțeleagă rapid ce oferi, cui te adresezi și de ce merită să te contacteze.',
      },
      {
        title: 'Design profesionist, adaptat business-ului',
        body: 'Construim o imagine online coerentă, modernă și credibilă, astfel încât site-ul să susțină poziționarea firmei și să inspire încredere.',
      },
      {
        title: 'Implementare curată și ușor de extins',
        body: 'Livrăm un site rapid, responsive și bine organizat, astfel încât să poată fi actualizat, extins și folosit fără complicații după lansare.',
      },
    ],
    caseStudies: [
      {
        title: 'Companii de servicii',
        image: '/cs-flux-thumb.jpg',
        label: 'Site de prezentare',
        summary:
          'Pentru firme de consultanță, construcții, logistică, producție sau servicii profesionale care trebuie să explice clar ce oferă și de ce merită alese.',
      },
      {
        title: 'Clinici și business-uri locale',
        image: '/cs-sparknews-thumb.jpg',
        label: 'Website orientat spre contact',
        summary:
          'Pentru cabinete, clinici, saloane sau afaceri locale care au nevoie de încredere, informații clare și un traseu simplu către apel, formular sau programare.',
      },
      {
        title: 'Magazine online și produse',
        image: '/cs-lmvr-thumb.jpg',
        label: 'E-commerce și pagini de vânzare',
        summary:
          'Pentru business-uri care vând produse și au nevoie de un magazin online clar, bine organizat și orientat spre încredere, coș și comandă.',
      },
    ],
    processPreview: {
      eyebrow: 'Cum lucrăm',
      title: 'Un proces clar, de la idee la lansare.',
      body: 'Lucrăm etapizat, astfel încât să știi ce se întâmplă, ce primești și cum ajungem de la brief la un site gata de publicare.',
      steps: [
        {
          number: '01',
          title: 'Discuție și audit',
          description: 'Înțelegem business-ul, oferta, publicul și problemele site-ului actual sau ale prezenței online existente.',
        },
        {
          number: '02',
          title: 'Structură și design',
          description: 'Organizăm conținutul, definim secțiunile importante și construim o direcție vizuală potrivită pentru firma ta.',
        },
        {
          number: '03',
          title: 'Implementare și lansare',
          description: 'Dezvoltăm site-ul, îl optimizăm pentru toate ecranele și îl pregătim pentru publicare și utilizare reală.',
        },
      ],
    },
    closing: {
      title: 'Dacă site-ul actual nu reflectă nivelul firmei tale, îl reconstruim mai clar, mai credibil și mai orientat spre contact.',
      body: 'Pornim de la obiectivele tale, organizăm conținutul și construim un site care arată profesionist și susține cererile de ofertă.',
      primaryCta: { label: 'Vorbește cu noi', to: '/contact' },
    },
  },
  services: {
    hero: {
      eyebrow: 'Servicii',
      title: 'Servicii complete pentru firme care au nevoie de un site clar, modern și convingător.',
      body: 'De la structură și mesaj până la design și implementare, construim site-uri de prezentare, landing page-uri, redesign-uri și magazine online care ajută clientul să înțeleagă imediat ce oferi.',
    },
    items: [
      {
        number: '01',
        title: 'Strategie și structură website',
        intro: 'Stabilim ce trebuie să comunice site-ul, ce pagini sunt necesare și cum ghidăm vizitatorul spre contact sau cerere de ofertă.',
        deliverables: ['Audit website existent', 'Structură pagini și secțiuni', 'Sitemap', 'Mesaje-cheie pentru fiecare pagină'],
      },
      {
        number: '02',
        title: 'Design UI pentru site',
        intro: 'Transformăm structura într-un design profesionist, coerent și adaptat brandului, publicului și tipului de business.',
        deliverables: ['Direcție vizuală', 'Wireframe-uri', 'Design pagini principale', 'Sistem de componente'],
      },
      {
        number: '03',
        title: 'Implementare website',
        intro: 'Construim site-ul într-un mod curat și rapid, cu accent pe responsive, performanță și o experiență bună pe toate dispozitivele.',
        deliverables: ['Dezvoltare pagini', 'Responsive complet', 'Integrare animații utile', 'Pregătire pentru lansare'],
      },
      {
        number: '04',
        title: 'Magazine online și e-commerce',
        intro: 'Pregătim experiențe de catalog, pagini de produs și fluxuri de cumpărare pentru business-uri care vând online și au nevoie de o prezentare profesionistă.',
        deliverables: ['Structură catalog', 'Pagini de produs', 'Flux de checkout', 'Integrare funcționalități comerciale'],
      },
      {
        number: '05',
        title: 'Optimizare pentru conversii',
        intro: 'Așezăm conținutul și apelurile la acțiune astfel încât vizitatorii să înțeleagă repede ce au de făcut mai departe.',
        deliverables: ['CTA-uri mai clare', 'Structură de contact', 'Secțiuni de încredere', 'Reducerea punctelor de blocaj'],
      },
    ],
    siteTypes: [
      {
        title: 'Site-uri de prezentare',
        body: 'Pentru firme, IMM-uri și companii de servicii care vor să își prezinte clar oferta, echipa și diferențiatorii.',
      },
      {
        title: 'Landing page-uri',
        body: 'Pentru campanii, lansări, servicii noi sau pagini orientate spre o singură acțiune: contact, înscriere sau cerere de ofertă.',
      },
      {
        title: 'Redesign-uri',
        body: 'Pentru business-uri care au deja un site, dar vor o versiune mai modernă, mai clară și mai credibilă.',
      },
      {
        title: 'Magazine online',
        body: 'Pentru branduri și business-uri care vând produse și au nevoie de o experiență de cumpărare bine structurată.',
      },
    ],
    businessTypes: [
      {
        title: 'Firme de servicii și B2B',
        body: 'Consultanță, construcții, logistică, producție, software, financiar, juridic și alte domenii unde claritatea ofertei contează mult.',
      },
      {
        title: 'IMM-uri și afaceri locale',
        body: 'Clinici, cabinete, saloane, showroom-uri, agenții și business-uri locale care au nevoie de încredere și contact rapid.',
      },
      {
        title: 'Branduri și magazine online',
        body: 'Business-uri cu produse proprii, colecții sau campanii comerciale care au nevoie de pagini de vânzare și e-commerce bine prezentat.',
      },
    ],
    engagementModels: [
      {
        title: 'Site nou de la zero',
        body: 'Potrivit pentru firme care pornesc un business nou sau au nevoie de o prezență online construită corect de la început.',
      },
      {
        title: 'Redesign site existent',
        body: 'Potrivit când site-ul actual arată învechit, comunică neclar sau nu mai reflectă nivelul real al companiei.',
      },
      {
        title: 'Landing page sau extindere',
        body: 'Potrivit pentru campanii, servicii noi, pagini de ofertă sau dezvoltare etapizată peste un site deja existent.',
      },
    ],
    faq: [
      {
        question: 'Lucrați doar pe design sau și pe implementare?',
        answer: 'Putem ajuta atât cu partea de structură și design, cât și cu implementarea completă a site-ului, în funcție de ce ai nevoie.',
      },
      {
        question: 'Puteți lucra peste un site existent?',
        answer: 'Da. În funcție de starea actuală a site-ului, putem face un redesign, o restructurare a conținutului sau o reconstrucție completă.',
      },
      {
        question: 'Cu ce informații pornim la început?',
        answer: 'Ideal, avem nevoie de o descriere clară a serviciilor, tipului de client vizat, obiectivelor și câtorva exemple de site-uri care îți plac.',
      },
    ],
  },
  process: {
    hero: {
      eyebrow: 'Proces',
      title: 'Așa lucrăm când construim un site pentru o firmă sau un business în creștere.',
      body: 'Procesul nostru este simplu și clar: înțelegem obiectivul, organizăm conținutul, construim designul și implementăm site-ul până la lansare.',
    },
    principles: [
      'Începem cu obiectivele business-ului și publicul vizat.',
      'Punem claritatea mesajului înaintea efectelor decorative.',
      'Luăm deciziile pe etape, ca să evităm blocajele și refacerile inutile.',
      'Folosim animația doar acolo unde ajută experiența, nu unde o încarcă.',
    ],
    phases: [
      {
        number: '01',
        title: 'Discuție și audit',
        description: 'Analizăm serviciile, obiectivele, publicul și site-ul actual, ca să înțelegem ce trebuie păstrat, clarificat sau schimbat.',
        outputs: ['Discuție inițială', 'Audit website', 'Obiective și priorități', 'Direcție de lucru'],
      },
      {
        number: '02',
        title: 'Structură și conținut',
        description: 'Definim paginile, secțiunile și ordinea informației astfel încât site-ul să fie ușor de urmărit și ușor de înțeles.',
        outputs: ['Sitemap', 'Structură pagini', 'Copy de bază', 'Plan CTA'],
      },
      {
        number: '03',
        title: 'Design vizual',
        description: 'Construim un aspect profesionist, modern și adaptat firmei tale, astfel încât site-ul să inspire încredere și claritate.',
        outputs: ['Direcție vizuală', 'Design homepage', 'Componente vizuale', 'Reguli responsive'],
      },
      {
        number: '04',
        title: 'Implementare și lansare',
        description: 'Dezvoltăm site-ul, îl optimizăm pentru desktop și mobil și îl pregătim pentru publicare într-o formă curată și stabilă.',
        outputs: ['Dezvoltare frontend', 'Verificare finală', 'Optimizări', 'Pregătire pentru publicare'],
      },
    ],
    rituals: [
      {
        title: 'Feedback scurt și clar',
        body: 'Preferăm feedback concret și decizii rapide, astfel încât proiectul să meargă înainte fără runde inutile de discuții.',
      },
      {
        title: 'Prioritate pentru paginile importante',
        body: 'Începem cu homepage-ul și paginile care aduc contactele cele mai valoroase, apoi extindem restul site-ului.',
      },
      {
        title: 'Lansare cu lucrurile în ordine',
        body: 'Publicăm doar după ce verificăm conținutul, structura, afișarea pe mobil și traseele principale către contact.',
      },
    ],
    faq: [
      {
        question: 'Cât de implicată trebuie să fie echipa noastră?',
        answer: 'Avem nevoie de implicare la început pentru brief și apoi în momentele importante de decizie. În rest, ținem procesul cât mai simplu pentru tine.',
      },
      {
        question: 'Putem lansa întâi o versiune mai scurtă?',
        answer: 'Da. Putem începe cu un homepage și câteva pagini esențiale, apoi extindem site-ul în etape, în funcție de priorități.',
      },
    ],
  },
  about: {
    hero: {
      eyebrow: 'Despre BBL Sites',
      title: 'Ajutăm firmele să aibă site-uri mai clare, mai credibile și mai bine aliniate cu nivelul lor real.',
      body: 'BBL Sites este un studio digital concentrat pe website-uri de prezentare, landing page-uri și redesign-uri pentru companii care vor o imagine online profesionistă și ușor de înțeles.',
    },
    story: [
      'Am pornit dintr-o observație simplă: multe firme oferă servicii bune, dar site-ul lor nu reușește să explice clar valoarea, diferențele și motivele pentru care merită contactate.',
      'De aceea construim site-uri care combină mesajul clar, designul profesionist și implementarea curată, astfel încât prezența online să susțină în mod real vânzarea și imaginea companiei.',
    ],
    values: [
      {
        title: 'Claritate în mesaj',
        body: 'Un site bun trebuie să explice rapid ce oferi, pentru cine lucrezi și de ce merită să fii ales.',
      },
      {
        title: 'Design care inspiră încredere',
        body: 'Lucrăm atent la ierarhie, spațiere, tipografie și detalii vizuale pentru ca fiecare pagină să arate profesionist și coerent.',
      },
      {
        title: 'Execuție fără complicații inutile',
        body: 'Păstrăm procesul clar, cu puțini pași, feedback aplicat și implementare bine organizată până la lansare.',
      },
    ],
    toolkit: ['React', 'Vite', 'Tailwind', 'GSAP', 'Structură conținut', 'Sisteme UI', 'E-commerce flows'],
    stats: [
      { value: '1', label: 'obiectiv clar: un site care explică bine ce oferi' },
      { value: '4', label: 'etape simple de la brief la lansare' },
      { value: '100%', label: 'atenție la claritate, imagine și experiență' },
    ],
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Spune-ne ce tip de site ai nevoie și revenim cu o direcție clară pentru proiect.',
      body: 'Poți trimite rapid contextul business-ului, serviciile tale și ce vrei să îmbunătățești. De aici pornim cu pașii potriviți pentru site-ul tău.',
    },
    cards: [
      {
        title: 'Tip de proiect',
        body: 'Site nou, redesign, landing page, pagină de ofertă sau îmbunătățirea unui site existent.',
      },
      {
        title: 'Timp de răspuns',
        body: 'În mod normal revenim în maximum o zi lucrătoare cu un răspuns și cu întrebările necesare pentru următorul pas.',
      },
      {
        title: 'Cum putem colabora',
        body: 'Putem porni cu un audit, cu design și structură sau direct cu dezvoltarea completă a site-ului.',
      },
    ],
    budgetOptions: ['Sub 2.000 €', '2.000 – 5.000 €', '5.000 – 10.000 €', 'Peste 10.000 €', 'Încă evaluăm'],
    form: {
      title: 'Trimite-ne brief-ul',
      description:
        'Scrie pe scurt ce face firma ta, ce tip de site îți dorești și ce vrei să obții. Îți răspundem cu o direcție clară pentru următorii pași.',
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
        message: 'Ce servicii oferi și ce ar trebui să facă noul site mai bine?',
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
        answer: 'Nu. Este suficient să înțelegem cu ce se ocupă firma, ce obiectiv ai pentru site și ce simți că nu funcționează bine acum.',
      },
      {
        question: 'Puteți ajuta și cu textele site-ului?',
        answer: 'Da. Putem lucra și la structură, formulări și mesaje-cheie, astfel încât site-ul să fie mai clar pentru clienții tăi.',
      },
      {
        question: 'Lucrați doar pentru companii mari?',
        answer: 'Nu. Lucrăm și cu IMM-uri, afaceri locale și firme de servicii care au nevoie de un site mai bun și de o prezență online mai credibilă.',
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
          { label: 'Site-uri de prezentare', to: '/services' },
          { label: 'Landing page-uri', to: '/services' },
          { label: 'Magazine online', to: '/services' },
          { label: 'Optimizare pentru conversii', to: '/services' },
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
      'BBL Sites creează site-uri de prezentare, landing page-uri și experiențe digitale clare, moderne și orientate spre cereri de ofertă.',
  },
} as const;

export type SiteContent = typeof siteContent;
