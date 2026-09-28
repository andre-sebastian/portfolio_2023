import type { MouseEvent, ReactElement } from 'react';
import { renderSimpleIcon } from 'react-icon-cloud';
import { simpleIcons } from './allIconsCloud';

const getIcons = (slugs: string[]): ReactElement[] => {
	const slugSet = new Set(slugs);
	const icons = simpleIcons.filter(({ slug }) => slugSet.has(slug));

	return icons.map((icon) =>
		renderSimpleIcon({
			icon,
			size: 42,
			aProps: {
				onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
			},
		}),
	);
};

export default getIcons;
