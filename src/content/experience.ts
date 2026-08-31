/** Experience hierarchy: company → roles → milestones (clickable when `detail` exists). */

export type MilestoneDetail = {
  metric?: string
  metricLabel?: string
  body: string
  story?: string
  visual?: 'sixbox' | 'talent-reviews'
  prepSteps?: string[]
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export type Milestone = {
  id: string
  label: string
  detail?: MilestoneDetail
}

export type Role = {
  id: string
  title: string
  dates: string
  milestones: Milestone[]
}

export type ExperienceCompany = {
  id: string
  name: string
  years: string
  roles: Role[]
}

export const experienceContent = {
  en: {
    close: 'Close',
    openHint: 'View detail',
    prepTitle: '1:1 prep before Talent Reviews',
    companies: [
      {
        id: 'ubits',
        name: 'UBITS',
        years: '2022–2025',
        roles: [
          {
            id: 'tm-associate',
            title: 'Talent Management Associate',
            dates: 'Jun 2025 – Aug 2025',
            milestones: [
              {
                id: 'ai-expert',
                label:
                  'Designed and implemented the in-house AI upskilling program "From 0 to AI Expert": bi-weekly webinars led by internal experts so every function launched at least two projects applying AI to improve internal processes. $500 prize for the best business case.',
              },
            ],
          },
          {
            id: 'tm-sr',
            title: 'Talent Management Sr. Specialist',
            dates: 'Oct 2022 – Jun 2025',
            milestones: [
              {
                id: 'bp',
                label:
                  'Business partner to leaders at every level: performance calibration, talent reviews, succession plans and organisational design.',
              },
              {
                id: 'talent-reviews',
                label:
                  'Talent review redesign: 1:1 prep framework for leaders + calibration model from 9-box to 6-box → −30% time in review sessions vs. previous cycle, without losing decision quality.',
                detail: {
                  metric: '−30%',
                  metricLabel: 'Time in talent review sessions · vs. previous cycle',
                  body: 'Measured in the first semestral cycle after the redesign. Two moves drove that −30%: simplifying the calibration model from 9-box to 6-box, with clearer, more concrete conversations and less noise; and a 1:1 prep framework so leaders arrived with solid arguments to calibration sessions, raising rigor in decision-making.',
                  story: 'Less time in the room. Better-grounded talent decisions.',
                  visual: 'talent-reviews',
                  prepSteps: [
                    'Goals & feedback from the last period',
                    '360° results (leader + report)',
                    'Career conversation',
                    'Action plan / IDP',
                    'Leader-only Talent Review prep',
                  ],
                },
              },
              {
                id: 'inside-out',
                label:
                  'Middle Leadership Programme “Inside Out”: built from scratch · 3 cohorts · avg. NPS 90%.',
                detail: {
                  metric: '90%',
                  metricLabel: 'Avg. NPS · 3 cohorts · Middle Leadership Programme',
                  body: 'Designed and ran “Inside Out” from zero: a middle-leadership programme that connects self-awareness with how leaders show up and are perceived by their teams, delivered across three cohorts.',
                  story: 'Leaders who know themselves lead people better.',
                },
              },
              {
                id: 'mentoring',
                label:
                  'Mentoring by UBITS: built from scratch · 4 cohorts · 40+ matches.',
                detail: {
                  metric: '40+',
                  metricLabel: 'Mentoring matches across 4 cohorts',
                  body: 'I created Mentoring by UBITS end to end: programme design, matching logic and cohort execution to support integral talent learning and development, while enabling cross-area communication. Because mentors were often from other teams, sessions also became informal channels for sharing what other areas were working on, opening space for transversal collaboration and alignment.',
                  story: 'The individual grows. Collaboration transforms.',
                },
              },
              {
                id: 'voice',
                label:
                  'Voice of Ubitsers: structured listening sessions with every team to surface engagement risks and build tailored action plans with leaders.',
              },
              {
                id: 'feedback-360',
                label:
                  '360° feedback rollout with personalised dashboards feeding talent-review discussions and final 6-box placement.',
              },
              {
                id: 'idps',
                label:
                  'Individual development plans: competencies defined with leaders, aligned to each person’s growth and to business OKRs → adoption from 53% to 89% in 6 months.',
                detail: {
                  metric: '53% → 89%',
                  metricLabel: 'IDP adoption · 6 months',
                  body: 'I made IDPs useful: competencies agreed with each leader, connected to professional growth and to business OKRs, give a clear sense of impact and mobilise execution from intrinsic motivation.',
                  story: 'When growth is clear for the person and for the business, the plan makes sense.',
                },
              },
              {
                id: 'analytics',
                label:
                  'Looker dashboards for people analytics + workflow automation with Make and Slack.',
              },
            ],
          },
          {
            id: 'tm-specialist',
            title: 'Talent Management Specialist',
            dates: 'Feb 2022 – Oct 2022',
            milestones: [
              {
                id: 'onboarding',
                label:
                  'Designed and implemented end-to-end onboarding as the main HR contact → 80+ new joiners with NPS 84.',
                detail: {
                  metric: '84',
                  metricLabel: 'NPS · onboarding experience',
                  body: 'I designed and led onboarding end to end as the HR face for new joiners: from coordinating equipment and welcome kits to running onboarding sessions, tracking attendance and measuring NPS across those sessions — impacting 80+ new joiners.',
                  story: 'The challenge is a friendly, clear onboarding: a key moment that shapes how the rest of the learning curve unfolds.',
                },
              },
              {
                id: 'saas',
                label:
                  'Managed the in-house SaaS learning platform: designed training plans aligned to the competencies in individual development plans for 250 employees.',
              },
            ],
          },
        ],
      },
      {
        id: 'bavaria',
        name: 'AB INBEV - BAVARIA',
        years: '2021–2022',
        roles: [
          {
            id: 'pca',
            title: 'People Continuity Analyst',
            dates: 'Feb 2021 – Feb 2022',
            milestones: [
              {
                id: 'recruiting',
                label:
                  'Led end-to-end recruiting across Logistics, Marketing and Communications → ~35-day time to fill.',
              },
              {
                id: 'supply-trainee',
                label:
                  'Supply Trainee Programme: partnered with senior leaders to select top talent → +42.8% university partnerships YoY, plus assessments for highly qualified profiles.',
                detail: {
                  metric: '+42.8%',
                  metricLabel: 'University partnership growth · YoY · Supply Trainee Programme',
                  body: 'As People Continuity partner on the Supply Trainee Programme, I worked with senior leaders on selection and expanded the university alliance base that fed the pipeline.',
                  story: 'We reached more talent and built a stronger pool, not only for this programme but for future vacancies: a proactive coverage strategy.',
                },
              },
            ],
          },
        ],
      },
    ] satisfies ExperienceCompany[],
  },
  es: {
    close: 'Cerrar',
    openHint: 'Ver detalle',
    prepTitle: 'Preparación 1:1 antes de Talent Reviews',
    companies: [
      {
        id: 'ubits',
        name: 'UBITS',
        years: '2022–2025',
        roles: [
          {
            id: 'tm-associate',
            title: 'Talent Management Associate',
            dates: 'Jun 2025 – Aug 2025',
            milestones: [
              {
                id: 'ai-expert',
                label:
                  'Diseñé e implementé el programa de upskilling en IA "From 0 to AI Expert": webinars quincenales con expertos internos para que cada área lanzara al menos dos proyectos que aplicaran IA y mejoraran procesos internos. Premio de 500 USD al mejor caso de negocio.',
              },
            ],
          },
          {
            id: 'tm-sr',
            title: 'Talent Management Sr. Specialist',
            dates: 'Oct 2022 – Jun 2025',
            milestones: [
              {
                id: 'bp',
                label:
                  'Business partner de líderes en todos los niveles: calibración de desempeño, talent reviews, planes de sucesión y diseño organizacional.',
              },
              {
                id: 'talent-reviews',
                label:
                  'Rediseño de talent reviews: framework de preparación 1:1 para líderes y calibración de 9-box a 6-box → −30% tiempo en sesiones vs. ciclo anterior, sin perder rigor.',
                detail: {
                  metric: '−30%',
                  metricLabel: 'Tiempo en sesiones de talent review · vs. ciclo anterior',
                  body: 'Medido en la primera ronda semestral tras el rediseño. Dos movimientos llevaron a ese −30%: la simplificación del modelo de calibración de 9-box a 6-box, con conversaciones más claras, concretas y con menos ruido; y un framework de preparación 1:1 para que los líderes llegaran con argumentos sólidos a las sesiones de calibración, aumentando el rigor en la toma de decisiones.',
                  story: 'Menos tiempo en la sala. Decisiones de talento mejor fundamentadas.',
                  visual: 'talent-reviews',
                  prepSteps: [
                    'Objetivos y feedback del último periodo',
                    'Resultados 360° (líder + reporte)',
                    'Career conversation',
                    'Plan de acción / PDI',
                    'Preparación Talent Review (paso del líder)',
                  ],
                },
              },
              {
                id: 'inside-out',
                label:
                  'Middle Leadership Programme “Inside Out”: diseñado desde cero · 3 cohortes · NPS promedio 90%.',
                detail: {
                  metric: '90%',
                  metricLabel: 'NPS promedio · 3 cohortes · Middle Leadership Programme',
                  body: 'Diseñé y ejecuté “Inside Out” desde cero: un programa de middle leadership que conecta autoconocimiento con cómo los líderes se muestran y son percibidos por sus equipos, entregado en tres cohortes.',
                  story: 'Líderes que se conocen, lideran mejor a su gente.',
                },
              },
              {
                id: 'mentoring',
                label:
                  'Mentoring by UBITS: construido desde cero · 4 cohortes · 40+ matches.',
                detail: {
                  metric: '40+',
                  metricLabel: 'Matches de mentoring en 4 cohortes',
                  body: 'Creé Mentoring by UBITS de punta a punta: diseño del programa, lógica de matching y ejecución de cohortes para garantizar el aprendizaje y desarrollo integral del talento, y a la vez habilitar canales de comunicación transversal entre áreas. Como los mentores en la mayoría de los casos eran de otras áreas, estas sesiones también se volvieron un canal informal de información: la gente se enteraba en qué estaban trabajando otros equipos, abriendo espacios de colaboración transversal y alineación.',
                  story: 'Crece el individuo. Se transforma la colaboración.',
                },
              },
              {
                id: 'voice',
                label:
                  'Voice of Ubitsers: sesiones de escucha estructuradas con todos los equipos para detectar riesgos de engagement y armar planes de acción a la medida con líderes.',
              },
              {
                id: 'feedback-360',
                label:
                  'Implementación de feedback 360° con dashboards personalizados que alimentaban talent reviews y la ubicación final en 6-box.',
              },
              {
                id: 'idps',
                label:
                  'Planes de desarrollo individual: competencias definidas con líderes, alineadas al crecimiento de cada persona y a los OKRs del negocio → adopción de 53% a 89% en 6 meses.',
                detail: {
                  metric: '53% → 89%',
                  metricLabel: 'Adopción de PDIs · 6 meses',
                  body: 'Hice útiles los PDIs: competencias acordadas con cada líder, conectadas al crecimiento profesional y a los OKRs del negocio, dan un propósito claro de su impacto, movilizando su ejecución desde la motivación intrínseca.',
                  story: 'Cuando el crecimiento es claro para la persona y para el negocio, el plan cobra sentido.',
                },
              },
              {
                id: 'analytics',
                label:
                  'Dashboards de Looker para people analytics + automatización de workflows con Make y Slack.',
              },
            ],
          },
          {
            id: 'tm-specialist',
            title: 'Talent Management Specialist',
            dates: 'Feb 2022 – Oct 2022',
            milestones: [
              {
                id: 'onboarding',
                label:
                  'Diseñé e implementé el onboarding end-to-end como contacto principal de HR → +80 nuevos ingresos con NPS 84.',
                detail: {
                  metric: '84',
                  metricLabel: 'NPS · experiencia de onboarding',
                  body: 'Diseñé y lideré el onboarding de punta a punta como cara de HR para nuevos ingresos: desde gestionar la entrega de equipos y el kit de bienvenida hasta asegurar las sesiones de onboarding, midiendo asistencia y NPS de cada una — impactando a más de 80 nuevos ingresos.',
                  story: 'El reto es garantizar un onboarding amigable y claro, un momento clave que define cómo se desenvuelven los siguientes pasos de la curva de aprendizaje.',
                },
              },
              {
                id: 'saas',
                label:
                  'Administré la plataforma SaaS inhouse: diseñé planes de formación alineados a las competencias de los PDIs de 250 empleados.',
              },
            ],
          },
        ],
      },
      {
        id: 'bavaria',
        name: 'AB INBEV - BAVARIA',
        years: '2021–2022',
        roles: [
          {
            id: 'pca',
            title: 'People Continuity Analyst',
            dates: 'Feb 2021 – Feb 2022',
            milestones: [
              {
                id: 'recruiting',
                label:
                  'Lideré reclutamiento end-to-end en Logística, Marketing y Comunicaciones → time to fill ~35 días.',
              },
              {
                id: 'supply-trainee',
                label:
                  'Supply Trainee Programme: partnering con líderes senior en selección de talento top → +42.8% en alianzas universitarias YoY, con assessments para perfiles altamente cualificados.',
                detail: {
                  metric: '+42.8%',
                  metricLabel: 'Crecimiento de alianzas universitarias · YoY · Supply Trainee Programme',
                  body: 'Como partner de People Continuity en el Supply Trainee Programme, trabajé con líderes senior en la selección y expandí la red de alianzas universitarias que alimentaba el pipeline.',
                  story: 'Abordamos más talento y fortalecimos el talent pool, no solo para este programa sino para vacantes futuras: una estrategia proactiva de cobertura.',
                },
              },
            ],
          },
        ],
      },
    ] satisfies ExperienceCompany[],
  },
} as const
