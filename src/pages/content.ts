export const experience = [
  {
    company: 'Humaans.io',
    link: 'https://humaans.io',
    from: '2024',
    to: 'present',
    content: [
      'Working at Humaans is a very unique experience. I am able to implement changes that significatly improve the work life of others.',
      'At Humaans we aspire to write safe code quickly, leveraging ReScript to extingush a plethora of issues we could experience in a vanilla JS application.',
    ],
    tags: ['React', 'ReScript', 'Relay', 'Feathers.js', 'BigQuery'],
  },
  {
    company: 'OVO Energy',
    link: 'https://ovo.com',
    from: '2021',
    to: '2024',
    content: [
      'At OVO I’ve worn many hats, from junior React Native dev to interim Engineering Manager to Senior Platforms Lead. I’ve been able to work on a plethora of React based projects including React Native & NextJS.',
      'During my tenure, I’ve successfully managed projects, built new integrations, and investigated innovative solutions to challenges in the energy industry.',
    ],
    tags: ['React Native', 'Next', 'TypeScript', 'Module Federation'],
  },
  {
    company: 'Post-Quantum',
    link: 'https://post-quantum.com',
    from: '2017',
    to: '2021',
    content: [
      'Here I sharpened my software engineering skills, notably in quantum encryption, biometric security, and source-of-truth technology. Utilizing tools like Angular, Vue, Protractor, CyPress, Java Spring, Groovy, and Kubernetes, I developed innovative cybersecurity solutions.',
      'This experience enhanced my ability to create secure, robust applications, contributing significantly to the company’s mission of protecting sensitive data and solidifying my foundation in the software engineering industry.',
    ],
  },
];

export const blog = [
  {
    name: 'Why you hate Detox',
    date: '2023-12-09',
    path: 'why-you-hate-detox',
    summary:
      'Is your CI taking hours to resolve? Is your test suite as flakey as a croissant? Do you hate writing them altogther? You might find this post of interest.',
  },
];

export const skillCategories = [
  {
    name: 'Frontend Frameworks',
    description:
      'Over the years I have worked with and played with a range of different frameworks to help build a general understanding of the ecosystem and what tools are best for which jobs.',
    skills: [
      {
        name: 'React Native',
      },
    ],
  },
];

export const sideProjects = [
  {
    name: "Git gif",
    url: "https://git-gif.vercel.app",
    purpose: [
      'When creating PR\'s I will often upload media to show the visual changes I\'ve made. This will usually consist of GIFs that I manually converted with ffmpeg.',
      'Whilst this process works, having to remember the incatations to appease ffmpeg can be a pain. Instead, I wrote this project to take videos and convert them to gifs.'
    ]
  }
]