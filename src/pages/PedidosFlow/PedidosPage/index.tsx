import React from 'react';

import GenericButton from '../../../components/GenericButton'

import {
	Container
} from './styles';

import pedidosInitial from '../../../assets/pedidosInitial.png'

interface PedidosPageProps {
};

const PedidosPage: React.FC<PedidosPageProps> = () => {

	// TODO: Corrigir texto do header 
	// TODO: Implementar button 

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
		>
			<GenericButton iconName="add_circle_outline" iconSize={34} text="Novo Pedido" borderRadius={30} />
			<img src={pedidosInitial} />
		</Container>
	);
}

export default PedidosPage;
