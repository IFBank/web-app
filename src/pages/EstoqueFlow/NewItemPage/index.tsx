import React from 'react';

import {
	Container
} from './styles';

interface NewItemPageProps {
};

const NewItemPage: React.FC<NewItemPageProps> = () => {

	return (
		<Container
			titleHeader="Cadastro de mercadoria" 
			subTitleHeader="Preencha os campos e cadastre um produto."
		>
		</Container>
	);
}

export default NewItemPage;
