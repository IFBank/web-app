import React from "react";

import { Container, Img, TextContainer, Title, Info } from "./styles";

interface IItem {
  name: string;
  price: number;
  amount: number;
  avatar_url?: string;
}

const Component: React.FC<IItem> = ({
  name,
  price,
  amount,
  avatar_url,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Img src={avatar_url} />
      <TextContainer>
        <Title>{name}</Title>

        <Info>
          {" "}
          Quant: <span>{amount} unid.</span>{" "}
        </Info>
        <Info>
          {" "}
          Total:{" "}
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price * amount)}{" "}
          </span>{" "}
        </Info>
      </TextContainer>
    </Container>
  );
};

export default Component;
