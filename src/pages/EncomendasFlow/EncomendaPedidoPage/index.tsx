import React, {useState} from 'react';

import BackButton from '../../../components/BackButton'

import ItemInfoEncomendas from '../../../components/ItemInfoEncomendas'
import ConfirmComponent from '../../../components/ConfirmComponent'

import {
	Container,
	PedidoInfoContainer,
	PedidoTitle,
	InfoPedidoContainer,
	ItemsContainer,
	GenericButtonEncomendas,
	ConfirmConteiner,

} from './styles';

interface EncomendaPedidoPageProps {
};

const EncomendaPedidoPage: React.FC<EncomendaPedidoPageProps> = () => {
	const [confirmPedido, setConfirmPedido] = useState(false);

	return (
		<Container
			titleHeader="Encomendas" 
			subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
		>
			<BackButton />

			<PedidoInfoContainer>
				<PedidoTitle>
					Pedido ID
				</PedidoTitle>
				<InfoPedidoContainer>
					<p> Feito por: <span>Êxodo Jaffar</span></p>
					<p> Vencimento: <span>agora</span></p>
					<p> Total:<span>R$ 12,99</span></p>
				</InfoPedidoContainer>
			</PedidoInfoContainer>

			<ItemsContainer>
				<ItemInfoEncomendas />
				<ItemInfoEncomendas />
			</ItemsContainer>

			<ConfirmConteiner>
			
			{
			!confirmPedido ? (
				<> 	
					<GenericButtonEncomendas text="Cancelar" gradient="semantic-red" iconName="highlight_off" />
					<GenericButtonEncomendas text="Confirmar" iconName="check_circle_outline" />
				</> ) : <ConfirmComponent />
			}
			
			</ConfirmConteiner>
		

		</Container>
	);
}

export default EncomendaPedidoPage;