import React from 'react';

import {
	Container
} from './styles';

interface EditItemPageProps {
};

const EditItemPage: React.FC<EditItemPageProps> = () => {

	return (
		<Container
			titleHeader="Alteração de mercadoria" 
			subTitleHeader="Preencha os campos e cadastre um produto."
		>
		</Container>
	);
}

export default EditItemPage;
