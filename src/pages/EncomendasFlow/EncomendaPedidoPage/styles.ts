import styled from 'styled-components';

import GenericButton from '../../../components/GenericButton'
import BasePage from '../../../components/BasePage'

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
	display: flex;
	flex-direction: column;
`;

export const PedidoInfoContainer = styled.div`
	background: var(--linear-secondary);
	color: white;

	border-radius: 5px;

	justify-content: center;

	padding: 12px;

	margin-bottom: 30px;
`;

export const PedidoTitle = styled.p`
	text-align: center;
	margin-bottom: 24px;
`;

export const InfoPedidoContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
`;

export const ItemsContainer = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	padding: 16px 32px;
`;

export const GenericButtonEncomendas = styled(GenericButton)`
	padding-left: 49px;
	padding-right: 49px;
`;

export const ConfirmConteiner = styled.div`
	display: flex;
	justify-content: space-evenly;
`;