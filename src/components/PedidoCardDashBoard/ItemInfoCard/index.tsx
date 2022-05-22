import React from 'react';

import {
	Container,
	InfoPedidoContainer,

	BoldText,
	ThinText
} from './styles'

interface ItemInfoCardProps {
};

const ItemInfoCard: React.FC<ItemInfoCardProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 

			<img src="" alt="" />

			<InfoPedidoContainer>
				<BoldText>Coxinha de Frango</BoldText>
				<BoldText> Qtd:<ThinText>2 unid. </ThinText> </BoldText>
			</InfoPedidoContainer>
		</Container> 
	);

};

export default ItemInfoCard;

