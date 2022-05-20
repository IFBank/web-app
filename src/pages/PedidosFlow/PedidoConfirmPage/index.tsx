import React, {useState} from 'react';

import BackButton from '../../../components/BackButton'

import ConfirmComponent from '../../../components/ConfirmComponent'
import GenericButton from '../../../components/GenericButton'

import ItemQuantCard from '../../../components/ItemQuantCard';


import {
	Container,
	PedidoInfoContainer,
	ItemsContainer,

	CarrinhoText,
	TotalText,
} from './styles';

interface PedidoConfirmPageProps {
};

const PedidoConfirmPage: React.FC<PedidoConfirmPageProps> = () => {
	const [confirm, setConfirm] = useState(false);

	return (
		<Container
			titleHeader="Pedidos" 
			subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
			textCancelButton="Cancelar pedido"
		>
			<BackButton />
			
			<PedidoInfoContainer>
				
				<CarrinhoText>
					Carrinho <span>#Pedido {"ID"}</span>
				</CarrinhoText>	

				<TotalText>
					Total: <span>R$ {"19,90"}</span>
				</TotalText>

				{
					!confirm ? <GenericButton text="Finalizar pedido" iconName="check_circle_outline" iconSize={30}/> : <ConfirmComponent />
				}
			</PedidoInfoContainer>
			<ItemsContainer>
				<ItemQuantCard />	
			</ItemsContainer>
			

		</Container>
	);
}

export default PedidoConfirmPage;
