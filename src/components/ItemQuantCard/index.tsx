import React, { useState } from "react";

import {
  Container,
  InfoContainer,
  ActionContainer,
  QuantContainer,
  ImageInfoContainer,
  ActionButtonIcon,
  ActionButtonText,
  QuantText,
} from "./styles";

interface PedidoQuantCardProps {};

const PedidoQuantCard: React.FC<PedidoQuantCardProps> = () => {
  const [quantValue, setQuantValue] = useState<number>(0);

  // TODO: consertar estilização dos textos.

  return (
    <Container>
      <ImageInfoContainer>
        <img src="" />

        <InfoContainer>
          <p>Nome</p>
          <p>Valor</p>
          <p>Estoque</p>
        </InfoContainer>
      </ImageInfoContainer>
      

      <ActionContainer>
        <QuantContainer>
          <ActionButtonIcon bgColor="semantic-red" name="task" size={30} color="white" />
          <QuantText>{quantValue}</QuantText>
          <ActionButtonIcon bgColor="primary" name="add" size={30} color="white" />
        </QuantContainer>

        <ActionButtonText bgColor="primary">
          Adicionar
        </ActionButtonText>

      </ActionContainer>
    </Container>
  );
};

export default PedidoQuantCard;
