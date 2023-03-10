import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import ContactForm from '../components/ContactForm';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
	const router = useRouter();

	return (
		<div className='bg-image min-h-screen w-full'>
			<Drawer activePage={'contact'}>
				<div className='mt-6 grid w-4/5 grid-cols-12 gap-2 '>
					<div className='card col-span-12 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
						<div className='card-body'>
							<h1 className='mb-5 py-3 font-serif text-4xl font-bold text-white'>
								Contactar
							</h1>
							<div className='grid grid-cols-12'>
								<div className='col-span-12 lg:col-span-2'></div>
								<div className='col-span-12 lg:col-span-8'>
									<ContactForm />
								</div>
								<div className='col-span-12 lg:col-span-2'></div>
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

export default Contact;
