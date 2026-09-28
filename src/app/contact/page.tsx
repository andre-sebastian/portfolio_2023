import type { Metadata } from 'next';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import ContactForm from '@/components/ContactForm';
import PageShell from '@/components/PageShell';
import Panel from '@/components/Panel';
import userInfo from '@/data/userInfoData';

export const metadata: Metadata = {
	title: 'Contactar',
	description:
		'¿Tienes un proyecto o propuesta? Ponte en contacto conmigo a través del formulario.',
	alternates: { canonical: '/contact' },
};

export default function Contact() {
	return (
		<PageShell activePage='contact'>
			<Panel>
				<div className='card-body'>
					<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
						Contactar
					</h1>
					<div className='mb-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2'>
						<a
							href={`mailto:${userInfo.email}`}
							className='flex items-center gap-2 text-white underline underline-offset-4 hover:opacity-80'>
							<FaEnvelope aria-hidden='true' size={18} />
							{userInfo.email}
						</a>
						<a
							href={userInfo.social.linkedin}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Perfil de LinkedIn'
							className='flex items-center gap-2 text-white underline underline-offset-4 hover:opacity-80'>
							<FaLinkedinIn aria-hidden='true' size={18} />
							linkedin.com/in/andre-sebastian
						</a>
					</div>
					<div className='grid grid-cols-12'>
						<div className='col-span-12 lg:col-span-2'></div>
						<div className='col-span-12 lg:col-span-8'>
							<ContactForm />
						</div>
						<div className='col-span-12 lg:col-span-2'></div>
					</div>
				</div>
			</Panel>
		</PageShell>
	);
}
