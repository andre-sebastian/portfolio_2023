import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import useEnhancedEffect from './useEnhancedEffect';

export interface NoSsrProps {
	children?: React.ReactNode;
	defer?: boolean;
	fallback?: React.ReactNode;
}

function NoSsr(props: NoSsrProps) {
	const { children, defer = false, fallback = null } = props;
	const [mountedState, setMountedState] = useState(false);

	useEnhancedEffect(() => {
		if (!defer) setMountedState(true);
	}, [defer]);

	useEffect(() => {
		if (defer) setMountedState(true);
	}, [defer]);

	return <>{mountedState ? children : fallback}</>;
}

export default NoSsr;
