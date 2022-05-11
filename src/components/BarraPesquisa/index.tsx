import React from 'react';

import MaterialIcon from '../MaterialIcon'

import {
	Container,
	InputContainer
} from './styles'

interface BarraPesquisaProps {
	children?: React.ReactNode;
};

const BarraPesquisa: React.FC<BarraPesquisaProps> = (
	{ 
		children=null, 
		... rest 
	}
) => {

	return (
		<Container { ... rest } >
			<InputContainer>
				<MaterialIcon name="search" color="black" size={24}/>
				<input type="text" placeholder="Pesquisar" />
			</InputContainer>
			{children}
		</Container>
	);
}

export default BarraPesquisa;
