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
  ContainerClickStock,
} from "./styles";

interface ItemQuantCardProps {
  isEstoquePage?: boolean;
  item?: IShopItem;
  addToCart?: (item: ICartItem) => void;
  editQuant?: boolean;
  deleteItem?: (item_id: string) => void;
  editItem?: (item_id: string) => void;
}

const ItemQuantCard: React.FC<ItemQuantCardProps> = ({
  isEstoquePage = false,
  editQuant = true,
  item,
  addToCart,
  deleteItem,
  editItem,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [quantValue, setQuantValue] = useState<number>(
    isEstoquePage ? item.amount : 0
  );

  const handleChangeIsClickedState = () => {
    setIsClicked(isEstoquePage && !isClicked);
  };

  async function saveAmount() {
    await api.put(`/shop/admin/stock/${item.item_id}`, {
      amount: quantValue,
    });
    window.location.reload();
  }

  return (
    <Container isEstoquePage={false} isClicked={isClicked} {...rest}>
      <ContainerClickStock
        onClick={handleChangeIsClickedState}
        isEstoquePage={isEstoquePage}
        isClicked={isClicked}
      >
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
      </ContainerClickStock>

      {isClicked && (
        <DeleteEditContainer>
          <ButtonPassPage
            onClick={() => {
              deleteItem(item.item_id);
            }}
          >
            <ActionButtonIcon
              bgColor="semantic-red"
              name="delete"
              size={45}
              color="white"
            />
          </ButtonPassPage>
          <ButtonPassPage
            onClick={() => {
              editItem(item.item_id);
            }}
          >
            <ActionButtonIcon
              bgColor="primary"
              name="edit"
              size={45}
              color="white"
            />
          </ButtonPassPage>
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
                if (!isEstoquePage && quantValue >= item.amount) {
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
            onClick={
              isEstoquePage
                ? saveAmount
                : () => {
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
                  }
            }
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
