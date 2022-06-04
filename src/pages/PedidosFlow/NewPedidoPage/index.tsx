import React, { useEffect, useState } from "react";

import BarraPesquisa from "../../../components/BarraPesquisa";
import MaterialIcon from "../../../components/MaterialIcon";
import ItemQuantCard from "../../../components/ItemQuantCard";

import { Container, BuyCircleButton, Content } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

interface NewPedidoPageProps {}

export interface ICartItem {
  item_id: string;
  amount: number;
}

export interface IShopItem {
  item_id: string;
  amount: number;
  item: IItem;
}

export interface IItem {
  name: string;
  price: number;
  type: string;
  avatar_url: string;
}

// TODO: Add controle dos items adicionados
// TODO: Imagem de item não encontrado
// TODO: DashedBoard com "Fim da listagem"

const NewPedidoPage: React.FC<NewPedidoPageProps> = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itensShop, setItensShop] = useState<IShopItem[]>();

  const navigate = useNavigate();

  async function addToCart(item: ICartItem) {
    if (item.amount <= 0) {
      return;
    }

    const item_id = item.item_id;

    let newItem = {
      [item_id]: item.amount,
    };

    const newCart = [];

    cart.map((itens) => {
      if (itens.item_id === item_id) {
        newItem = {
          [item_id]: item.amount + itens.amount,
        };
      } else {
        newItem = {
          [item_id]: item.amount,
        };
      }

      newCart.push(newItem);
      console.log(newCart);
    });

    setCart(newCart);
  }

  useEffect(() => {
    if (!loading) {
      return;
    }

    async function getItensShop() {
      const response = await api.get(`/shop/list`);

      if (!response.data) {
        navigate("/");
      }

      // let orderSumTotal = 0;
      // response.data.order_item.map(async (item) => {
      //   orderSumTotal += orderTotal + item.amount * item.item.price;
      // });

      setItensShop(response.data);
      setLoading(false);
    }

    getItensShop();
  }, []);

  return (
    <Container
      titleHeader="Pedidos"
      subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
      textCancelButton="Cancelar pedido"
    >
      <BarraPesquisa>
        <BuyCircleButton>
          <MaterialIcon color="white" size={28} name="shopping_cart" />
        </BuyCircleButton>
      </BarraPesquisa>

      <Content>
        {!loading
          ? itensShop.map((item) => (
              <ItemQuantCard
                key={item.item_id}
                item={item}
                addToCart={addToCart}
              />
            ))
          : null}
      </Content>
    </Container>
  );
};

export default NewPedidoPage;
