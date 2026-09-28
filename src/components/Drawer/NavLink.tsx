import Button from '@/components/Button';
import cx from '@/util/cx';
import type { NavId, NavbarDrawerContentType } from './navigationData';

interface NavLinkProps {
	item: NavbarDrawerContentType;
	activePage?: NavId | '';
	className?: string;
}

const NavLink = ({ item, activePage, className }: NavLinkProps) => {
	const { id, title, icon, url } = item;
	const active = activePage === id;

	return (
		<Button
			href={url}
			variant={active ? 'primary' : 'neutral'}
			aria-current={active ? 'page' : undefined}
			className={cx(
				'gap-2 normal-case shadow-lg',
				active ? 'shadow-primary/40' : 'shadow-neutral/40',
				className
			)}>
			{icon}
			{title}
		</Button>
	);
};

export default NavLink;
