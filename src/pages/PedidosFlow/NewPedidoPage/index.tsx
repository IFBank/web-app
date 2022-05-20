import React from 'react';

import BarraPesquisa from '../../../components/BarraPesquisa'
import MaterialIcon from '../../../components/MaterialIcon';
import ItemQuantCard from '../../../components/ItemQuantCard';

import {
	Container,
	BuyCircleButton,
	Content
} from './styles';

interface NewPedidoPageProps {
};

const NewPedidoPage: React.FC<NewPedidoPageProps> = () => {

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
			textCancelButton="Cancelar pedido"
		>
			<BarraPesquisa>
				<BuyCircleButton>
					<MaterialIcon color="white" size={28} name="shopping_cart" />
				</BuyCircleButton>
			</BarraPesquisa>

			<Content>
				<ItemQuantCard />
			</Content>
		</Container>
	);
}

export default NewPedidoPage;
