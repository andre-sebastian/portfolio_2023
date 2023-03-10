import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Drawer from '../components/Drawer';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaDownload } from '@react-icons/all-files/fa/FaDownload';
import Image from 'next/image';
import userInfo from '../data/userInfoData';

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<div className='bg-image min-h-screen w-full'>
				<Drawer activePage={'home'}>
					<div className='mt-6 grid w-4/5 grid-cols-12 gap-2 '>
						<div className='col-span-12 lg:col-span-4'></div>
						<div className='col-span-12 p-4 text-center lg:col-span-4'>
							<Image
								priority
								alt=''
								width='0'
								height='0'
								sizes='100vw'
								//layout='intrinsic'
								className='mx-auto mb-6 w-56 h-56 rounded-full'
								src='/assets/images/andre.jpeg'
							/>
							<h1 className='my-2 text-2xl font-bold text-white'>
								{userInfo.name}
							</h1>
							<p className='my-2 text-base font-extralight text-base-content'>
								{userInfo.profession}
							</p>
							<div className='my-4 grid grid-cols-12 gap-2'>
								{/* <div className='col-span-3'>
									<button
										onClick={() =>
											window.open(userInfo.social.facebook, '_blank')
										}
										className='btn-secondary btn'>
										<FaFacebookF size={20} className='text-[#1877F2]' />
									</button>
								</div> */}
								<div className='col-span-4'>
									<button
										onClick={() =>
											window.open(userInfo.social.github, '_blank')
										}
										className='btn-secondary btn '>
										<FaGithub size={20} className='text-white' />
									</button>
								</div>
								<div className='col-span-4'>
									<button
										onClick={() =>
											window.open(userInfo.social.linkedin, '_blank')
										}
										className='btn-secondary btn '>
										<FaLinkedinIn size={20} className='text-[#0A66C2]' />
									</button>
								</div>
								<div className='col-span-4'>
									<button
										onClick={() =>
											window.open(userInfo.social.twitter, '_blank')
										}
										className='btn-secondary btn '>
										<FaTwitter size={20} className='text-[#1DA1F2]' />
									</button>
								</div>
							</div>
							<a download href='/assets/images/cv.jpg' className='btn btn-link text-white no-underline btn-block my-2 gap-2 normal-case'>
								<FaDownload size={20} className='text-white' />
								Descargar CV
							</a>
						</div>
						<div className='col-span-12 lg:col-span-4'></div>
					</div>
				</Drawer>
			</div>
		</>
	);
};

export default Home;
