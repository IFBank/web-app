import styled from 'styled-components';

import MaterialIcon from '../MaterialIcon';

interface IContainerProps {
	bgColor: string;
	hasBorderRTop: boolean;
	hasBorderRBottom: boolean;
};

export const Container = styled.div<IContainerProps>`
	display: flex;
	flex-direction: column;

	flex: 1;

	border-radius: ${ ({hasBorderRTop}) => hasBorderRTop ? "10px 10px" : "0 0" } ${ ({hasBorderRBottom}) => hasBorderRBottom ? " 10px 10px" : "0 0" };

	background: ${ ({bgColor}) => `var(--linear-${bgColor})` };
`;

export const PedidoInfo = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 12px 24px;
`;

export const ItemsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 1;
	flex-wrap: wrap;

	padding: 12px 12.5%;
	margin-bottom: 12px;
`;

export const PedidoTextSemiBold = styled.p`
	font-family: Mukta;
	font-size: 20px;
	font-weight: 600;

	color: white;
`;

export const PedidoTextRegular = styled.p`
	font-family: Mukta;
	font-size: 18px;
	font-weight: 400;

	color: white;
`;


export const MaterialIconStyled = styled(MaterialIcon)`
	align-self: center;

	cursor: pointer;
`;

