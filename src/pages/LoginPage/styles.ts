import styled from 'styled-components';

// Importe BasePage

// COMPONENTES DE BASE
export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: linear-gradient(90.28deg, #32CD32 0.23%, #6BE32B 99.74%);

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	> img {
		width: 70%;
	}
`;

export const TitleApp = styled.h1`
	font-family: Ubuntu;
	font-size: 26px;
	font-style: italic;
	font-weight: 700;
	text-align: center;
	color: white;

	margin-top: 26px;
`;

export const FormBox = styled.div`
	padding: 32px 16px;

	background: #FEFFFE;
	box-shadow: 0px 4px 4px #39C923;
	border-radius: 10px;

	> form {
		margin-bottom: 30px;
	}
`
export const FormTitle = styled.h2`
	font-family: Ubuntu;
	font-size: 26px;
	font-weight: 700;

	text-align: center;
	margin-bottom: 34px;
`;

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	margin-bottom: 18px;

	> input {
		font-family: 'Mukta';
		font-weight: 400;
		font-size: 18px;
		border: none;
		height: 100%;
		box-shadow: inset 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
		padding: 5px;
	}

	> div {
		margin: 4px 5px;
	}
`;
