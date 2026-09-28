interface IResumeData {
	date: string;
	category: string;
	title: string;
	content: string;
}

const resumeDataEducation: Array<IResumeData> = [
	{
		date: '2016 - 2021',
		title: 'Bachiller en Ingeniería de Sistemas',
		category: 'Universitaria',
		content:
			'Universidad Privada de Tacna (EPIS). Cursos relevantes: Programación, Bases de datos, Gestión de proyectos, Soluciones móviles y Arquitectura de software.',
	},
	{
		date: '2023',
		title: 'OWASP',
		category: 'Caja Municipal de Tacna',
		content:
			'Capacitación con el objetivo de mejorar la seguridad de las aplicaciones web de la institución.',
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
		date: '2025 - Presente',
		title: 'NTT DATA · Proyecto Banca Móvil',
		category: 'Front End',
		content:
			'Desarrollador Frontend enfocado en el ecosistema mobile con React Native. Aplico una arquitectura modular para garantizar la estructura de los proyectos, gestionando el estado global con Zustand y la sincronización, caché y manejo de datos asíncronos con TanStack React-Query. Aseguro la calidad con pruebas unitarias y de integración en Jest, apoyándome en Mockoon para simular entornos y APIs locales, e integro GitHub Copilot en mi flujo de codificación.',
	},
	{
		date: '2025 - Presente',
		title: 'NTT DATA · Proyecto Portal Ecommerce',
		category: 'Front End',
		content:
			'Desarrollador Frontend web con React, Next.js y TypeScript, aplicando Tailwind CSS para interfaces modernas y responsivas. Implemento una arquitectura orientada al rendimiento gestionando caché, estado y lógica de negocio con Context API y hooks personalizados. Lideré el desarrollo e integración del flujo de portabilidad numérica, garantizando una experiencia fluida, segura y paso a paso, con pruebas unitarias y de integración usando Jest y React Testing Library.',
	},
	{
		date: '2023 - 2025',
		title: 'Asistente Desarrollador de Software',
		category: 'Caja Municipal de Tacna',
		content:
			'Desarrollo de software en frontend y backend: análisis de requerimientos, implementación y mantenimiento de sistemas con metodologías ágiles (Kanban) y pruebas con usuarios. Apliqué arquitecturas limpias en microservicios orientados a API RESTful, diseñé interfaces en Figma y desarrollé aplicaciones con Angular, React y Tailwind CSS. En backend trabajé con C# (.NET Core y .NET Framework) y Node.js, integrando SQL Server para bases de datos y reportes con SSRS.',
	},
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
