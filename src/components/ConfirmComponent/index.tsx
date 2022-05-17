import React from 'react';

import {
	Container,
	IconButton
} from './styles'

interface ComponentProps {
	onCancel?: () => void;
	onConfirm?: () => void;
};

const Component: React.FC<ComponentProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 
			<span>Confirmar? </span>
			<IconButton bgColor="semantic-red" name="clear" size={40} color="white"/>
			<IconButton bgColor="primary" name="check" size={40} color="white"/>
		</Container> 
	);

};

export default Component;

