import styled from 'styled-components';

import MaterialIcon from '../MaterialIcon'

// COMPONENTES DE BASE
export const Container = styled.div`
	position: fixed;
	
	height: 100vh;
	width: 70px;

	padding-top: 24px;
	padding-bottom: 24px;

	display: flex;
	flex-direction: column;

	background: var(--linear-primary);
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 36px;
		height: 36px;
	}
`;

export const MenuItemContainer = styled.nav`
	justify-content: center;

	display: flex;
	flex-direction: column;
`;

export const ExitButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	bottom: 24px;

	width: 100%;
`;

// CUSTOM
export const ExitButton = styled(MaterialIcon)`
	cursor: pointer
`;
