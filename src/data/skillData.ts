interface ISkill {
	title: string;
	url: string;
	percentage: string;
}

const backendSkills: Array<ISkill> = [
	{ title: 'Node JS', url: 'https://nodejs.org/', percentage: '65' },
	{ title: 'Express JS', url: 'https://expressjs.com/', percentage: '70' },
	{ title: 'Adonis JS', url: 'https://adonisjs.com/', percentage: '80' },
	{
		title: 'Fastify JS',
		url: 'https://www.fastify.io/',
		percentage: '70',
	},
	{
		title: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		percentage: '60',
	},
	{ title: 'Graphql', url: 'https://graphql.org/', percentage: '50' },
	{ title: 'Mongo DB', url: 'https://www.mongodb.com/', percentage: '45' },
	{ title: 'Next JS', url: 'https://nextjs.org/', percentage: '65' },

	{ title: 'Supabase', url: 'https://supabase.com/', percentage: '65' },
	{ title: 'Strapi JS', url: 'https://supabase.com/', percentage: '65' },
	{
		title: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		percentage: '75',
	},
	{ title: 'Knex ORM', url: 'https://knexjs.org/', percentage: '60' },
	{ title: 'TypeOrm', url: 'https://typeorm.io/', percentage: '60' },
];
const frontendSkills: Array<ISkill> = [
	{ title: 'Bootstrap', url: 'https://getbootstrap.com/', percentage: '65' },
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
		title: 'JavaScript',
		url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
		percentage: '80',
	},
	{
		title: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		percentage: '75',
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
		title: 'Tailwind Css',
		url: 'https://tailwindcss.com/',
		percentage: '63',
	},
	{ title: 'Rsuite UI', url: 'https://rsuitejs.com/', percentage: '70' },
	{
		title: 'Native Base UI',
		url: 'https://nativebase.io/',
		percentage: '55',
	},
];
const otherSkills: Array<ISkill> = [
	{
		title: 'Photoshop',
		url: 'https://www.adobe.com/la/products/photoshop.html',
		percentage: '40',
	},
	{ title: 'Figma', url: 'https://www.figma.com/', percentage: '45' },
	{ title: 'Wordpress', url: 'https://pe.wordpress.org/', percentage: '53' },
	{ title: 'Git', url: 'https://git-scm.com/', percentage: '45' },
	{ title: 'Github', url: 'https://github.com/', percentage: '47' },
	{ title: 'Netlify', url: 'https://www.netlify.com/', percentage: '40' },
	{ title: 'Notion', url: 'https://www.notion.so/', percentage: '49' },
	{ title: 'Trello', url: 'https://trello.com/', percentage: '53' },
	{ title: 'Vercel', url: 'https://vercel.com/', percentage: '50' },
	{ title: 'GitBook', url: 'https://www.gitbook.com/', percentage: '53' },
];
export { backendSkills, frontendSkills, otherSkills };
