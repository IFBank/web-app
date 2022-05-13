import React from 'react';

import {
	PinContainer,
	PinOuterCircle,
	PinInnerCircle,

	Container,
	PedidoTitle,
	InfoContainer,
	PedidoVencimentoText,
} from './styles'

interface PedidoCardProps {
	gradient: string;
};

const Pin: React.FC = () => {
	return (
		<PinContainer>
			<PinOuterCircle />
			<PinInnerCircle />
		</PinContainer>
	);
}

const PedidoCard: React.FC<PedidoCardProps> = ({ gradient, ... rest}) => {
	return (
		<Container 	
			backgroundColor={`--linear-${gradient}`}
			{ ... rest }
		>
		<Pin />
		<PedidoTitle>
			Pedido {"ID"}
		</PedidoTitle>
		
		<InfoContainer>
			<PedidoVencimentoText>
				Vencimento: <span>10:40</span>
			</PedidoVencimentoText>	
		</InfoContainer>
		
		</Container>
	);
}

export default PedidoCard;