/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPassPage } from "../../pages/EncomendasFlow/EncomendasPage/styles";
import {
  ICartItem,
  IItem,
  IShopItem,
} from "../../pages/PedidosFlow/NewPedidoPage";
import { api } from "../../services/api";

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
  DeleteEditContainer,
} from "./styles";

interface ItemQuantCardProps {
  isEstoquePage?: boolean;
  item?: IShopItem;
  addToCart?: (item: ICartItem) => void;
  editQuant?: boolean;
}

// TODO: Controle da quantidade

// TODO: Rever cursor. esta no card inteiro

const ItemQuantCard: React.FC<ItemQuantCardProps> = ({
  isEstoquePage = false,
  editQuant = true,
  item,
  addToCart,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [quantValue, setQuantValue] = useState<number>(0);

  const handleChangeIsClickedState = () => {
    setIsClicked(isEstoquePage && !isClicked);
  };

  return (
    <Container isEstoquePage={isEstoquePage} isClicked={isClicked} {...rest}>
      <ImageInfoContainer>
        <img src={item.item.avatar_url} />
        <InfoContainer isClicked={isClicked}>
          <NameText>{item.item.name}</NameText>
          <ValueText>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.item.price)}
          </ValueText>
          <EstoqueText>{item.amount} unid.</EstoqueText>
        </InfoContainer>
      </ImageInfoContainer>

      {isClicked && (
        <DeleteEditContainer>
          <ActionButtonIcon
            bgColor="semantic-red"
            name="delete"
            size={50}
            color="white"
          />
          <ActionButtonIcon
            bgColor="primary"
            name="edit"
            size={50}
            color="white"
          />
        </DeleteEditContainer>
      )}

      {editQuant ? (
        <ActionContainer isClicked={isClicked}>
          <QuantContainer>
            <ButtonPassPage
              onClick={() => {
                if (quantValue <= 0) {
                  return;
                }
                setQuantValue(quantValue - 1);
              }}
            >
              <ActionButtonIcon
                bgColor="semantic-red"
                name="remove"
                size={30}
                color="white"
              />
            </ButtonPassPage>
            <QuantText>{quantValue}</QuantText>
            <ButtonPassPage
              onClick={() => {
                if (quantValue >= item.amount) {
                  return;
                }

                setQuantValue(quantValue + 1);
              }}
            >
              <ActionButtonIcon
                bgColor="primary"
                name="add"
                size={30}
                color="white"
              />
            </ButtonPassPage>
          </QuantContainer>
          <ActionButtonText
            onClick={() => {
              addToCart({
                item_id: item.item_id,
                amount: quantValue,
                item: {
                  avatar_url: item.item.avatar_url,
                  name: item.item.name,
                  price: item.item.price,
                  type: item.item.type,
                },
              });
            }}
            bgColor="primary"
          >
            {isEstoquePage ? "Salvar" : "Adicionar"}
          </ActionButtonText>
        </ActionContainer>
      ) : null}
    </Container>
  );
};

export default ItemQuantCard;
