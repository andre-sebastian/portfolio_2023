import type { ReactNode } from 'react';
import Drawer from '@/components/Drawer';
import Footer from '@/components/Footer';
import Panel from '@/components/Panel';
import type { NavId } from '@/components/Drawer/navigationData';

interface PageShellProps {
	activePage?: NavId | '';
	showFooter?: boolean;
	children: ReactNode;
}

const PageShell = ({
	activePage,
	showFooter = true,
	children,
}: PageShellProps) => (
	<div className='bg-image min-h-screen w-full'>
		<Drawer activePage={activePage}>
			<div className='mt-6 grid w-4/5 grid-cols-12 gap-2'>
				{children}
				{showFooter && (
					<Panel className='my-2 overflow-hidden'>
						<Footer />
					</Panel>
				)}
			</div>
		</Drawer>
	</div>
);

export default PageShell;
