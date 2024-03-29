import styled from 'styled-components';

interface ContainerProps {
	backgroundColor: string;
};

export const PinContainer = styled.div`
	width: auto;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PinOuterCircle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;

	background-color: #CCC;
`;
export const PinInnerCircle = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;

	position: absolute;

	background-color: white;
`;

// COMPONENTES DE BASE
export const Container = styled.div<ContainerProps>`

	display: flex;
	flex-direction: column;
	justify-content: flex-start	;

	border-radius: 10px;

	padding: 12px;
	padding-bottom: 18px;

	cursor: pointer;
	background: ${({backgroundColor}) => `var(${backgroundColor})`};
`;

export const PedidoTitle = styled.span`
	text-align: center;
	color: white;

	font-family: Mukta;
	font-size: 24px;
	font-weight: 700;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const PedidoVencimentoText = styled.p`
	font-family: Mukta;
	font-size: 18px;
	font-weight: 400;
	color: white;

	span{
		font-family: Mukta;
		font-size: 18px;
		font-weight: 600;

	}
`;
