import React from 'react';

import {
	Container
} from './styles'

interface MaterialIconProps {
	name: string;
	color: string;
	size: number;
	bgColor?: string;
};

// TODO: Permitir outros estilos de icones (Outline, filled, rounded, sharp, two tone)

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