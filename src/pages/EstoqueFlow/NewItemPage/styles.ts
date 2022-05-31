import styled from 'styled-components';

import BasePage from '../../../components/BasePage'

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
`;

export const InputImage = styled.div`
	border: 1.25px dashed #333333;
`;

export const FormStyled = styled.form`
	display: flex;

	padding: 12px;

	> img{
		height: 100px;
		width: 220px;	
	}
`;

export const OutrosInputs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	flex: 1;

	margin-left: 20px;
`;

export const InputDuplo = styled.div`
	display: flex;
	justify-content: space-between;

	> * {
		flex-basis: 1px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex; 
	flex:1;

	justify-content: center;
	align-items: center;

	margin-top: 24px;
`;
