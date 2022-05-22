import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	box-shadow: 0px 4px 4px 0px #00000040;

	padding: 15px 26px;

	background-color: white;

	border-radius: 10px;	
	width: max-content;

	margin-bottom: 16px;

	> img{
		height: 60px;
		width: 80px;

		border-radius: 10px;
		background-color: black;
	}
`;

export const InfoPedidoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	margin-left: 12px;
`;

export const BoldText = styled.p`
	font-family: Mukta;
	font-size: 17px;
	font-weight: 700;
`;
export const ThinText = styled.span`
	font-family: Mukta;
	font-size: 17px;
	font-weight: 400;
`;

