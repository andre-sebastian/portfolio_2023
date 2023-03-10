import { Cloud } from 'react-icon-cloud';

interface IconCloudProps {
	children: any;
}

const IconCloud = ({ children }: IconCloudProps) => {
	return (
		<Cloud
			options={{
				tooltip: 'native',
				tooltipDelay: 0,
				imageScale: 2,
				maxSpeed: 0.04,
				freezeActive: true,
				shuffleTags: true,
				shape: 'sphere',
				clickToFront: 500,
				textFont: 'Poppins',
				pinchZoom: true,
				wheelZoom: false,
				freezeDecel: true,
				fadeIn: 3000,
				initial: [0.3, -0.1],
				depth: 1.1,
			}}
			containerProps={{
				style: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				},
			}}>
			{children}
		</Cloud>
	);
};

export default IconCloud;
