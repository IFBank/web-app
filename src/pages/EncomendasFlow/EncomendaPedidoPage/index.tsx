import React, { useState } from "react";

import BackButton from "../../../components/BackButton";

import ItemInfoEncomendas from "../../../components/ItemInfoEncomendas";
import ConfirmComponent from "../../../components/ConfirmComponent";

import moment from "moment-timezone";

import {
  Container,
  PedidoInfoContainer,
  PedidoTitle,
  InfoPedidoContainer,
  ItemsContainer,
  GenericButtonEncomendas,
  ConfirmConteiner,
} from "./styles";
import { api } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

interface EncomendaPedidoPageProps {}

interface IItem {
  id: string;
  price: number;
  avatar_url: string;
  name: string;
}

interface IOrderItem {
  amount: number;
  item: IItem;
}

interface IOrderWallet {
  user: {
    name: string;
  };
}

interface IOrder {
  name: string;
  withdraw_date: string;
  order_item: IOrderItem[];
  wallet: IOrderWallet;
}

const EncomendaPedidoPage: React.FC<EncomendaPedidoPageProps> = () => {
  const [confirmPedido, setConfirmPedido] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const [loading, setLoading] = useState(true);
  const { id_pedido: order_id } = useParams();

  const navigate = useNavigate();

  async function cancelOrder() {
    navigate("/encomendas");
  }

  async function prepareConfirmOrder() {
    setConfirmPedido(!confirmPedido);
  }

  async function confirmOrder() {
    await api.get(`/order/admin/finish/${order_id}`);
    navigate("/encomendas");
  }

  React.useEffect(() => {
    if (!loading) {
      return;
    }

    async function getOrders() {
      const response = await api.get(`/order/${order_id}`);

      if (!response.data) {
        navigate("/");
      }

      let orderSumTotal = 0;
      response.data.order_item.map(async (item) => {
        orderSumTotal += orderTotal + item.amount * item.item.price;
      });

      setOrder(response.data);
      setOrderTotal(orderSumTotal);
      setLoading(false);
    }

    getOrders();
  }, []);

  return (
    <Container
      titleHeader="Encomendas"
      subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
    >
      <BackButton onBack={cancelOrder} />

      {!loading ? (
        <>
          <PedidoInfoContainer>
            <PedidoTitle>{order.name.toUpperCase()}</PedidoTitle>
            <InfoPedidoContainer>
              <p>
                {" "}
                Feito por: <span>{order.wallet.user.name}</span>
              </p>
              <p>
                {" "}
                Vencimento:{" "}
                <span>
                  {moment
                    .tz(order.withdraw_date, "America/Campo_Grande")
                    .format("HH:mm:ss")}
                </span>
              </p>
              <p>
                {" "}
                Total:
                <span>
                  {" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(orderTotal)}
                </span>
              </p>
            </InfoPedidoContainer>
          </PedidoInfoContainer>
          <ItemsContainer>
            {order.order_item.map((item) => (
              <ItemInfoEncomendas
                name={item.item.name}
                amount={item.amount}
                price={item.item.price}
                key={item.item.id}
                avatar_url={item.item.avatar_url}
              />
            ))}
          </ItemsContainer>

          <ConfirmConteiner>
            {!confirmPedido ? (
              <>
                <GenericButtonEncomendas
                  onClick={cancelOrder}
                  text="Cancelar"
                  gradient="semantic-red"
                  iconName="highlight_off"
                />
                <GenericButtonEncomendas
                  onClick={prepareConfirmOrder}
                  text="Confirmar"
                  iconName="check_circle_outline"
                />
              </>
            ) : (
              <ConfirmComponent
                onCancel={prepareConfirmOrder}
                onConfirm={confirmOrder}
              />
            )}
          </ConfirmConteiner>
        </>
      ) : null}
    </Container>
  );
};

export default EncomendaPedidoPage;
