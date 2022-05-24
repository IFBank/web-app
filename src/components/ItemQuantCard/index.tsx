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

  DeleteEditContainer
} from "./styles";

interface ItemQuantCardProps {
  isEstoquePage?: boolean;
};

// TODO: Controle da quantidade

// TODO: Rever cursor. esta no card inteiro

const ItemQuantCard: React.FC<ItemQuantCardProps> = ({isEstoquePage=false, ... rest}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [quantValue, setQuantValue] = useState<number>(0);

  const handleChangeIsClickedState = () => {
    setIsClicked( isEstoquePage && !isClicked )
  }

  return (
    <Container isEstoquePage={isEstoquePage} isClicked={isClicked} { ... rest }>
      <ImageInfoContainer>
        <img src="" />

        <InfoContainer isClicked={isClicked}>
          <NameText>Nome</NameText>
          <ValueText>Valor</ValueText>
          <EstoqueText>Estoque</EstoqueText>
        </InfoContainer>
      </ImageInfoContainer>
      
      { isClicked && ( 
        <DeleteEditContainer>
          <ActionButtonIcon bgColor="semantic-red" name="delete" size={50} color="white" />
          <ActionButtonIcon bgColor="primary" name="edit" size={50} color="white" />
        </DeleteEditContainer> 
      )}

      <ActionContainer isClicked={isClicked}>
        <QuantContainer>
          <ActionButtonIcon bgColor="semantic-red" name="remove" size={30} color="white" />
          <QuantText>{quantValue}</QuantText>
          <ActionButtonIcon bgColor="primary" name="add" size={30} color="white" />
        </QuantContainer>

        <ActionButtonText bgColor="primary">
          { isEstoquePage ? "Salvar" : "Adicionar" }
        </ActionButtonText>

      </ActionContainer>
    </Container>
  );
};

export default ItemQuantCard;
