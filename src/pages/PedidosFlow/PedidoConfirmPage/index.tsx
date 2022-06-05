import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BackButton from "../../../components/BackButton";

import ConfirmComponent from "../../../components/ConfirmComponent";
import GenericButton from "../../../components/GenericButton";

import ItemQuantCard from "../../../components/ItemQuantCard";
import { api } from "../../../services/api";
import { ICartItem, IShopItem } from "../NewPedidoPage";

import {
  Container,
  PedidoInfoContainer,
  ItemsContainer,
  CarrinhoText,
  TotalText,
} from "./styles";

interface PedidoConfirmPageProps {}

// TODO: DashedBoard com MaterialIcon de shop (veja icones)

const PedidoConfirmPage: React.FC<PedidoConfirmPageProps> = () => {
  const [confirm, setConfirm] = useState(false);
  const [total, setTotal] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();

  async function cancelOrder() {
    navigate("/pedidos");
  }

  async function backPage() {
    navigate("/pedidos/new");
  }

  async function changeConfirmOrder() {
    setConfirm(!confirm);
  }

  async function confirmOrder() {
    const itens: Object = {};

    Object.entries(state).map(([key, value]) => {
      const itemAssign = {
        [Object.keys(value)[0]]: Object.values(value)[0]["amount"],
      };
      Object.assign(itens, itemAssign);
    });

    await api
      .post("/order/admin/create", {
        itens,
      })
      .finally(() => {
        cancelOrder();
      });
  }

  useEffect(() => {
    const cart = state as Array<any>;
    if (cart.length <= 0) {
      backPage();
    }

    let orderSumTotal = 0;
    Object.entries(state).map(([key, value]) => {
      orderSumTotal +=
        Object.values(value)[0]["amount"] *
        Object.values(value)[0]["item"]["price"];
    });

    setTotal(orderSumTotal);
  }, []);

  return (
    <Container
      titleHeader="Pedidos"
      subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
      textCancelButton="Cancelar pedido"
      onClickCancelButton={cancelOrder}
    >
      <BackButton onBack={backPage} />

      <PedidoInfoContainer>
        <CarrinhoText>
          Carrinho <span>#Pedido {"novo"}</span>
        </CarrinhoText>

        <TotalText>
          Total:{" "}
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </span>
        </TotalText>

        {!confirm ? (
          <GenericButton
            text="Finalizar pedido"
            iconName="check_circle_outline"
            iconSize={30}
            onClick={changeConfirmOrder}
          />
        ) : (
          <ConfirmComponent
            onCancel={changeConfirmOrder}
            onConfirm={confirmOrder}
          />
        )}
      </PedidoInfoContainer>
      <ItemsContainer>
        {Object.entries(state).map(([key, value]) => {
          return (
            <ItemQuantCard
              key={Object.keys(value)[0]}
              item={Object.values(value)[0] as IShopItem}
              editQuant={false}
            />
          );
        })}
      </ItemsContainer>
    </Container>
  );
};

export default PedidoConfirmPage;
