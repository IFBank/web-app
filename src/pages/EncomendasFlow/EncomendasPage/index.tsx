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
import { toast } from "react-toastify";

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

  const [loading, setLoading] = useState(true);

  let index = 1;

  React.useEffect(() => {
    if (!loading) {
      return;
    }

    async function getOrders() {
      const ordersToast = api
        .get(`/order/all`)
        .then((response) => {
          setOrders(response.data);
          console.log(response.data);

          if (response.data.length <= 0) {
            toast.info("Sem encomendas no momento");
          }
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(ordersToast, {
        pending: "Buscando pedidos...",
        success: "Busca finalizada!",
        error: "Algum erro encontrado...",
      });
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
          {!loading
            ? orders.map((order) => {
                if (search.trim() !== "") {
                  if (
                    !order.name.toUpperCase().includes(search.toUpperCase())
                  ) {
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
              })
            : null}
        </PedidosGrid>

        <ButtonPassPage>
          <MaterialIcon name="arrow_forward" size={26} color="black" />
        </ButtonPassPage>
      </Content>
    </Container>
  );
};

export default EncomendasPage;
