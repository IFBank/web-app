import styled from 'styled-components';

interface ActionButtonProps {
	backgroundColor: string;
};

// COMPONENTES DE BASE
export const Container = styled.div`
	diplay: flex;
	justify-content: space-between;
	align-items: center;

	padding: 6px 12px;

	border: var(--linear-primary) solid 1px;

	img{
		width: 140px;
		height: 100px;
		background-color: black;
	}
`;

export const InfoContainer = styled.div`
	margin-left: 4px;
`;

export const ActionContainer = styled.div`
	diplay: flex;
	flex-direction: column;
`;

export const QuantContainer = styled.div`
	diplay: flex;
`;

export const ActionButton = styled.div<ActionButtonProps>`
	background: var(${(backgroundColor) => backgroundColor});
	color: white;

	cursor: pointer;

	padding: 4px 8px;
`;

export const QuantText = styled.span`
	background-color: gray;

	border-bottom: black solid 2px;
`;