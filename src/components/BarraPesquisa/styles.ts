import styled from 'styled-components';

// COMPONENTES DE BASE
export const Container = styled.div`
	width: 100%;

	padding-bottom: 24px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const InputContainer = styled.div`
	display: flex;
	flex: 0.86;
	align-items: center;

	padding: 6px 0px;
	border-radius: 24px;
	box-shadow: 0px 4px 4px 0px #00000040;

	div {
		margin-left: 30px;
		margin-right: 24px;
	}

	input {
		flex: 0.9;
		font-family: Mukta;
		font-size: 18px;
		font-weight: 400;
		border: none;

		:focus-visible {
			outline: none;
		}
	}
`;