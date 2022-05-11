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
	titleHeader: string;
	subTitleHeader: string;
};

const BasePage: React.FC<BasePageProps> = (
	{
		children=null, 
		titleHeader,
		subTitleHeader,
		... rest
	}
) => {
	return (
		<Container >
			<MenuLateral />

			<Content>
				<HeaderContainer>
					<HeaderTitle 
						title={titleHeader}
						subTitle={subTitleHeader}
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