import { useRouter } from 'next/router';
import { BiMenu } from '@react-icons/all-files/bi/BiMenu';
import navbarDrawerContent from './navigationData';
import Image from 'next/image';

interface NavbarProps {
	activePage?: string;
	children?: JSX.Element;
}

const Navbar = ({ activePage }: NavbarProps) => {
	const router = useRouter();

	return (
		<>
			<div className='navbar mt-2 w-4/5 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
				<div className='navbar-start'>
					<div className='flex-none lg:hidden'>
						<label
							htmlFor='my-drawer-3'
							className='btn btn-primary gap-2 shadow-md shadow-primary/20'>
							<BiMenu size={25} />
						</label>
					</div>
					<div className='ml-2 h-12 w-12'>
						<Image
							priority
							alt=''
							width={48}
							height={48}
							//layout='intrinsic'
							className='h-12 w-12 rounded-full shadow-lg shadow-primary/50 ring-2 ring-primary '
							src='/assets/images/andre.jpeg'
						/>
					</div>
				</div>

				<div className='navbar-end hidden items-center gap-3 lg:flex'>
					{navbarDrawerContent.map(({ id, title, icon, url }) => {
						return (
							<button
								key={id}
								onClick={() => router.push(`${url}`)}
								className={`btn btn-sm gap-2 normal-case shadow-lg ${
									activePage === id
										? 'btn-primary shadow-primary/40'
										: 'btn-neutral shadow-neutral/40'
								}`}>
								{icon}
								{title}
							</button>
						);
					})}

					{/* <button className='normal-case  gap-2 btn btn-neutral shadow-lg shadow-neutral/40'>
						<GrFacebook size={20} />
						Hola
					</button> */}
				</div>
			</div>
		</>
	);
};

export default Navbar;
