export type Lang = 'en' | 'es'

export const content = {
  en: {
    nav: {
      home: 'Home',
      impact: 'Impact',
      toolkit: 'Toolkit',
      contact: 'Contact',
      langToggle: 'ES',
    },
    hero: {
      greeting: 'I am Maria Alejandra',
      headline:
        'I design and turn talent strategy into measurable people systems to drive high-performing teams within the business.',
      subhead:
        "Development, performance and talent acquisition with metrics that don't just measure results: they enable better decisions, refine processes and sustain growth for people and the organisation.",
      notes:
        'Master in Talent Development & HR @ IE Business School · English C1 · Madrid · Work permit',
      ctaPrimary: 'See my impact',
      ctaSecondary: "Let's talk now",
    },
    metrics: {
      eyebrow: 'Results',
      title: 'How I moved the needle',
      detailLabel: 'View detail',
      items: [
        { value: '90%', label: 'Avg. NPS · Inside Out · 3 cohorts', target: 'inside-out' },
        { value: '53% → 89%', label: 'IDP adoption · in 6 months', target: 'idps' },
        { value: '-30%', label: 'Time in talent reviews · vs. previous cycle', target: 'talent-reviews' },
        { value: '+42.8%', label: 'University partnerships · YoY growth', target: 'supply-trainee' },
      ],
    },
    toolkit: {
      eyebrow: 'Toolkit',
      title: 'Tools I work with',
      subtitle: 'The stack I use to design, automate and make people decisions sharper.',
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Where and how I created results',
      subtitle: 'Reverse chronological. Open a chapter, then a company, then a role to see milestones.',
      expandHint: 'Expand',
      collapseHint: 'See less',
      placeholder: 'Detail coming next — context, what I did, and the result.',
      details: {
        inditex: {
          eyebrow: 'Best Final Corporate Project · IE Business School × Inditex (Zara)',
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
          eyebrow: 'IE Business School × Anabion · Biopharma · 2025',
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
        suntory: {
          eyebrow: 'IE Business School × Suntory · FMCG · Toledo · 2025',
          title: 'Empowering Factory Teams',
          challenge:
            'At Suntory’s Toledo factory, HR needed to increase operators’ use of MySU — the internal LMS. After plant visits and 12 interviews with operators and leaders, the issue was not only “lack of use”: most leaders did little follow-up and barely promoted MySU; access was hard — little time, few devices, password friction, slow UX; and the content did not feel useful against real work on the plant floor.',
          solution:
            'The proposed solution was designed around three pillars: leadership habits (MySU role modeling and visible reinforcement of learning); frictionless learning at factory pace (MySU on line tablets and mobile, simplified login, 7–10 min microlearning for downtime); and Legacy Learning, a repository where plant know-how is captured and shared. Goal: purposeful digital development on the factory floor — measurable and aligned with the operating culture.',
          expand: 'Expand',
          close: 'Close',
          prev: 'Previous',
          next: 'Next',
          slides: [
            'Challenges identified',
            'Three solution pillars',
            'Frictionless learning in the factory',
            'Legacy Learning · Chishikiko',
          ],
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
      toolkit: 'Toolkit',
      contact: 'Contacto',
      langToggle: 'EN',
    },
    hero: {
      greeting: 'Soy Maria Alejandra',
      headline:
        'Desarrollo y convierto la estrategia de talento en sistemas de people medibles para impulsar equipos de alto rendimiento dentro del negocio.',
      subhead:
        'Desarrollo, desempeño y atracción de talento con métricas que no solo miden resultados: permiten decidir mejor, ajustar procesos y sostener el crecimiento de las personas y de la organización.',
      notes:
        'Master in Talent Development & HR @ IE Business School · Inglés C1 · Madrid · Permiso de trabajo',
      ctaPrimary: 'Ver mi impacto',
      ctaSecondary: 'Hablemos',
    },
    metrics: {
      eyebrow: 'Resultados',
      title: 'Cómo generé impacto',
      detailLabel: 'Ver detalle',
      items: [
        { value: '90%', label: 'NPS promedio · Inside Out · 3 cohortes', target: 'inside-out' },
        { value: '53% → 89%', label: 'Adopción de PDIs · en 6 meses', target: 'idps' },
        { value: '-30%', label: 'Tiempo en talent reviews · vs. ciclo anterior', target: 'talent-reviews' },
        { value: '+42.8%', label: 'Alianzas universitarias · crecimiento YoY', target: 'supply-trainee' },
      ],
    },
    toolkit: {
      eyebrow: 'Toolkit',
      title: 'Con qué trabajo',
      subtitle: 'Las herramientas que uso para diseñar, automatizar y tomar mejores decisiones de people.',
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Dónde y cómo generé resultado',
      subtitle: 'Orden cronológico inverso. Abre un capítulo, luego una empresa y un cargo para ver los hitos.',
      expandHint: 'Ver más',
      collapseHint: 'Ver menos',
      placeholder: 'Detalle próximamente — contexto, qué hice y el resultado.',
      details: {
        inditex: {
          eyebrow: 'Best Final Corporate Project · IE Business School × Inditex (Zara)',
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
          eyebrow: 'IE Business School × Anabion · Biopharma · 2025',
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
        suntory: {
          eyebrow: 'IE Business School × Suntory · FMCG · Toledo · 2025',
          title: 'Empowering Factory Teams',
          challenge:
            'En la fábrica de Suntory en Toledo, HR necesitaba incrementar el uso de MySU —el LMS interno— entre operarios. Tras visitas a planta y 12 entrevistas con operarios y líderes, el problema no era solo “falta de uso”: la mayoría de líderes no hacían follow-up ni promovían MySU; no había fácil acceso: poco tiempo, pocos dispositivos, inconvenientes con contraseñas, un UX lento; y el contenido no se percibía útil frente al trabajo real en la planta.',
          solution:
            'La solución propuesta se diseñó bajo tres ejes: hábitos de liderazgo (role modeling de MySU, y refuerzo visible del aprendizaje); aprendizaje sin fricción en el ritmo de fábrica (MySU en tablets de línea y móvil, login simplificado, microlearning de 7–10 min para el downtime); y Legacy Learning, un repositorio donde el know-how de la planta se captura y se comparte. Objetivo: garantizar el desarrollo digital con propósito en la fábrica, que fuera medible y alineado a la cultura operativa.',
          expand: 'Ampliar',
          close: 'Cerrar',
          prev: 'Anterior',
          next: 'Siguiente',
          slides: [
            'Retos identificados',
            'Tres ejes de solución',
            'Aprendizaje sin fricción en fábrica',
            'Legacy Learning · Chishikiko',
          ],
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
  emailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=alejamorenoa96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ma-alejandra-moreno/',
  cvPathEn: '/CV_MariaAlejandra_Moreno.pdf',
  cvPathEs: '/CV_MariaAlejandra_Moreno_ES.pdf',
  phone: '+34 603 597 290',
  phoneHref: 'tel:+34603597290',
  whatsappDisplay: '+57 315 671 1060',
  whatsapp: 'https://wa.me/573156711060',
  location: 'Madrid, Spain',
}
