import { useRouter } from 'next/router';
import Navbar from './Navbar';
import navbarDrawerContent from './navigationData';

interface DrawerProps {
	activePage?: string;
	children?: JSX.Element;
}

const Drawer = ({ children, activePage }: DrawerProps) => {
	const router = useRouter();

	return (
		<>
			<div className='drawer'>
				<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content flex flex-col items-center'>
					<Navbar activePage={activePage} />
					{children}
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
					<ul className='menu w-80 gap-3 overflow-y-auto bg-base-100 p-4'>
						{navbarDrawerContent.map(({ id, title, icon, url }) => {
							return (
								<li key={id}>
									<button
										onClick={() => router.push(`${url}`)}
										className={`btn place-content-start content-center gap-2 normal-case shadow-lg  ${
											activePage === id
												? 'btn-primary shadow-primary/40'
												: 'btn-neutral shadow-neutral/40'
										}`}>
										{icon}
										{title}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Drawer;
