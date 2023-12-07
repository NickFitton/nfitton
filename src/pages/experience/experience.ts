export const history: {
  company: string;
  duration: string;
  topics: { title: string; content: string[] }[];
}[] = [
  {
    company: 'OVO Energy',
    duration: '(2021 - present)',
    topics: [
      {
        title: 'Squad lead',
        content: [
          'At OVO Energy, I’ve had the opportunity to make a significant impact as a Squad lead and software engineer. I’ve successfully managed projects, built new integrations, and investigated innovative solutions to challenges in the energy industry. I’ve also been actively involved in mentoring and supporting fellow team members, both within OVO Energy and externally.',
        ],
      },
      {
        title: 'Software engineer',
        content: [
          'I’ve been an enthusiastic participant in the tech community in Bristol, attending social events and meetups to stay updated on the latest trends and connect with fellow professionals. My time at OVO Energy has been a fulfilling journey of pushing the boundaries of what’s possible, making meaningful contributions, and constantly learning and growing as a software engineer.',
        ],
      },
    ],
  },
  {
    company: 'Post-Quantum',
    duration: '(2017 - 2021)',
    topics: [
      {
        title: 'Full stack engineer',
        content: [
          'During my time at Post-Quantum, a leading cyber security company, I honed my skills as a software engineer and made a significant impact on protecting user data with cutting-edge technologies such as quantum encryption, biometric security, and source-of-truth technology. I worked with Angular, Vue, Protractor, CyPress, Java, Java Spring, Groovy, and Kubernetes to develop innovative solutions in the field of cyber security.',
          'My experience at Post-Quantum allowed me to gain valuable expertise in building secure and robust applications, and I actively contributed to the company’s mission of safeguarding sensitive information. I’m proud of my achievements and the knowledge I gained during my time at Post-Quantum, and it has laid a strong foundation for my career in the software engineering field.',
        ],
      },
    ],
  },
  {
    company: 'Frontend',
    duration: '',
    topics: [
      {
        title: 'React Native',
        content: [
          'Since the start of 2021 I have been working in a React Native based team, from scratch I have learned its power and complexity. I have worked on a single deployed product but have managed to use this time to learn about React Navigation, Codepush & OTA updates, Tanstack Query and other crutial libraries for a successful app.',
          'I am currently a Squad Lead in the team I initially joined at OVO, leverage my experience onboarding teams onto React Native, guiding with the differences between it and standard React to ensure they build the best product for our customers.',
        ],
      },
      {
        title: 'Angular v2',
        content: [
          'When I started working in industry I started my production web experience in Angular, its robustness fit the company that used it and it was a great starting point for learning the intricacies of SPA’s, which was a technology I hadn’t involved myself with until that point.',
          'Angular has an “all in one” approach, which I appreciated when using it, however in retrospect I feel that I prefer the more hands off framework approach of React, allowing the community to change direction quickly.',
        ],
      },
    ],
  },
  {
    company: 'Backend',
    duration: '',
    topics: [
      {
        title: 'Java Spring',
        content: [
          'The majority of my experience in backend services has been in Java Spring, writing a group of Microservices that were monitored using Prometheus health metrics and piped logs to ElasticSearch. I really like Java’s strong typing ideology and felt it fit really well in backend architecture.',
        ],
      },
    ],
  },
  {
    company: 'Ops',
    duration: '',
    topics: [
      {
        title: 'Rolling Updates',
        content: [
          'Whilst at Post-Quantum I spent a good amount of time managing update rollouts, we had lots of libraries that were dependent on each other so had to chain library updates throughout our sevices and test the chain to ensure that updates wouldn’t bring down the testing environment. Whilst this was a pain to maintain, the velocity we moved at restricted the ability to slowly deprecate and update slowly.',
        ],
      },
      {
        title: 'Apps',
        content: [
          'At OVO I have spent some time managing the app releases, both native and over the air. I have reduced the OTA update size by over 90% by moving assets to either a CDN if large or into the native parts of the app. We also cached larger images on the device, allowing to less load times in the long term.',
        ],
      },
    ],
  },
];
