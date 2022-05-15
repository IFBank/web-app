import React from 'react';

import {
	Container
} from './styles'

interface ComponentProps {
};

const Component: React.FC<ComponentProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 
		</Container> 
	);

};

export default Component;

