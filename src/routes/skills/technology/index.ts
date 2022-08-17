export enum Category {
	LANGUAGE = 'Language',
	FRONTEND = 'Frontend',
	BACKEND = 'Backend',
	CICD = 'CI/CD',
	TESTING = 'Testing',
	DEVOPS = 'Dev Ops',
	MONITORING = 'Monitoring',
	IDEOLOGY = 'Ideology',
	STORAGE = 'Storage'
}

export interface Experience {
	startDate: Date;
	endDate?: Date;
	summary: string[];
}

export interface Technology {
	name: string;
	categories: Category[];
	color: string;
	experience: Experience[];
	icon?: string;
	inverted?: true;
}

const EPOCHS = {
	joinPq: new Date('02/05/2017'),
	leavePq: new Date('01/02/2021'),
	joinOvo: new Date('01/02/2021'),
	leaveOvo: undefined
};

export const technologies: Technology[] = [
	{
		name: 'Bugsnag',
		categories: [Category.MONITORING],
		color: '#010f44',
		inverted: true,
		experience: [
			{
				startDate: EPOCHS.joinOvo,
				endDate: EPOCHS.leaveOvo,
				summary: [
					'I use bugsnag to monitor a React Native app. My team has set up automation to update bugsnag with sourcemaps on every native and codepush release.'
				]
			}
		]
	},
	{
		name: 'React Native',
		categories: [Category.FRONTEND],
		color: '#61dafb',
		icon: 'images/icons/reactNative.svg',
		experience: [
			{
				startDate: EPOCHS.joinOvo,
				endDate: EPOCHS.leaveOvo,
				summary: [
					'I have used React Native in a production environment on a large energy app.',
					'Work on this has consisted of '
				]
			}
		]
	},
	{
		name: 'Gatsby',
		categories: [Category.FRONTEND],
		color: '#5e22ac',
		icon: 'images/icons/gatsby.svg',
		inverted: true,
		experience: [
			{
				startDate: new Date('01/06/2022'),
				endDate: new Date('01/08/2022'),
				summary: [
					'I used Gatsby to build my wedding website which you can find under "experience".'
				]
			},
			{
				startDate: new Date('01/04/2022'),
				summary: ['Since a team merger, I have worked on a Gatsby & Netlify CMS based project.']
			}
		]
	},
	{
		name: 'Detox',
		categories: [Category.FRONTEND, Category.TESTING],
		color: '#212122',
		icon: 'images/icons/detox.png',
		inverted: true,
		experience: [
			{
				startDate: EPOCHS.joinOvo,
				endDate: EPOCHS.leaveOvo,
				summary: [
					'I use detox to run e2e tests on a React Native app. I have spent alot of time trying to improve the detox run times of pipelines.'
				]
			}
		]
	},
	{
		name: 'Github Actions',
		categories: [Category.CICD],
		color: '#fff',
		experience: [
			{
				startDate: EPOCHS.joinOvo,
				endDate: EPOCHS.leaveOvo,
				summary: [
					'I use github actions to automate the deployment of my personal websites, including this one!.'
				]
			}
		]
	},
	{
		name: 'Express',
		categories: [Category.BACKEND],
		color: '#fff',
		experience: [
			{
				startDate: EPOCHS.joinOvo,
				endDate: EPOCHS.leaveOvo,
				summary: [
					'I used Gatsby to build my wedding website which you can find under "experience".'
				]
			}
		]
	},
	{
		name: 'React',
		categories: [Category.FRONTEND],
		color: '#61dafb',
		icon: 'images/icons/reactNative.svg',
		experience: [
			{
				startDate: new Date('01/04/2022'),
				summary: ['I use react and frameworks around it (React Native, Gatsby) daily.']
			}
		]
	},
	{
		name: 'Java',
		categories: [Category.LANGUAGE],
		color: '#3482a1',
		icon: 'images/icons/java.svg',
		inverted: true,
		experience: []
	},
	{
		name: 'Groovy',
		categories: [Category.LANGUAGE],
		color: '#3482a1',
		inverted: true,
		experience: []
	},
	{
		name: 'JavaScript',
		icon: 'images/icons/javascript.svg',
		color: '#f8dc3d',
		categories: [Category.FRONTEND, Category.LANGUAGE],
		experience: []
	},
	{
		name: 'TypeScript',
		icon: 'images/icons/typescript.svg',
		color: '#3179c6',
		categories: [Category.FRONTEND, Category.LANGUAGE],
		inverted: true,
		experience: [
			{
				startDate: EPOCHS.joinPq,
				endDate: EPOCHS.leaveOvo,
				summary: ['I am a strong advocate for typed languages and TypeScript is no exception.']
			}
		]
	},
	{
		name: 'Cypress',
		icon: 'images/icons/cypress.svg',
		inverted: true,
		categories: [Category.FRONTEND, Category.TESTING],
		color: '#25262e',
		experience: [
			{
				startDate: new Date('23/06/2020'),
				endDate: EPOCHS.leavePq,
				summary: [
					'I introduced CyPress as a replacement E2E suite for a group of related frontend systems.',
					'I brought a proof of concept to my manager, than higher up until it was an accepted process for testing.'
				]
			}
		]
	},
	{
		name: 'Svelte',
		categories: [Category.FRONTEND],
		icon: 'images/icons/svelte.svg',
		color: '#ff3e00',
		experience: []
	},
	{
		name: 'Angular',
		categories: [Category.FRONTEND],
		icon: 'images/icons/angular.svg',
		color: '#c3002e',
		experience: [
			{
				startDate: new Date('02/05/2017'),
				endDate: new Date('01/02/2021'),
				summary: [
					'I have spent most of my professional career working with angular. Starting with Angular 4 during my internship with Post-Quantum and upgrading our way through to Angular 9.',
					"I have worked with Angular 10 in my spare time, experimenting with it's new features and the Ivy compiler."
				]
			}
		]
	},
	{
		name: 'Vue',
		categories: [Category.FRONTEND],
		icon: 'images/icons/vue.svg',
		color: '#3BB982',
		inverted: true,
		experience: []
	},
	{
		name: 'Spring',
		categories: [Category.BACKEND],
		icon: 'images/icons/spring.svg',
		color: '#77bc1f',
		inverted: true,
		experience: []
	},
	{
		name: 'Jenkins',
		categories: [Category.CICD],
		color: '#d33833',
		icon: 'images/icons/jenkins.svg',
		experience: []
	},
	{
		name: 'Travis CI',
		categories: [Category.CICD],
		color: '#cb334a',
		icon: 'images/icons/travisci.svg',
		experience: []
	},
	{
		name: 'TeamCity',
		categories: [Category.CICD],
		color: '#37caff',
		icon: 'images/icons/teamcity.svg',
		experience: []
	},
	{
		name: 'SonarQube',
		categories: [Category.CICD, Category.TESTING],
		color: '#37caff',
		experience: []
	},
	{
		name: 'Kubernetes',
		categories: [Category.CICD],
		icon: 'images/icons/kubernetes.svg',
		color: '#326be5',
		experience: []
	},
	{
		name: 'Docker',
		categories: [Category.CICD],
		icon: 'images/icons/docker.svg',
		color: '#3887e5',
		inverted: true,
		experience: []
	},
	{
		name: 'AWS EC2',
		categories: [Category.CICD],
		icon: 'images/icons/awsec2.svg',
		color: '#f68636',
		experience: []
	},
	{
		name: 'Scala',
		categories: [Category.LANGUAGE],
		icon: 'images/icons/scala.svg',
		color: '#d73122',
		experience: []
	},
	{
		experience: [],
		name: 'Elasticsearch',
		categories: [Category.MONITORING],
		color: '#fff'
	},
	{
		experience: [],
		name: 'Kibana',
		categories: [Category.MONITORING],
		color: '#fff'
	},
	{
		experience: [],
		name: 'Logstash',
		categories: [Category.MONITORING],
		color: '#fff'
	},
	{
		experience: [],
		name: 'ITCSS',
		categories: [Category.IDEOLOGY],
		color: '#fff'
	},
	{
		experience: [],
		name: 'Postgres',
		icon: 'images/icons/postgresql.svg',
		categories: [Category.STORAGE],
		color: '#336791',
		inverted: true
	},
	{
		experience: [],
		name: 'Python',
		color: '#fadb69',
		categories: [Category.LANGUAGE]
	},
	{
		experience: [],
		name: 'Processing',
		color: '#1b52f8',
		categories: [Category.LANGUAGE]
	}
];
