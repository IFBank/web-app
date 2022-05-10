import React from 'react';

import MenuLateral from '../MenuLateral';
import HeaderTitle from '../HeaderTitle';

import {
	Container,
	Content,
	HeaderContainer,
	MainContent
} from './styles'

interface BasePageProps {
	children?: React.ReactNode;
};

const BasePage: React.FC<BasePageProps> = ({children=null, ... rest}) => {
	return (
		<Container >
			<MenuLateral />

			<Content>
				<HeaderContainer>
					<HeaderTitle 
						title="Encomendas"
						subTitle="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
					/>
					{/*TODO: Render condicional para o button*/}
				</HeaderContainer>

				<MainContent { ... rest }>
					{children}
				</MainContent>
			</Content>
		</Container>
	);
}

export default BasePage;