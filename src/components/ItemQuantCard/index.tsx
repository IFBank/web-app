import React, { useState } from "react";

import {
  Container,
  InfoContainer,
  ActionContainer,
  QuantContainer,
  ImageInfoContainer,
  ActionButtonIcon,
  ActionButtonText,
  NameText,
  ValueText,
  EstoqueText,
  QuantText,
} from "./styles";

interface PedidoQuantCardProps {};

// TODO: Controle da quantidade

// TODO: Versão estoque controlado por prop

const PedidoQuantCard: React.FC<PedidoQuantCardProps> = () => {
  const [quantValue, setQuantValue] = useState<number>(0);

  return (
    <Container>
      <ImageInfoContainer>
        <img src="" />

        <InfoContainer>
          <NameText>Nome</NameText>
          <ValueText>Valor</ValueText>
          <EstoqueText>Estoque</EstoqueText>
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
