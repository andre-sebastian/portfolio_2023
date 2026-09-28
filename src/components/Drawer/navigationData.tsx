import { IoPerson } from '@react-icons/all-files/io5/IoPerson';
import { IoHome } from '@react-icons/all-files/io5/IoHome';
import { IoSchool } from '@react-icons/all-files/io5/IoSchool';
import { IoCall } from '@react-icons/all-files/io5/IoCall';
import type { ReactElement } from 'react';

type NavId = 'home' | 'about' | 'resume' | 'contact';

interface NavbarDrawerContentType {
	id: NavId;
	icon: ReactElement;
	title: string;
	url: string;
}

const navbarDrawerContent: Array<NavbarDrawerContentType> = [
	{
		id: 'home',
		icon: <IoHome size={15} aria-hidden='true' />,
		title: 'Inicio',
		url: '/',
	},
	{
		id: 'about',
		icon: <IoPerson size={15} aria-hidden='true' />,
		title: 'Acerca de mí',
		url: '/about',
	},
	{
		id: 'resume',
		icon: <IoSchool size={15} aria-hidden='true' />,
		title: 'Trayectoria',
		url: '/resume',
	},
	{
		id: 'contact',
		icon: <IoCall size={15} aria-hidden='true' />,
		title: 'Contactar',
		url: '/contact',
	},
];

export type { NavId, NavbarDrawerContentType };
export default navbarDrawerContent;
