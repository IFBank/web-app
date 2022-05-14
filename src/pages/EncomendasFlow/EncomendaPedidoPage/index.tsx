import React from 'react';

import {
	Container
} from './styles';

interface EncomendaPedidoPageProps {
};

const EncomendaPedidoPage: React.FC<EncomendaPedidoPageProps> = () => {

	return (
		<Container
			titleHeader="Encomendas" 
			subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
		>
		</Container>
	);
}

export default EncomendaPedidoPage;
