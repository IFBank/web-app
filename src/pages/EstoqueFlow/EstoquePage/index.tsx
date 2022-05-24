import React from 'react';

import ItemQuantCard from '../../../components/ItemQuantCard'
import BarraPesquisa from '../../../components/BarraPesquisa'
import FilterSearch from '../../../components/FilterSearch'

import GenericButton from '../../../components/GenericButton'

import {
	Container,
	ButtonsContainer,
	ItemsContainer
} from './styles';

interface EstoquePageProps {
};

const EstoquePage: React.FC<EstoquePageProps> = () => {

	return (
		<Container
			titleHeader="Estoque" 
			subTitleHeader="Trabalhe aqui com as funcionalidades de criação, exclusão e atualização das mercadorias."
		>

			<ButtonsContainer>
				<GenericButton 
					text="Balanço geral" 
					iconSize={30} 
					iconName="table_chart" 
					borderRadius={300} />
				<GenericButton 
					text="Cadastrar produto" 
					iconSize={30} 
					iconName="add_circle_outline" 
					borderRadius={300} />
					
			</ButtonsContainer>

			<BarraPesquisa>
				<FilterSearch />
			</BarraPesquisa>

			<ItemsContainer>
				<ItemQuantCard isEstoquePage />	
			</ItemsContainer>
		</Container>
	);
}

export default EstoquePage;
