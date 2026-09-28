import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Card from '@/components/Card';
import Panel from '@/components/Panel';
import { FaTrophy } from '@react-icons/all-files/fa/FaTrophy';
import { IoSchool } from '@react-icons/all-files/io5/IoSchool';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import {
	resumeDataAwards,
	resumeDataEducation,
	resumeDataExperience,
} from '@/data/resumeData';

export const metadata: Metadata = {
	title: 'Trayectoria',
	description:
		'Mi trayectoria profesional: formación académica, experiencia laboral y reconocimientos.',
	alternates: { canonical: '/resume' },
};

const sections = [
	{
		id: 'experiencia',
		title: 'Experiencia',
		Icon: FaBriefcase,
		items: resumeDataExperience,
	},
	{
		id: 'educacion',
		title: 'Educación',
		Icon: IoSchool,
		items: resumeDataEducation,
	},
	{
		id: 'premios',
		title: 'Premios',
		Icon: FaTrophy,
		items: resumeDataAwards,
	},
] as const;

export default function Resume() {
	return (
		<PageShell activePage='resume'>
			<Panel>
				<div className='card-body'>
					<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
						Trayectoria
					</h1>

					<div className='grid grid-cols-12 gap-y-2 lg:gap-2'>
						{sections.map(({ id, title, Icon, items }) => (
							<div
								key={id}
								className='col-span-12 space-y-4 lg:col-span-4'>
								<div className='flex items-center space-x-2'>
									<span
										className='btn btn-primary gap-1 p-3'
										aria-hidden='true'>
										<Icon className='h-6 w-6' />
									</span>
									<h2 className='font-serif text-2xl text-white'>{title}</h2>
								</div>
								<section
									aria-label={title}
									tabIndex={0}
									className='h-96 overflow-y-auto'>
									{items.map((props, i) => (
										<Card key={i} {...props} />
									))}
								</section>
							</div>
						))}
					</div>
				</div>
			</Panel>
		</PageShell>
	);
}
