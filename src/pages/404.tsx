import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

const FourZeroFour: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<div className='bg-image min-h-screen w-full'>
				<Drawer activePage={''}>
					<div className='mt-6 grid w-4/5 grid-cols-12 gap-2 '>
						<div className='card col-span-12 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
							<div className='card-body text-center'>
								<h1 className=' mb-5 bg-gradient-to-br from-[#1f4c39] to-[#2d6a4f] bg-clip-text py-3 font-serif text-8xl font-extrabold text-white text-transparent'>
									404
								</h1>
								<p className='mb-5 py-3 text-xl text-white'>
									Ups no se encontro lo que buscas
								</p>
							</div>
						</div>
						<div className='card col-span-12 my-2  rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
							<Footer />
						</div>
					</div>
				</Drawer>
			</div>
		</>
	);
};

export default FourZeroFour;
