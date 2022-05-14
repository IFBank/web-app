import React from 'react';

import {
	Container
} from './styles';

interface EstoquePageProps {
};

const EstoquePage: React.FC<EstoquePageProps> = () => {

	return (
		<Container
			titleHeader="Estoque" 
			subTitleHeader="Trabalhe aqui com as funcionalidades de criação, exclusão e atualização das mercadorias."
		>
		</Container>
	);
}

export default EstoquePage;
