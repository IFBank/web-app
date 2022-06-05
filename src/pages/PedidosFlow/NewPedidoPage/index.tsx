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
  item: IItem;
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
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  async function backPage() {
    navigate("/pedidos");
  }

  async function addToCart(item: ICartItem) {
    if (item.amount <= 0) {
      return;
    }

    const item_id = item.item_id;

    let newItem = {
      [item_id]: {
        amount: item.amount,
        item: {
          avatar_url: item.item.avatar_url,
          name: item.item.name,
          price: item.item.price,
        },
      },
    };

    const itemFound = cart.some((element) => {
      if (Object.keys(element)[0] === item.item_id) {
        return true;
      }

      return false;
    });

    if (!itemFound) {
      setCart([...cart, newItem]);
      return;
    }

    const newCart = cart.map((itemCart) => {
      if (Object.keys(itemCart)[0] === item.item_id) {
        itemCart = {
          [item_id]: {
            amount:
              (Object.values(itemCart)[0]["amount"] as number) + item.amount,
            item: {
              avatar_url: Object.values(itemCart)[0]["avatar_url"],
              name: Object.values(itemCart)[0]["name"],
              price: Object.values(itemCart)[0]["price"],
            },
          },
        };
      }

      return itemCart;
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

      setItensShop(response.data);
      setLoading(false);
    }

    getItensShop();
  }, []);

  function navigateToConfirmOrder() {
    navigate("/pedidos/confirm", { state: cart });
  }

  return (
    <Container
      titleHeader="Pedidos"
      subTitleHeader="Crie aqui os pedidos requisitados pessoalmente"
      textCancelButton="Cancelar pedido"
      onClickCancelButton={backPage}
    >
      <BarraPesquisa setSearch={setSearch} search={search}>
        <BuyCircleButton>
          <MaterialIcon
            navigateToConfirmOrder={navigateToConfirmOrder}
            color="white"
            size={28}
            name="shopping_cart"
          />
        </BuyCircleButton>
      </BarraPesquisa>

      <Content>
        {!loading
          ? itensShop.map((item) => {
              if (item.amount <= 0) {
                return null;
              }

              if (search.trim() !== "") {
                if (
                  !item.item.name.toUpperCase().includes(search.toUpperCase())
                ) {
                  return null;
                }
              }

              return (
                <ItemQuantCard
                  key={item.item_id}
                  item={item}
                  addToCart={addToCart}
                />
              );
            })
          : null}
      </Content>
    </Container>
  );
};

export default NewPedidoPage;
