export type Lang = 'en' | 'es'

export const content = {
  en: {
    nav: {
      home: 'Home',
      impact: 'Impact',
      contact: 'Contact',
      langToggle: 'ES',
    },
    hero: {
      greeting: 'I am Maria Alejandra',
      headline:
        'HR reaches its full potential when it connects the whole organisation, from leadership to entry level, around one shared purpose.',
      subhead:
        "With 5 years across the full HR cycle and my Master's in Talent Development, I'm the bridge that keeps every process running efficiently and in sync, making space for what actually drives any company's success: its people's development.",
      notes: 'Master in Talent Development @ IE · English C1 · Madrid',
      ctaPrimary: 'See my impact',
      ctaSecondary: "Let's talk now",
    },
    metrics: {
      eyebrow: 'Results',
      title: 'What the work moved',
      items: [
        { value: '90%', label: 'NPS — Middle Leadership Programme' },
        { value: '53% → 89%', label: 'Individual development plan adoption' },
        { value: '-30%', label: 'Time spent on talent reviews' },
        { value: '+42.8%', label: 'University partnership growth' },
      ],
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Where and how I created results',
      subtitle: 'Reverse chronological. Open a chapter, then a company, to see the intervention.',
      placeholder: 'Detail coming next — context, what I did, and the result.',
      details: {
        inditex: {
          eyebrow: 'Best Final Corporate Project · IE × Inditex (Zara)',
          title: 'Presence+ — absenteeism dashboard for store managers',
          challenge:
            'Zara store managers across Europe needed more than an absenteeism dashboard they often lack time to interpret. In high-turnover retail, dashboards only work when they become a practical guide — pointing managers to concrete actions they can run quickly.',
          solution:
            'We built an actionable dashboard for an internal Inditex programme to control absenteeism: a centralised AI tool that turns metrics into recommendations, so managers act with more precision, speed and accuracy.',
          outcome:
            'Awarded Best Final Corporate Project of the Master for how practically it answered the client’s need.',
          play: 'Play walkthrough · 2×',
          pause: 'Pause',
          expand: 'Expand',
          close: 'Close',
        },
        anabion: {
          eyebrow: 'IE × Anabion · Biopharma · 2025',
          title: 'ANABION Talent Market Analytics Hub',
          challenge:
            'In a highly competitive industry like pharma, Anabion needed a talent pool that worked proactively. Instead of continuing acquisition through non-centralised flows across 15 countries, we built a Talent Market Analytics Hub.',
          solution:
            'The platform maps pharmaceutical markets by capacity, demand and talent supply in each country, generates outreach messaging tailored to each region so the EVP lands effectively, and monitors sector signals such as layoffs, expansions and relevant news — so leaders can prospect talent with real-time, precise and competitive information.',
          play: 'Play walkthrough · 2×',
          pause: 'Pause',
          expand: 'Expand',
          close: 'Close',
        },
      },
      timeline: [
        {
          id: 'consulting',
          title: 'IE Business School consulting',
          years: '2025–2026',
          items: [
            { id: 'inditex', name: 'Inditex', meta: 'Zara · 2026 · Best Final Corporate Project' },
            { id: 'anabion', name: 'Anabion', meta: 'Biopharma · 2025' },
            { id: 'suntory', name: 'Suntory', meta: 'FMCG · Toledo · 2025' },
          ],
        },
        {
          id: 'experience',
          title: 'Professional experience',
          years: '2021–2025',
          items: [
            { id: 'ubits', name: 'UBITS', meta: 'Talent Management · 2022–2025' },
            { id: 'bavaria', name: 'AB INBEV - BAVARIA', meta: 'People Continuity · 2021–2022' },
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      subtitle: 'Madrid · open to HRBP, People Partner, Talent Development and Talent Acquisition roles.',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Download CV',
    },
    footer: {
      copyright: '© 2026 Maria Alejandra Moreno. All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Home',
      impact: 'Impacto',
      contact: 'Contacto',
      langToggle: 'EN',
    },
    hero: {
      greeting: 'Soy Maria Alejandra',
      headline:
        'HR logra su máximo potencial cuando conecta a toda la organización, desde liderazgo hasta entry level, bajo un mismo propósito.',
      subhead:
        'Con 5 años en el ciclo completo de HR y mi Máster en Talent Development, soy ese puente que garantiza que los procesos funcionen de forma sincronizada y eficiente, dejando espacio para lo que realmente potencializa el éxito de cualquier empresa: el desarrollo de su talento.',
      notes: 'Master in Talent Development @ IE · Inglés C1 · Madrid',
      ctaPrimary: 'Ver mi impacto',
      ctaSecondary: 'Hablemos',
    },
    metrics: {
      eyebrow: 'Resultados',
      title: 'Lo que el trabajo movió',
      items: [
        { value: '90%', label: 'NPS — Middle Leadership Programme' },
        { value: '53% → 89%', label: 'Adopción de planes de desarrollo individual' },
        { value: '-30%', label: 'Tiempo invertido en talent reviews' },
        { value: '+42.8%', label: 'Crecimiento de alianzas universitarias' },
      ],
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Dónde y cómo generé resultado',
      subtitle: 'Orden cronológico inverso. Abre un capítulo y luego una empresa para ver la intervención.',
      placeholder: 'Detalle próximamente — contexto, qué hice y el resultado.',
      details: {
        inditex: {
          eyebrow: 'Best Final Corporate Project · IE × Inditex (Zara)',
          title: 'Presence+ — dashboard de absentismo para store managers',
          challenge:
            'Los store managers de Zara en Europa necesitaban más que un dashboard de absentismo que muchas veces no tienen tiempo de interpretar. En retail de alta rotación, los dashboards sólo sirven si se convierten en una guía práctica: acciones concretas que puedan ejecutar en poco tiempo.',
          solution:
            'Por eso construimos un dashboard accionable para un programa interno de Inditex que busca controlar el absentismo: una herramienta centralizada con IA que transforma métricas en recomendaciones, para intervenir y decidir con más precisión, velocidad y acierto.',
          outcome:
            'Premiado como Best Final Corporate Project del Master por su practicidad al responder a la necesidad del cliente.',
          play: 'Ver recorrido · 2×',
          pause: 'Pausar',
          expand: 'Ampliar',
          close: 'Cerrar',
        },
        anabion: {
          eyebrow: 'IE × Anabion · Biopharma · 2025',
          title: 'ANABION Talent Market Analytics Hub',
          challenge:
            'Ante un entorno altamente competitivo como lo es la industria farma, se necesitaba un pool de talento que funcionara de manera proactiva. Por esto, en vez de continuar el proceso de adquisición a través de flujos no centralizados para 15 países, se construyó un Talent Market Analytics Hub.',
          solution:
            'La plataforma mapea los mercados farmacéuticos por capacidad, demanda y oferta de talento en cada país, genera mensajes de outreach adaptados a cada región para trabajar su EVP de manera efectiva, y monitorea señales del sector como layoffs, expansiones y noticias relevantes, para que los líderes puedan prospectar talento con información en tiempo real, de forma precisa y competitiva.',
          play: 'Ver recorrido · 2×',
          pause: 'Pausar',
          expand: 'Ampliar',
          close: 'Cerrar',
        },
      },
      timeline: [
        {
          id: 'consulting',
          title: 'Consultoría IE Business School',
          years: '2025–2026',
          items: [
            { id: 'inditex', name: 'Inditex', meta: 'Zara · 2026 · Best Final Corporate Project' },
            { id: 'anabion', name: 'Anabion', meta: 'Biopharma · 2025' },
            { id: 'suntory', name: 'Suntory', meta: 'FMCG · Toledo · 2025' },
          ],
        },
        {
          id: 'experience',
          title: 'Experiencia profesional',
          years: '2021–2025',
          items: [
            { id: 'ubits', name: 'UBITS', meta: 'Talent Management · 2022–2025' },
            { id: 'bavaria', name: 'AB INBEV - BAVARIA', meta: 'People Continuity · 2021–2022' },
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      subtitle: 'Madrid · abierta a roles de HRBP, People Partner, Talent Development y Talent Acquisition.',
      phoneLabel: 'Teléfono',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Descargar CV',
    },
    footer: {
      copyright: '© 2026 Maria Alejandra Moreno. Todos los derechos reservados.',
    },
  },
} as const

export const contact = {
  email: 'alejamorenoa96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ma-alejandra-moreno-aguirre',
  cvPath: '/CV_MariaAlejandra_Moreno.pdf',
  phone: '+34 603 597 290',
  phoneHref: 'tel:+34603597290',
  whatsapp: 'https://wa.me/34603597290',
  location: 'Madrid, Spain',
}
