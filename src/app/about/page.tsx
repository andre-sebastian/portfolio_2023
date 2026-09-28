import type { Metadata } from 'next';
import About from './about-client';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
	title: 'Acerca de mí',
	description:
		'Conoce mi perfil: quién soy, mi enfoque como desarrollador full stack y las habilidades que manejo.',
	alternates: { canonical: '/about' },
};

export default function Page() {
	return (
		<PageShell activePage='about'>
			<About />
		</PageShell>
	);
}
