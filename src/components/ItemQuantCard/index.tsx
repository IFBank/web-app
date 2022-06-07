/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  addToCart?: (item: ICartItem, limitItemAmount: number) => void;
  editQuant?: boolean;
  deleteItem?: (item_id: string) => void;
  editItem?: (item_id: string) => void;
  loadingDelete?: boolean;
}

const ItemQuantCard: React.FC<ItemQuantCardProps> = ({
  isEstoquePage = false,
  editQuant = true,
  item,
  addToCart,
  deleteItem,
  editItem,
  loadingDelete,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [quantValue, setQuantValue] = useState<number>(
    isEstoquePage ? item.amount : 0
  );
  const [unidQuant, setUnidQuant] = useState(item.amount);
  const [loadingAmount, setLoadingAmount] = useState(false);

  const handleChangeIsClickedState = () => {
    setIsClicked(isEstoquePage && !isClicked);
  };

  async function saveAmount() {
    if (quantValue === unidQuant) {
      toast.error("Item já possui essa quantia");
      return;
    }
    setLoadingAmount(true);

    const saveAmountToast = api
      .put(`/shop/admin/stock/${item.item_id}`, {
        amount: quantValue,
      })
      .then(() => {
        setUnidQuant(quantValue);
      })
      .finally(() => {
        setLoadingAmount(false);
      });

    toast.promise(saveAmountToast, {
      pending: "Salvando alteração...",
      success: "Alteração salva!",
      error: "Algum erro encontrado...",
    });
  }

  return (
    <Container
      style={{
        opacity: loadingAmount ? 0.5 : 1,
      }}
      isEstoquePage={false}
      isClicked={!loadingAmount && isClicked}
      {...rest}
    >
      <ContainerClickStock
        onClick={!loadingDelete && !loadingAmount && handleChangeIsClickedState}
        isEstoquePage={isEstoquePage}
        isClicked={!loadingAmount && isClicked}
      >
        <ImageInfoContainer>
          <img src={item.item.avatar_url} />
          <InfoContainer isClicked={!loadingAmount && isClicked}>
            <NameText>{item.item.name}</NameText>
            <ValueText>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.item.price)}
            </ValueText>
            <EstoqueText>{unidQuant} unid.</EstoqueText>
          </InfoContainer>
        </ImageInfoContainer>
      </ContainerClickStock>

      {!loadingAmount && isClicked && (
        <DeleteEditContainer
          style={{
            opacity: loadingDelete ? 0.5 : 1,
          }}
        >
          <ButtonPassPage
            onClick={
              loadingDelete
                ? null
                : () => {
                    deleteItem(item.item_id);
                  }
            }
          >
            <ActionButtonIcon
              bgColor="semantic-red"
              name="delete"
              size={45}
              color="white"
            />
          </ButtonPassPage>
          <ButtonPassPage
            onClick={
              loadingDelete
                ? null
                : () => {
                    editItem(item.item_id);
                  }
            }
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

      {!loadingAmount && editQuant ? (
        <ActionContainer isClicked={!loadingAmount && isClicked}>
          <QuantContainer>
            <ButtonPassPage
              onClick={() => {
                if (quantValue <= 0) {
                  toast.info("Não pode ser menor que 0");
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
                if (!isEstoquePage && quantValue >= unidQuant) {
                  toast.info(`Limite máximo de unidades`);
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
                    addToCart(
                      {
                        item_id: item.item_id,
                        amount: quantValue,
                        item: {
                          avatar_url: item.item.avatar_url,
                          name: item.item.name,
                          price: item.item.price,
                          type: item.item.type,
                        },
                      },
                      item.amount
                    );
                    if (
                      unidQuant > 0 &&
                      unidQuant - quantValue <= item.amount
                    ) {
                      setQuantValue(0);
                      setUnidQuant(unidQuant - quantValue);
                    }
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
