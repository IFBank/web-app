import styled from 'styled-components';

import MaterialIcon from '../MaterialIcon';

interface ContainerProps {
	fontColor: string;
	backgroundColor: string;
	borderRadius: number;
};

// COMPONENTES DE BASE
export const Container = styled.div<ContainerProps>`
	background: var(${ ({backgroundColor}) => backgroundColor});
	border-radius: ${ ({borderRadius}) =>  `${borderRadius}px` };
	padding: 10px 32px;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0px 4px 4px 0px #00000040;

	cursor: pointer;

	> span{
		color: ${({fontColor}) => fontColor};
		font-family: Ubuntu;
		font-size: 25px;
		font-weight: 700;
	}
`;

export const MaterialIconStyled = styled(MaterialIcon)`
	margin-right: 12px;
`;