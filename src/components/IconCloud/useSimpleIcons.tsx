import { useEffect, useState } from 'react';
import { renderSimpleIcon } from 'react-icon-cloud';
import { simpleIcons } from './allIconsCloud';

const useIcons = (slugs: string[]): any => {
	const [icons, setIcons] = useState<any>();
	useEffect(() => {
		setIcons(simpleIcons.filter(({ slug }: any) => slugs.includes(slug)));
	}, [slugs]);

	if (icons) {
		return icons.map((icon: any) =>
			renderSimpleIcon({
				icon,
				size: 42,
				aProps: {
					onClick: (e: any) => e.preventDefault(),
				},
			})
		);
	}

	return <a>Loading</a>;
};
export default useIcons;
