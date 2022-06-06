import React, { useContext, useState } from "react";

import GenericButton from "../../components/GenericButton";
import MaterialIcon from "../../components/MaterialIcon";

import {
  Container,
  LogoContainer,
  TitleApp,
  FormBox,
  FormTitle,
  InputContainer,
} from "./styles";

import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";

interface LoginPageProps {}

interface InputLoginProps {
  placeholder: string;
  icon: string;
  name: string;
  type: string;
  value: string;
  onChange: (text: any) => void;
}

const InputLogin: React.FC<InputLoginProps> = ({
  icon,
  name,
  type,
  placeholder,
  onChange,
  value,
  ...rest
}) => {
  return (
    <InputContainer {...rest}>
      <MaterialIcon name={icon} size={30} color="#FF1F26" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        name={name}
        required
      />
    </InputContainer>
  );
};

const LoginPage: React.FC<LoginPageProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  async function submit() {
    await signIn({ email, password });
    // setEmail("");
    // setPassword("");
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="ifbank logo" />

        <TitleApp>Painel de Administração</TitleApp>
      </LogoContainer>

      <FormBox>
        <FormTitle>Login</FormTitle>
        <form action="#">
          <InputLogin
            icon="email"
            placeholder="Email"
            name="email"
            type="text"
            value={email}
            onChange={setEmail}
          />
          <InputLogin
            icon="lock"
            placeholder="Senha"
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </form>
        <GenericButton borderRadius={8} text="Entre" onClick={submit} />
      </FormBox>
    </Container>
  );
};

export default LoginPage;
