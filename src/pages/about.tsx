import type { NextPage } from 'next';
import Image from 'next/image';
import {
	backendIconsCloud,
	frontendIconsCloud,
	othersIconsCloud,
} from '../components/IconCloud/allIconsCloud';
import IconCloud from '../components/IconCloud';
import NoSsr from '../components/NoSsr';
import useIcons from '../components/IconCloud/useSimpleIcons';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

import userInfo from '../data/userInfoData';
import SkillCard from '@/components/SkillCard';
import { useState } from 'react';
import {
	backendSkills,
	frontendSkills,
	otherSkills,
} from '@/data/skillData';

const About: NextPage = () => {
	const bIcons = useIcons(backendIconsCloud);
	const fIcons = useIcons(frontendIconsCloud);
	const oIcons = useIcons(othersIconsCloud);
	const [activeSkill, setActiveSkill] = useState('backend');

	const renderCloudIcon = (type: string) => {
		switch (type) {
			case 'backend':
				return <IconCloud>{bIcons}</IconCloud>;
			case 'frontend':
				return <IconCloud>{fIcons}</IconCloud>;
			case 'others':
				return <IconCloud>{oIcons}</IconCloud>;
			default:
				return <IconCloud>{bIcons}</IconCloud>;
		}
	};
	const renderButtonsSkills = (type: string) => {
		let data = backendSkills;
		switch (type) {
			case 'backend':
				data = backendSkills;
				break;
			case 'frontend':
				data = frontendSkills;
				break;
			case 'others':
				data = otherSkills;
				break;
			default:
				data = backendSkills;
				break;
		}
		return data.map(({ title, url, percentage }, i) => (
			<div className='grid grid-cols-12 my-2 gap-1 content-center' key={i}>
				<div className='col-span-12 md:col-span-4'>
					<button
						onClick={() => window.open(url, '_blank')}
						className={`btn btn-sm btn-primary btn-ghost normal-case font-light shadow-lg`}>
						{title}
					</button>
				</div>
				<div className='col-span-12 md:col-span-8'>
					<progress
						className=' progress progress-accent w-full'
						value={percentage}
						max='100'></progress>
				</div>
			</div>
			// <button
			// 	onClick={() => window.open(url, '_blank')}
			// 	key={i}
			// 	className={`btn btn-sm btn-primary m-1 gap-2 normal-case font-normal shadow-lg $`}>
			// 	{title}
			// </button>
		));
	};

	return (
		<div className='bg-image min-h-screen w-full'>
			<Drawer activePage={'about'}>
				<div className='mt-6 grid w-4/5 grid-cols-12 gap-2 '>
					<div className='card col-span-12 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
						<div className='card-body'>
							<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
								Acerca de mí
							</h1>
							<div className='mx-auto text-center'>
								<Image
									priority
									alt=''
									width='0'
									height='0'
									sizes='100vw'
									//layout='intrinsic'
									className='mx-auto mb-6 w-40 h-40 rounded-full'
									src='/assets/images/andre.jpeg'
								/>
								<h1 className='mb-5 py-1 font-serif text-2xl font-semibold text-white'>
									{`${userInfo.name} ${userInfo.lastname}`}
								</h1>
								<p className='font-light text-sm mx-0 md:mx-20'>
									{userInfo.bio}
								</p>
							</div>
							{/* <div className='grid grid-cols-12 gap-2 lg:gap-5'>
								<div className='col-span-12 mx-auto lg:col-span-3'></div>
								<div className='col-span-12 lg:col-span-9 lg:pr-12'>
									<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
										{`${userInfo.name} ${userInfo.lastname}`}
									</h1>
									{userInfo.bio}
								</div>
							</div> */}
							<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
								Habilidades
							</h1>
							<div className='grid grid-cols-12'>
								<div className='col-span-12 md:col-span-4 my-2 md:my-0 md:mx-2'>
									<SkillCard
										onClick={() => setActiveSkill('backend')}
										type='backend'
										activeSkill={activeSkill === 'backend'}
									/>
								</div>
								<div className='col-span-12 md:col-span-4 my-2 md:my-0 md:mx-2'>
									<SkillCard
										onClick={() => setActiveSkill('frontend')}
										type='frontend'
										activeSkill={activeSkill === 'frontend'}
									/>
								</div>
								<div className='col-span-12 md:col-span-4 my-2 md:my-0 md:mx-2'>
									<SkillCard
										onClick={() => setActiveSkill('others')}
										type='others'
										activeSkill={activeSkill === 'others'}
									/>
								</div>
							</div>
							<br />
							<div className='grid grid-cols-12'>
								<div className='col-span-12 md:col-span-7'>
									<NoSsr>{renderCloudIcon(activeSkill)}</NoSsr>
								</div>
								<div className='col-span-12 md:col-span-5'>
									{renderButtonsSkills(activeSkill)}
								</div>
							</div>
						</div>
					</div>
					<div className='card col-span-12 my-2  rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
						<Footer />
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default About;
