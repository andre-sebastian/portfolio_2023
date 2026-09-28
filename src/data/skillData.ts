interface ISkill {
	title: string;
	url: string;
	percentage: string;
}

type SkillType = 'backend' | 'frontend' | 'others';

const backendSkills: Array<ISkill> = [
	{ title: 'Node JS', url: 'https://nodejs.org/', percentage: '65' },
	{
		title: 'Express / Fastify',
		url: 'https://expressjs.com/',
		percentage: '70',
	},
	{ title: 'Adonis JS', url: 'https://adonisjs.com/', percentage: '80' },
	{
		title: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		percentage: '60',
	},
	{
		title: 'Rest / GraphQL',
		url: 'https://graphql.org/',
		percentage: '50',
	},
	{ title: 'Mongo DB', url: 'https://www.mongodb.com/', percentage: '45' },
	{ title: 'Next JS', url: 'https://nextjs.org/', percentage: '65' },

	{ title: 'Supabase', url: 'https://supabase.com/', percentage: '65' },
	{
		title: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		percentage: '75',
	},
	{ title: 'C# / .NET', url: 'https://dotnet.microsoft.com/', percentage: '60' },
	{
		title: 'SQL Server',
		url: 'https://www.microsoft.com/es-es/sql-server',
		percentage: '60',
	},
	{ title: 'Nest JS', url: 'https://nestjs.com/', percentage: '55' },
	{ title: 'Redis', url: 'https://redis.io/', percentage: '45' },
];
const frontendSkills: Array<ISkill> = [
	{
		title: 'Html 5',
		url: 'https://html.spec.whatwg.org/multipage/',
		percentage: '55',
	},
	{
		title: 'Css',
		url: 'https://developer.mozilla.org/es/docs/Web/CSS',
		percentage: '50',
	},
	{ title: 'Ionic', url: 'https://ionicframework.com/', percentage: '70' },
	{
		title: 'TS / JS',
		url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
		percentage: '80',
	},
	{ title: 'Npm', url: 'https://www.npmjs.com/', percentage: '65' },
	{ title: 'Yarn', url: 'https://yarnpkg.com/', percentage: '50' },
	{ title: 'React JS', url: 'https://es.reactjs.org/', percentage: '77' },
	{
		title: 'React Native',
		url: 'https://reactnative.dev/',
		percentage: '67',
	},
	{ title: 'Redux', url: 'https://redux.js.org/', percentage: '60' },
	{
		title: 'Zustand',
		url: 'https://zustand.docs.pmnd.rs/',
		percentage: '65',
	},
	{
		title: 'Tailwind Css',
		url: 'https://tailwindcss.com/',
		percentage: '63',
	},
	{ title: 'Angular', url: 'https://angular.dev/', percentage: '60' },
];
const otherSkills: Array<ISkill> = [
	{ title: 'Figma', url: 'https://www.figma.com/', percentage: '45' },
	{ title: 'Wordpress', url: 'https://pe.wordpress.org/', percentage: '53' },
	{ title: 'Git', url: 'https://git-scm.com/', percentage: '45' },
	{ title: 'Github', url: 'https://github.com/', percentage: '47' },
	{ title: 'Notion', url: 'https://www.notion.so/', percentage: '49' },
	{ title: 'Vercel', url: 'https://vercel.com/', percentage: '50' },
	{
		title: 'Jira',
		url: 'https://www.atlassian.com/software/jira',
		percentage: '50',
	},
	{ title: 'OpenCode', url: 'https://opencode.ai/', percentage: '60' },
	{
		title: 'GitHub Copilot',
		url: 'https://github.com/features/copilot',
		percentage: '65',
	},
	{ title: 'Docker', url: 'https://www.docker.com/', percentage: '50' },
	{ title: 'Firebase', url: 'https://firebase.google.com/', percentage: '55' },
];
export { backendSkills, frontendSkills, otherSkills };
export type { SkillType, ISkill };
