import Navbar from './Navbar';
import NavLink from './NavLink';
import navbarDrawerContent, { type NavId } from './navigationData';

import type { ReactNode } from 'react';

interface DrawerProps {
	activePage?: NavId | '';
	children?: ReactNode;
}

const Drawer = ({ children, activePage }: DrawerProps) => {
	return (
		<div className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col items-center'>
				<Navbar activePage={activePage} />
				<div
					id='contenido'
					tabIndex={-1}
					className='flex w-full flex-col items-center outline-none'>
					{children}
				</div>
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
				<nav aria-label='Navegación principal'>
					<ul className='menu w-80 gap-3 overflow-y-auto bg-base-100 p-4'>
						{navbarDrawerContent.map((item) => (
							<li key={item.id}>
								<NavLink
									item={item}
									activePage={activePage}
									className='place-content-start content-center'
								/>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Drawer;
