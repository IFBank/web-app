import React from 'react';

import GenericButton from '../../components/GenericButton'
import MaterialIcon from '../../components/MaterialIcon';

import {
	Container,

	LogoContainer,
	TitleApp,

	FormBox,
	FormTitle,

	InputContainer
} from './styles';

import logo from '../../assets/logo.png';

interface LoginPageProps {
};

interface InputLoginProps {
	placeholder: string;
	icon: string;
	name: string;
	type: string;
};

const InputLogin: React.FC<InputLoginProps> = ({
	icon,
	name, 
	type,
	placeholder,

	... rest
}) => {
	return (
		<InputContainer {... rest} >
			<MaterialIcon name={icon} size={30} color="#FF1F26" />
			<input type={type} placeholder={placeholder} name={name} required />
		</InputContainer>
	);
}


const LoginPage: React.FC<LoginPageProps> = () => {

	return (
		<Container>

		<LogoContainer>
			<img src={logo} alt="ifbank logo" />

			<TitleApp>Painel de Administração</TitleApp> 
		</LogoContainer>

		<FormBox>
			<FormTitle>Login</FormTitle>
			<form action="#">
				<InputLogin icon="person" placeholder="Usuario" name="username" type="text" />
				<InputLogin icon="lock" placeholder="Senha" name="password" type="password" />	
			</form>
			<GenericButton borderRadius={8} text="Entre" />
		</FormBox>
		</Container>
	);
}

export default LoginPage;
