import React, { useState } from "react";

import BarraPesquisa from "../../../components/BarraPesquisa";
import MaterialIcon from "../../../components/MaterialIcon";

import {
  Container,
  PageIndicator,
  Content,
  ButtonPassPage,
  PedidosGrid,
} from "./styles";
import { api } from "../../../services/api";
import PedidoCard from "../../../components/PedidoPin";
import moment from "moment-timezone";

interface EncomendasPageProps {}

interface IItem {
  price: number;
}

interface IOrderItem {
  amount: number;
  item: IItem;
}

interface IOrders {
  id: string;
  name: string;
  withdraw_date: string;
  order_item: IOrderItem[];
}

const EncomendasPage: React.FC<EncomendasPageProps> = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [search, setSearch] = useState("");

  let index = 1;

  React.useEffect(() => {
    async function getOrders() {
      const response = await api.get(`/order/all`);
      setOrders(response.data);
    }

    getOrders();
  }, []);

  return (
    <Container
      titleHeader="Encomendas"
      subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
    >
      <BarraPesquisa setSearch={setSearch} search={search}>
        <PageIndicator>1/2</PageIndicator>
      </BarraPesquisa>

      <Content>
        <ButtonPassPage>
          <MaterialIcon name="arrow_back" size={26} color="black" />
        </ButtonPassPage>
        {/*@ts-ignore*/}
        <PedidosGrid>
          {orders.map((order) => {
            if (search.trim() !== "") {
              if (!order.name.toUpperCase().includes(search.toUpperCase())) {
                console.log(search, order.name);

                return null;
              }
            }

            index += 1;

            let gradient = "primary";

            if (index % 2 === 1) {
              gradient = "secondary";
            }

            let total = 0;

            order.order_item.map((currentItem) => {
              total += currentItem.amount * currentItem.item.price;
            });

            const dateFormatted = moment
              .tz(order.withdraw_date, "America/Campo_Grande")
              .format("HH:mm:ss");

            return (
              <PedidoCard
                key={order.id}
                id={order.id}
                gradient={gradient as "primary" | "secondary"}
                name={order.name.toUpperCase()}
                price_formatted={new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
                withdraw_date_formatted={dateFormatted}
              />
            );
          })}
        </PedidosGrid>

        <ButtonPassPage>
          <MaterialIcon name="arrow_forward" size={26} color="black" />
        </ButtonPassPage>
      </Content>
    </Container>
  );
};

export default EncomendasPage;
