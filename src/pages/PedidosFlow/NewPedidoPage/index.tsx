import React from 'react';

import {
	Container
} from './styles';

interface NewPedidoPageProps {
};

const NewPedidoPage: React.FC<NewPedidoPageProps> = () => {

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
		>
		</Container>
	);
}

export default NewPedidoPage;
