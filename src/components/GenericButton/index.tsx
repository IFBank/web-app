import React from 'react';

import {
	Container
} from './styles';

interface GenericButtonProps {
};

const GenericButton: React.FC<GenericButtonProps> = ({ ... rest}) => {

	return (
		<Container { ... rest }>
		</Container>
	);
}

export default GenericButton;
