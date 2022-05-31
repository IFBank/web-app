import styled from 'styled-components';

interface IInputContainerProps {
	sideOnRight: boolean;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelText = styled.label`
	font-family: Mukta;
	font-size: 18px;
	font-weight: 500;
`;

export const SideText = styled.span`
	font-family: Mukta;
	font-size: 18px;
	font-weight: 400;

	margin: 0 3px;
`;

export const InputContainer = styled.div<IInputContainerProps>`
	display: flex;
	flex-direction: ${ ({sideOnRight}) => sideOnRight ? "row" : "row-reverse"};

	> input {
		border: 1px solid #5E45CC;
		border-radius: 5px;
		box-shadow: 0px 2px 2px 0px #00000040;

		padding: 4px;

		width: 100%;
		min-width: 70px;
	}
`;
