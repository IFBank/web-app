import React from 'react';

import MenuItem from './MenuItem'

import {
	Container,
	LogoContainer,
	MenuItemContainer,
	ExitButtonContainer,
	ExitButton
} from './styles';


import MiniLogo from '../../assets/minilogo.png';

interface MenuLateralProps {
};

// TODO: Implementar comportamento ao clicar no icones

const MenuLateral: React.FC<MenuLateralProps> = () => {
	return (
		<Container>
			<LogoContainer>
				<img src={MiniLogo} />
			</LogoContainer>

			<MenuItemContainer>
				<MenuItem nameIcon="task" to={'/pedidos'} />	
				<MenuItem nameIcon="pending_actions" to={'/encomendas'} />	
				<MenuItem nameIcon="analytics" to={'/dashboard'} />	
				<MenuItem nameIcon="inventory_2" to={'/estoque'} />	
			</MenuItemContainer>
			
			<ExitButtonContainer>
				<ExitButton 
					name="logout" 
					size={36} 
					color="#FEFFFE"
				/>
			</ExitButtonContainer>
		</Container>
	);
}

export default MenuLateral;
