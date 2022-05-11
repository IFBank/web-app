import React from 'react';

import GenericButton from '../../../components/GenericButton'

import {
	Container
} from './styles';

import pedidosInitial from '../../../assets/pedidosInitial.png'

interface PedidosPageProps {
};

const PedidosPage: React.FC<PedidosPageProps> = () => {

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
		>
			<GenericButton />
			<img src={pedidosInitial} />
		</Container>
	);
}

export default PedidosPage;
