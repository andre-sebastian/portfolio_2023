interface IResumeData {
	date: string;
	category: string;
	title: string;
	content: string;
}

const resumeDataEducation: Array<IResumeData> = [
	// {
	// 	date: '2005 - 2015',
	// 	title: 'I. E. Champagnat',
	// 	category: 'Primaria Secuandaria',
	// 	content: 'Institución educativa donde me forme desde la edad de 6 años.',
	// },
	{
		date: '2016 - 2021',
		title: 'Universidad Privada de Tacna',
		category: 'Universitaria',
		content:
			'Institución Académica de enseñanza superior donde estudie en la escuela Profesional de Ingeniería de Sistemas (EPIS).',
	},
	{
		date: '2021',
		title: 'Frameworks',
		category: 'Catec',
		content:
			'Capacitación tecnológica expuesta por el Inf. Fernando Herrera',
	},
	{
		date: '2020',
		title: 'Diseño UX e interfaces digitales',
		category: 'Catec',
		content: 'Capacitación tecnológica expuesta el Lic. Guido Fortini',
	},
	{
		date: '2020',
		title: 'Futuro del desarrollo movil',
		category: 'Catec',
		content:
			'Capacitación tecnológica expuesta el Ing. Luis Antonio Beltran',
	},
];
const resumeDataExperience: Array<IResumeData> = [
	{
		date: '2021',
		title: 'Practicas Universitarias',
		category: 'Practicas',
		content: 'Requisito necesario para optar el grado de bachiller, realizadas en una empresa del sector tecnológico.',
	},
];
const resumeDataAwards: Array<IResumeData> = [
	{
		date: '2021',
		title: 'Concurso de proyectos - EPIS',
		category: 'Universitario',
		content:
			'Primer puesto con el proyecto SISEN, aplicación móvil preventiva de delitos e incidentes en la ciudad de Tacna.',
	},
	{
		date: '2021',
		title: 'Concurso de proyectos - EPIS',
		category: 'Universitario',
		content:
			'Segundo Puesto con el Proyecto EPA aplicación móvil que presenta los productos nacionales listos para su exportación.',
	},
	{
		date: '2019',
		title: 'Concurso de proyectos - EPIS',
		category: 'Universitario',
		content:
			'Segundo lugar con el proyecto Sistema de Guía de Turismo - Your Route, web y aplicativo móvil que facilita los recorridos turísticos de la ciudad de Tacna.',
	},
];

export { resumeDataEducation, resumeDataExperience, resumeDataAwards };
