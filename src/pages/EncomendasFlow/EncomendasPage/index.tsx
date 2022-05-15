import React from 'react';

import BarraPesquisa from '../../../components/BarraPesquisa';
import PedidoPin from '../../../components/PedidoPin';
import MaterialIcon from '../../../components/MaterialIcon';


import {
	Container,
	PageIndicator,
	Content,
	ButtonPassPage,
	PedidosGrid
} from './styles';

interface EncomendasPageProps {
};

const EncomendasPage: React.FC<EncomendasPageProps> = () => {

	return (
		<Container 
			titleHeader="Encomendas" 
			subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
		>
			<BarraPesquisa>
				<PageIndicator>
					1/2
				</PageIndicator>
			</BarraPesquisa>
			
			<Content>
				<ButtonPassPage>
					<MaterialIcon name="arrow_back" size={26} color="black" />	
				</ButtonPassPage>
				

				<PedidosGrid>
					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>

					
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>

					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>

					
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>
					<PedidoPin	gradient="secondary"/>
					<PedidoPin	gradient="primary"/>

				</PedidosGrid>

				<ButtonPassPage>
					<MaterialIcon name="arrow_forward" size={26} color="black" />	
				</ButtonPassPage>
			</Content>

		</Container>
	);
}

export default EncomendasPage;
