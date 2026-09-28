import navbarDrawerContent, { type NavId } from './navigationData';
import NavLink from './NavLink';
import Image from 'next/image';
import { BiMenu } from '@react-icons/all-files/bi/BiMenu';
import { PROFILE_IMAGE } from '@/util/site';

interface NavbarProps {
	activePage?: NavId | '';
}

const Navbar = ({ activePage }: NavbarProps) => {
	return (
		<div className='navbar mt-2 w-4/5 rounded-xl bg-base-200 shadow-lg shadow-primary/50'>
			<div className='navbar-start'>
				<div className='flex-none lg:hidden'>
					<label
						htmlFor='my-drawer-3'
						className='btn btn-primary drawer-button gap-2 shadow-md shadow-primary/20'>
						<BiMenu size={25} aria-hidden='true' />
						<span className='sr-only'>Abrir menú de navegación</span>
					</label>
				</div>
				<div className='ml-2 h-12 w-12'>
					<Image
						loading='eager'
						alt='Andre Sebastian Reinoso'
						width={48}
						height={48}
						className='h-12 w-12 rounded-full shadow-lg shadow-primary/50 ring-2 ring-primary '
						src={PROFILE_IMAGE}
					/>
				</div>
			</div>

			<nav
				aria-label='Navegación principal'
				className='navbar-end hidden items-center gap-3 lg:flex'>
				{navbarDrawerContent.map((item) => (
					<NavLink key={item.id} item={item} activePage={activePage} className='btn-sm' />
				))}
			</nav>
		</div>
	);
};

export default Navbar;
