import React from 'react';

import {
	Container
} from './styles'

interface DashedBoxPedidosProps {
	children?: React.ReactNode;
};

const DashedBoxPedidos: React.FC<DashedBoxPedidosProps> = ({ children = null, ... rest }) => {
	
	return (
		<Container { ... rest } > 
			{children}
		</Container> 
	);

};

export default DashedBoxPedidos;

