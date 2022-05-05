import React from 'react';

import MenuItem from './MenuItem'

import {
	Container,
	LogoContainer,
	MenuItemContainer,
	ExitButtonContainer,
	ExitButton
} from './styles';


interface MenuLateralProps {
};

const MenuLateral: React.FC<MenuLateralProps> = () => {
	return (
		<Container>
			<LogoContainer>
				
			</LogoContainer>

			<MenuItemContainer>
				<MenuItem nameIcon="task" />	
				<MenuItem nameIcon="task" selected />	
				<MenuItem nameIcon="task" />	
				<MenuItem nameIcon="task" />	
				<MenuItem nameIcon="task" />	
			</MenuItemContainer>
			
			<ExitButtonContainer>
				<ExitButton 
					name="task" 
					size={36} 
					color="#FEFFFE"
				/>
			</ExitButtonContainer>
		</Container>
	);
}

export default MenuLateral;