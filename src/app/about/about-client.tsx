'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import SkillCard from '@/components/SkillCard';
import {
	backendIconsCloud,
	frontendIconsCloud,
	othersIconsCloud,
} from '@/components/IconCloud/allIconsCloud';
import userInfo from '@/data/userInfoData';
import Button from '@/components/Button';
import Panel from '@/components/Panel';
import { FULL_NAME, PROFILE_IMAGE } from '@/util/site';
import {
	backendSkills,
	frontendSkills,
	otherSkills,
	type ISkill,
	type SkillType,
} from '@/data/skillData';

const IconCloud = dynamic(() => import('@/components/IconCloud'), {
	ssr: false,
	loading: () => (
		<span
			role='status'
			aria-label='Cargando nube de tecnologías'
			className='loading loading-spinner loading-lg'
		/>
	),
});

const skillTypes: SkillType[] = ['backend', 'frontend', 'others'];

const skillsByType: Record<SkillType, ISkill[]> = {
	backend: backendSkills,
	frontend: frontendSkills,
	others: otherSkills,
};

const iconSlugsByType: Record<SkillType, string[]> = {
	backend: backendIconsCloud,
	frontend: frontendIconsCloud,
	others: othersIconsCloud,
};

const About = () => {
	const [activeSkill, setActiveSkill] = useState<SkillType>('backend');

	return (
		<Panel>
			<div className='card-body'>
				<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
					Acerca de mí
				</h1>
				<div className='mx-auto text-center'>
					<Image
						priority
						alt={`Foto de perfil de ${userInfo.name} ${userInfo.lastname}`}
						width={320}
						height={320}
						className='mx-auto mb-6 h-40 w-40 rounded-full'
						src={PROFILE_IMAGE}
					/>
					<h2 className='mb-5 py-1 font-serif text-2xl font-semibold text-white'>
						{FULL_NAME}
					</h2>
					<p className='mx-0 text-sm font-light md:mx-20'>{userInfo.bio}</p>
				</div>
				<h2 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
					Habilidades
				</h2>
				<div className='grid grid-cols-12'>
					{skillTypes.map((type) => (
						<div
							key={type}
							className='col-span-12 my-2 md:col-span-4 md:mx-2 md:my-0'>
							<SkillCard
								type={type}
								onClick={() => setActiveSkill(type)}
								activeSkill={activeSkill === type}
							/>
						</div>
					))}
				</div>
				<br />
				<div className='grid grid-cols-12'>
					<div className='col-span-12 md:col-span-7'>
						<IconCloud slugs={iconSlugsByType[activeSkill]} />
					</div>
					<div className='col-span-12 md:col-span-5'>
						{skillsByType[activeSkill].map(({ title, url, percentage }) => (
							<div
								key={title}
								className='my-2 grid grid-cols-12 content-center gap-1'>
								<div className='col-span-12 md:col-span-4'>
									<Button
										href={url}
										target='_blank'
										rel='noopener noreferrer'
										size='sm'
										variant='primary'
										className='normal-case font-light shadow-lg'>
										{title}
									</Button>
								</div>
								<div className='col-span-12 md:col-span-8'>
									<progress
										className='progress progress-accent w-full'
										value={percentage}
										max='100'
										aria-label={`Nivel de ${title}`}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Panel>
	);
};

export default About;
