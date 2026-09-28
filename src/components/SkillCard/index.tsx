import { IoServer } from '@react-icons/all-files/io5/IoServer';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import { IoLogoFigma } from '@react-icons/all-files/io5/IoLogoFigma';
import type { MouseEventHandler, ReactNode } from 'react';
import type { SkillType } from '@/data/skillData';
import cx from '@/util/cx';

interface SkillCardProps {
	type: SkillType;
	activeSkill: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const skillLabels: Record<SkillType, string> = {
	backend: 'Backend',
	frontend: 'Frontend',
	others: 'Otros',
};

const skillDescriptions: Record<SkillType, string> = {
	backend: 'Desarrollo del lado del servidor para procesar y almacenar datos.',
	frontend: 'Diseño y maquetación de aplicaciones web y móviles.',
	others: 'Herramientas y habilidades que adquirí a lo largo de los años.',
};

const skillIcons: Record<SkillType, ReactNode> = {
	backend: <IoServer aria-hidden='true' className='h-6 w-6' />,
	frontend: <MdWeb aria-hidden='true' className='h-6 w-6' />,
	others: <IoLogoFigma aria-hidden='true' className='h-6 w-6' />,
};

const SkillCard = ({ type, activeSkill, onClick }: SkillCardProps) => (
	<button
		type='button'
		onClick={onClick}
		aria-pressed={activeSkill}
		className={cx(
			'card w-full cursor-pointer text-left',
			activeSkill && 'bg-primary text-primary-content shadow-md shadow-primary/40'
		)}>
		<span className='card-body'>
			<span className='flex items-center space-x-2'>
				{skillIcons[type]}
				<span className='card-title'>{skillLabels[type]}</span>
			</span>
			<span className='text-sm font-light'>{skillDescriptions[type]}</span>
		</span>
	</button>
);

export default SkillCard;
