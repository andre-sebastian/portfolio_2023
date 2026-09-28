import type { ReactNode } from 'react';
import cx from '@/util/cx';

interface PanelProps {
	children: ReactNode;
	className?: string;
}

const Panel = ({ children, className }: PanelProps) => (
	<div
		className={cx(
			'card col-span-12 rounded-xl bg-base-200 shadow-lg shadow-primary/50',
			className
		)}>
		{children}
	</div>
);

export default Panel;
