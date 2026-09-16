import career from './career.json';
export { career };
export const caseStudies = [
  {
    slug: 'integrated-us-payroll',
    company: 'Humaans',
    discipline: 'Product & delivery leadership',
    title: 'US payroll integration',
    summary:
      'From evaluating providers to coordinating four engineers: leading a payroll integration that belonged in the HR platform, across profiles, compensation and documents.',
    outcome:
      'Launched with Check, led through rollout and supported sales conversations with technical and payroll expertise.',
    sections: [
      {
        title: 'The problem',
        paragraphs: [
          'Humaans wanted to expand into the US market, where customers expected payroll to be part of their HR platform. The CTO supplied a shortlist of potential providers; I owned the assessment and led the integration through rollout.',
        ],
      },
      {
        title: 'Choosing a provider that fit',
        paragraphs: [
          'I worked with sales to understand what prospective customers expected from payroll. I assessed the shortlisted providers against those needs and how their APIs mapped to the data in Humaans.',
          'I selected Check because its API aligned well with our data model and it had strong webhook infrastructure. The alternatives had API surfaces that were harder to understand and explain in relation to their underlying data. Check gave us a clearer foundation for integrating payroll into the product.',
        ],
      },
      {
        title: 'Turning the integration into a team plan',
        paragraphs: [
          'I designed how payroll would connect with employee profiles, compensation and documents, aiming for a coherent product experience. We connected Check’s webhooks with our own infrastructure.',
          'I broke the work into achievable milestones and distributed implementation across four engineers. Their involvement varied as the team balanced other priorities, so the work needed clear boundaries and a shared direction.',
        ],
      },
      {
        title: 'Through to rollout',
        paragraphs: [
          'The integration launched, and I led the project through rollout. I also joined sales calls to support the technical discussion and answer complex payroll questions, connecting implementation knowledge with the conversations customers were having.',
        ],
      },
    ],
  },
  {
    slug: 'loom',
    company: 'Personal project',
    discipline: 'Agent orchestration & product design',
    title: 'A controlled workflow for coding agents',
    summary:
      'An Electron app in active development that turns my preferred way of working with coding agents into a repeatable, human-approved process outside the terminal.',
    outcome:
      'A working Electron application that runs repository-based tasks through clarification, shaping, implementation and human-plus-agent review.',
    sections: [
      {
        title: 'Encoding a process I already used',
        paragraphs: [
          'I use Codex and Claude for different purposes, but found myself taking both through the same steps to solve a problem. I started building Loom to encode that process in a UI, use multiple models from one app and work outside the terminal.',
        ],
      },
      {
        title: 'From a repository to a shaped task',
        paragraphs: [
          'The Electron app can open an existing local repository or pull one from GitHub through the local gh CLI. From there, I can create a task that moves through clarification — or “grilling” — shaping, implementation and review. For a larger change, I can instead create a higher-order plan.',
          'During clarification, the agent resolves ambiguity and proposes concrete implementation decisions: for example, whether an updatedAt value changes with the whole object and whether only the server can set it. Implementation cannot begin until I explicitly approve the shaped approach.',
        ],
      },
      {
        title: 'Keep review in the loop',
        paragraphs: [
          'Reviewing agents assess the implementer’s changes and leave comments. I can inspect, accept or reject those comments, and add comments of my own. The work can return through the loop until it is complete, combining agent review with a human decision at each point that needs one.',
        ],
      },
      {
        title: 'Model flexibility from one interface',
        paragraphs: [
          'Loom uses Pi as its agent connector. Codex and Claude are both working through the same non-terminal interface today. Pi may make broader model compatibility possible, but those two are the integrations I have confirmed.',
        ],
      },
      {
        title: 'Planned next phase: remote control without losing oversight',
        paragraphs: [
          'The website and server are planned, not implemented. The aim is for a separate machine the user controls to perform the work while they use their phone to start tasks, answer questions, monitor progress and review changes.',
          'That remote experience is also planned to use push notifications for timely prompts and WebSocket events for live progress. It extends the same principle as the desktop workflow: make delegation convenient without giving up agreement, visibility or review.',
        ],
      },
    ],
  },
  {
    slug: 'useful-mobile-notifications',
    company: 'OVO',
    discipline: 'Stakeholder alignment & mobile delivery',
    title: 'Bill and meter-reading notifications',
    summary:
      'Taking a broad request for bill and meter-reading reminders through a mobile proof of concept, Salesforce integration and production rollout.',
    outcome:
      'Both notification journeys shipped. Analytics showed increased on-time meter-reading completion, and copywriters could manage messages in Salesforce.',
    sections: [
      {
        title: 'Start with the customer action',
        paragraphs: [
          'The brief was to tell customers when a bill arrived and remind them when a meter reading was due. I proposed Firebase Cloud Messaging, built an iOS and Android proof of concept, and presented it to the Head of Engineering.',
        ],
      },
      {
        title: 'Adapt the design to the people running it',
        paragraphs: [
          'The prototype was well received, but the discussion added an important requirement: copywriters needed to change messages easily and manage them through Salesforce. I reshaped the project around Salesforce and worked directly with its representatives on technical issues.',
          'I led implementation planning with the team, worked with designers on notification preferences and the constraints of mobile permissions, and collaborated with copywriters on the initial message formats. I allocated work to match developers’ strengths across interface work and mobile logic.',
        ],
      },
      {
        title: 'Measure the whole journey',
        paragraphs: [
          'During testing and rollout, I added analytics for successful notification delivery and the actions that followed: reading the bill or submitting a meter reading. That let us assess the intended customer outcome alongside message delivery.',
          'Both journeys reached production, and copywriters successfully managed the messages through Salesforce. The analytics showed an increase in on-time meter-reading completion following the introduction of reminders.',
        ],
      },
    ],
  },
  {
    slug: 'reliable-audit-events',
    company: 'Humaans',
    discipline: 'Data design & reliability',
    title: 'Reliable audit logging',
    summary:
      'Designing understandable audit data and leading the decision to use a transactional outbox so application changes and audit events stayed connected.',
    outcome:
      'The production outbox buffered pending events during a BigQuery outage, separating audit delivery from BigQuery availability.',
    sections: [
      {
        title: 'Two writes, one consistency problem',
        paragraphs: [
          'I joined the audit-log project after BigQuery had been selected. I contributed to the data structure design, focusing on an understandable model that would be straightforward to extend.',
          'Calling BigQuery during an application request created a consistency risk: the audit event could be written but the application transaction could fail, or the application change could succeed without its audit event reaching BigQuery.',
        ],
      },
      {
        title: 'Make the intent part of the transaction',
        paragraphs: [
          'I led the decision to use an outbox. We wrote the pending audit event in the same database transaction as the application change, then delivered it to BigQuery separately. This tied the change and the intent to record it together, with eventual consistency between the application database and the audit store.',
        ],
      },
      {
        title: 'Proven during an outage',
        paragraphs: [
          'The design also allowed pending events to accumulate when BigQuery was unavailable, instead of making its availability part of the application request. A BigQuery outage in production demonstrated that buffering behaviour.',
        ],
      },
    ],
  },
];
