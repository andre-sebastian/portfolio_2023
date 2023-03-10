import type { NextPage } from 'next';
import Drawer from '../components/Drawer';
import Card from '../components/Card';
import { FaTrophy } from '@react-icons/all-files/fa/FaTrophy';
import { IoSchool } from '@react-icons/all-files/io5/IoSchool';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import {
	resumeDataAwards,
	resumeDataEducation,
	resumeDataExperience,
} from '../data/resumeData';
import Footer from '../components/Footer';

const Resume: NextPage = () => {
	return (
		<div className='bg-image min-h-screen w-full'>
			<Drawer activePage={'resume'}>
				<div className='mt-6 grid w-4/5 grid-cols-12 gap-2 '>
					<div className='card col-span-12 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
						<div className='card-body'>
							<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
								Trayectoria
							</h1>

							<div className='grid grid-cols-12 gap-y-2 lg:gap-2 '>
								<div className='col-span-12 space-y-4 lg:col-span-4'>
									<div className=' flex items-center space-x-2'>
										<button className='btn btn-primary no-animation gap-1 p-3'>
											<IoSchool className='h-6 w-6' />
										</button>
										<h2 className='font-serif text-2xl text-white'>
											Educación
										</h2>
									</div>
									<div className='overflow-y-scroll h-96'>
										{resumeDataEducation.map((props, i) => (
											<Card key={i} {...props} />
										))}
									</div>
								</div>
								<div className='col-span-12 space-y-4 lg:col-span-4'>
									<div className=' flex items-center space-x-2'>
										<button className='btn btn-primary no-animation gap-1 p-3'>
											<FaBriefcase className='h-6 w-6' />
										</button>
										<h2 className='font-serif text-2xl text-white'>
											Experiencia
										</h2>
									</div>
									<div className='overflow-y-scroll h-96'>
										{resumeDataExperience.map((props, i) => (
											<Card key={i} {...props} />
										))}
									</div>
								</div>
								<div className='col-span-12 space-y-4 lg:col-span-4'>
									<div className=' flex items-center space-x-2'>
										<button className='btn btn-primary no-animation gap-1 p-3'>
											<FaTrophy className='h-6 w-6' />
										</button>
										<h2 className='font-serif text-2xl text-white'>
											Premios
										</h2>
									</div>
									<div className='overflow-y-scroll h-96'>
										{resumeDataAwards.map((props, i) => (
											<Card key={i} {...props} />
										))}
									</div>
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

export default Resume;
