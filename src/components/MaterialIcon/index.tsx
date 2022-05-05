import React from 'react';

import {
	Container
} from './styles'

interface MaterialIconProps {
	name: string;
	color: string;
	size: number;
};

const MaterialIcon: React.FC<MaterialIconProps> = ({name, size, color, ... rest}) => {
	return (
		<Container 
			size={size}
			color={color}
			
			{ ... rest }
		>
			<span className="material-icons">
				{name}	
			</span>
		</Container>
	);
}

export default MaterialIcon;