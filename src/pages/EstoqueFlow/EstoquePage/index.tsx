import React, { useEffect, useState } from "react";

import ItemQuantCard from "../../../components/ItemQuantCard";
import BarraPesquisa from "../../../components/BarraPesquisa";
import FilterSearch from "../../../components/FilterSearch";

import GenericButton from "../../../components/GenericButton";

import { Container, ButtonsContainer, ItemsContainer } from "./styles";
import { api } from "../../../services/api";
import { IItem, IShopItem } from "../../PedidosFlow/NewPedidoPage";
import { useNavigate } from "react-router-dom";

interface EstoquePageProps {}

interface IShopItems {
  item_id: string;
  amount: number;
  item: IItem;
}

const EstoquePage: React.FC<EstoquePageProps> = () => {
  const [shopItems, setShopItems] = useState<IShopItems[]>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function createNewItem() {
    navigate("/estoque/new");
  }

  async function deleteItem(item_id: string) {
    await api.delete(`/item/admin/delete/${item_id}`);
    window.location.reload();
  }

  async function editItem(item_id: string) {
    navigate(`/estoque/edit/${item_id}`);
  }

  useEffect(() => {
    if (!loading) {
      return;
    }

    async function getItems() {
      const { data } = await api.get("/shop/list");
      setShopItems(data);
      setLoading(false);
    }

    getItems();
  }, []);

  return (
    <Container
      titleHeader="Estoque"
      subTitleHeader="Trabalhe aqui com as funcionalidades de criação, exclusão e atualização das mercadorias."
    >
      <ButtonsContainer>
        {/*<GenericButton
          text="Balanço geral"
          iconSize={30}
          iconName="table_chart"
          borderRadius={300}
        />*/}
        <GenericButton
          text="Cadastrar produto"
          iconSize={30}
          iconName="add_circle_outline"
          borderRadius={300}
          onClick={createNewItem}
        />
      </ButtonsContainer>

      <BarraPesquisa setSearch={setSearch} search={search}>
        <FilterSearch />
      </BarraPesquisa>

      <ItemsContainer>
        {loading
          ? null
          : shopItems.map((itemShop) => {
              if (search.trim() !== "") {
                if (
                  !itemShop.item.name
                    .toUpperCase()
                    .includes(search.toUpperCase())
                ) {
                  return null;
                }
              }

              return (
                <ItemQuantCard
                  isEstoquePage
                  item={{
                    amount: itemShop.amount,
                    item_id: itemShop.item_id,
                    item: itemShop.item,
                  }}
                  key={itemShop.item_id}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              );
            })}
      </ItemsContainer>
    </Container>
  );
};

export default EstoquePage;
