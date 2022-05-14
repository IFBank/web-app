import styled from 'styled-components';

interface ContainerProps {
	fontColor?: string;
};

// COMPONENTES DE BASE
export const Container = styled.p<ContainerProps>`
	display: flex;
	align-items: baseline;

	color: ${ ({fontColor}) => fontColor};

	font-family: Mukta;
	font-size: 18px;
	font-weight: 400;

	span{
		font-weight: 600;
	}

	div {
		border-color: ${ ({fontColor}) => fontColor};	
	}
`;

export const Dashed = styled.div`
	border-bottom-style: dashed;
	border-width: 2px;

	flex: 1;

	margin: 0 2px;
`;
