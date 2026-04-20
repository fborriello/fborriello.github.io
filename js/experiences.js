/* ===================================
   EXPERIENCE DATA + RENDERERS
   =================================== */

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

export const experiences = [
  {
    hidden: true,
    showInIndex: true,
    index: {
      role: 'Lead Engineer',
      date: '2026 – Present',
      location: 'Italy · Remote',
    },
    cv: {
      role: 'Lead Engineer',
      date: '2026 – Present',
    },
    company: 'eDreams ODIGEO',
    bullets: [],
    tags: ['Engineering Management', 'Technical Leadership', 'Stakeholder Management', 'Distributed Systems', 'Agile Delivery'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Engineering Manager',
      date: '2020 – Present',
      location: 'Italy · Hybrid',
    },
    cv: {
      role: 'Manager, Software Development Engineering',
      date: 'Jun 2022 – Present',
    },
    company: 'Expedia Group',
    bullets: [
      'Led cross-functional engineering teams across Android, iOS, web and backend — managing up to 16 engineers across 4 teams and owning delivery, team health, and engineering execution.',
      'Delivered One Key Credit Card, one of Expedia\'s most strategic and high-visibility initiatives in 2024, coordinating teams across engineering, product, and business.',
      'Built a high-trust engineering culture through continuous feedback, hiring, performance reviews, and career development programmes.',
      'Partnered with Product and Business leadership to translate strategic goals into clear technical roadmaps and predictable delivery.',
      'Provided architectural oversight across distributed systems, ensuring reliability, scalability, and long-term sustainability.',
    ],
    tags: ['Engineering Leadership', 'Team Building', 'Java', 'AWS', 'CI/CD', 'Open Source'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Software Development Engineer II',
      date: '2021 – 2022',
      location: 'Italy · Hybrid',
    },
    cv: {
      role: 'Software Development Engineer II',
      date: 'Sep 2021 – May 2022',
    },
    company: 'Expedia Group',
    bullets: [
      'Built backend services within a large-scale service-oriented architecture supporting high-traffic travel platforms.',
      'Helped design and develop internal A/B testing tooling, enabling data-driven experiments at scale across the platform.',
      'Worked in modern CI/CD environments with a strong focus on reliability and automated testing.',
    ],
    tags: ['Java', 'Spring Boot', 'A/B Testing', 'CI/CD', 'Distributed Systems'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Senior Software Analyst',
      date: '2020 – 2021',
      location: 'Italy · On-site',
    },
    cv: {
      role: 'Senior Software Analyst',
      date: 'Sep 2020 – Oct 2021',
    },
    company: 'FAO — Food and Agriculture Organization of the UN',
    bullets: [
      'Led modernization of a portfolio of legacy enterprise applications, directing migration from Adobe Flash and other deprecated technologies.',
      'Coordinated cross-functional collaboration between IT teams and business units to identify long-term technical solutions including SaaS, PaaS, and custom development.',
    ],
    tags: ['Legacy modernization', 'Solution Architecture', 'Enterprise IT'],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Software Engineer',
      date: 'Jan 2018 – Sep 2020',
    },
    company: 'Expedia, Inc.',
    bullets: [
      'Designed and developed backend services for high-traffic travel platforms used by millions of users globally.',
      'Delivered customer-facing features within cross-functional teams using TDD, CI pipelines, and automated testing.',
      'Contributed to architecture decisions and continuous improvement of engineering practices.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Enterprise Solution Architect',
      date: 'Oct 2017 – Dec 2017',
    },
    company: 'Altran',
    bullets: [
      'Designed system architecture for mission-critical platforms, including a radar command-and-control system for a major Italian aerospace company.',
      'Produced foundational UML models, architectural designs, and skeleton projects for core components.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'IT Solutions Architect',
      date: 'Jan 2017 – Oct 2017',
    },
    company: 'FAO',
    bullets: [
      'Led analysis and design of enterprise IT solutions, producing solution proposals, architectural documentation, and project plans.',
      'Managed the IT request intake and governance workflow leading to CIO approval of new initiatives.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Software Engineer',
      date: 'Jul 2008 – Dec 2016',
    },
    company: 'FAO',
    bullets: [
      'Analyst and programmer for a wide range of enterprise systems in an international UN environment, covering the full project lifecycle.',
      'Covered Project Manager role in multiple projects, coordinating teams of up to 3 engineers.',
      'Primary stack: Java, Spring, Filenet, SharePoint, REST/SOAP web services, SQL, Hibernate.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Analyst & Programmer',
      date: 'Aug 2007 – Jun 2008',
    },
    company: 'SOFTLAB S.p.A.',
    bullets: [
      'Maintenance and development of Java/J2EE applications; Project Manager for the "Fídio" project (10-person team).',
      'Taught Java/J2EE to a class of 15 engineers for Sun certification.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'IT System Administrator & Junior Analyst',
      date: 'Aug 2006 – Jul 2007',
    },
    company: 'Telecom Italia',
    bullets: [
      'UML modelling for new TIM services; development and testing within a 40-person enterprise project on Bea WebLogic / Oracle DB.',
      'Software development for telecom services using EJBs, PL/SQL procedures, and XML-based integrations.',
    ],
  },
];

export function renderIndexExperiences(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experiences
    .filter(e => e.showInIndex)
    .map(e => {
      const hidden    = e.hidden ? ' style="display:none"' : '';
      const bullets   = e.bullets.length
        ? `<ul class="timeline-card__bullets">${e.bullets.map(b => `<li class="timeline-card__bullet">${b}</li>`).join('')}</ul>`
        : '';
      const tags      = (e.tags && e.tags.length)
        ? `<div class="timeline-card__tags">${e.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
        : '';

      return `
        <div class="timeline-item reveal"${hidden}>
          <div class="timeline-card">
            <div class="timeline-card__meta">
              <span class="timeline-card__company">${e.company}</span>
              <span class="timeline-card__date">${e.index.date}</span>
            </div>
            <h3 class="timeline-card__role">${e.index.role}</h3>
            <p class="timeline-card__location">
              ${PIN_SVG}
              ${e.index.location}
            </p>
            ${bullets}
            ${tags}
          </div>
        </div>`;
    })
    .join('');
}

export function renderCvExperiences(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experiences
    .map(e => {
      const hidden  = e.hidden ? ' style="display:none"' : '';
      const bullets = e.bullets.length
        ? `<ul class="cv-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
        : '';

      return `
        <div class="cv-entry"${hidden}>
          <div class="cv-entry__head">
            <div>
              <h3 class="cv-entry__role">${e.cv.role}</h3>
              <span class="cv-entry__company">${e.company}</span>
            </div>
            <span class="cv-entry__date">${e.cv.date}</span>
          </div>
          ${bullets}
        </div>`;
    })
    .join('');
}
