import styled from 'styled-components';

import BasePage from '../../../components/BasePage'

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
	display: flex;
	flex-direction: column;
`;

export const PedidoInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 12px;
`;

export const CarrinhoText = styled.p`
	
	font-family: Ubuntu;
	font-size: 24px;
	font-weight: 700;
	color: black;

	> span{
		font-family: Mukta;
		font-size: 16px;
		font-weight: 400;
	}
`;

export const TotalText = styled.p`
	font-family: Ubuntu;
	font-size: 18px;
	font-weight: 700;

	color: black;

	> span{
		color: #32DC32;
	}
`;

export const ItemsContainer = styled.div`
	flex: 1;
`;