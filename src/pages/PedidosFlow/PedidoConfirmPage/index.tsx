import React from 'react';

import {
	Container
} from './styles';

interface PedidoConfirmPageProps {
};

const PedidoConfirmPage: React.FC<PedidoConfirmPageProps> = () => {

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
		>
		</Container>
	);
}

export default PedidoConfirmPage;
