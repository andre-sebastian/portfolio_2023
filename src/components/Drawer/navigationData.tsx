import { IoPerson } from '@react-icons/all-files/io5/IoPerson';
import { IoHome } from '@react-icons/all-files/io5/IoHome';
import { IoDocumentText } from '@react-icons/all-files/io5/IoDocumentText';
import { IoSchool } from '@react-icons/all-files/io5/IoSchool';
import { IoNewspaper } from '@react-icons/all-files/io5/IoNewspaper';
import { IoCall } from '@react-icons/all-files/io5/IoCall';
import { ReactElement } from 'react';

interface NavbarDrawerContentType {
	id: string;
	icon: ReactElement;
	title: string;
	url: string;
}

const navbarDrawerContent: Array<NavbarDrawerContentType> = [
	{
		id: "home",
		icon: <IoHome size={15} />,
		title: 'Inicio',
		url: '/',
	},
	{
		id: "about",
		icon: <IoPerson size={15} />,
		title: 'Acerca de mí',
		url: '/about',
	},
	{
		id: "resume",
		icon: <IoSchool size={15} />,
		title: 'Trayectoria',
		url: '/resume',
	},
	// {
	// 	id: "portfolio",
	// 	icon: <IoDocumentText size={15} />,
	// 	title: 'Portafolio',
	// 	url: '/portfolio',
	// },
	// {
	// 	id: "blog",
	// 	icon: <IoNewspaper size={15} />,
	// 	title: 'Blog',
	// 	url: '/blog',
	// },
	{
		id: "contact",
		icon: <IoCall size={15} />,
		title: 'Contactar',
		url: '/contact',
	},
];

export default navbarDrawerContent;
