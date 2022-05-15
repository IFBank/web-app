import React from "react";

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
  name,
  withdraw_date_formatted,
  price_formatted,
  gradient,
  ...rest
}) => {
  return (
    <Container backgroundColor={`--linear-${gradient}`} {...rest}>
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
