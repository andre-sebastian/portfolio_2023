import { IoServer } from '@react-icons/all-files/io5/IoServer';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import { IoLogoFigma } from '@react-icons/all-files/io5/IoLogoFigma';
import { MouseEventHandler } from 'react';

interface SkillCardProps {
	type: 'backend' | 'frontend' | 'others';
	activeSkill: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

const SkillCard = ({ type, activeSkill, onClick }: SkillCardProps) => (
	<div
		onClick={onClick}
		className={`cursor-pointer card w-full  ${
			activeSkill ? 'bg-primary text-primary-content shadow-md  shadow-primary/40' : ''
		} `}>
		<div className='card-body'>
			<div className=' flex items-center space-x-2'>
				{type === 'backend' && <IoServer className='h-6 w-6' />}
				{type === 'frontend' && <MdWeb className='h-6 w-6' />}
				{type === 'others' && <IoLogoFigma className='h-6 w-6' />}
				<h2 className='card-title'>
					{type === 'backend' && `Backend`}
					{type === 'frontend' && `Frontend`}
					{type === 'others' && `Otros`}
				</h2>
			</div>

			<p className='text-sm font-light'>
				{type === 'backend' &&
					`Desarrollo del lado del servidor para procesar y almacenar datos.`}
				{type === 'frontend' &&
					`Diseño y maquetación de aplicaciones web y móviles.`}
				{type === 'others' &&
					`Herramientas y habilidades que adquirí a lo largo de los años.`}
			</p>
		</div>
	</div>
);

export default SkillCard;
