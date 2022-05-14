import styled from 'styled-components';

import BasePage from '../../../components/BasePage';

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
`;

export const BuyCircleButton = styled.div`
	background: var(--linear-secondary);
	width: 50px;
	height: 50px;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	box-shadow: 0px 4px 4px 0px #00000040;
`;

export const Content = styled.div`

`;