import React from "react";
import { useNavigate } from "react-router-dom";

import LeadingText from "../LeadingText";

import {
  PinContainer,
  PinOuterCircle,
  PinInnerCircle,
  Container,
  PedidoTitle,
  InfoContainer,
  PedidoVencimentoText,
} from "./styles";

interface IOrderProps {
  id: string;
  name: string;
  withdraw_date_formatted: string;
  price_formatted: string;
  gradient: "primary" | "secondary";
}

const Pin: React.FC = () => {
  return (
    <PinContainer>
      <PinOuterCircle />
      <PinInnerCircle />
    </PinContainer>
  );
};

const PedidoCard: React.FC<IOrderProps> = ({
  id,
  name,
  withdraw_date_formatted,
  price_formatted,
  gradient,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/encomendas/${id}`);
      }}
      backgroundColor={`--linear-${gradient}`}
      {...rest}
    >
      <Pin />
      <PedidoTitle>Pedido {name}</PedidoTitle>

      <InfoContainer>
        <LeadingText
          name="Valor"
          valueString={price_formatted}
          fontColor="white"
        />
        <PedidoVencimentoText>
          Vencimento: <span>{withdraw_date_formatted}</span>
        </PedidoVencimentoText>
      </InfoContainer>
    </Container>
  );
};

export default PedidoCard;
