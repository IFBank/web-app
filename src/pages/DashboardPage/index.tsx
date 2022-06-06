import React from "react";

import BarraPesquisa from "../../components/BarraPesquisa";
import FilterSearch from "../../components/FilterSearch";

import TopTabBox from "../../components/TopTabBox";
import PedidoCardDashBoard from "../../components/PedidoCardDashBoard";

import { Container, HistoricoContainer } from "./styles";

interface DashboardPageProps {}

interface IDataTopTabBox {
  name: string;
  icon: string;
  text: string;
  Component: React.FC;
}

const Historico: React.FC = () => {
  return (
    <HistoricoContainer>
      <BarraPesquisa>
        <FilterSearch />
      </BarraPesquisa>

      <PedidoCardDashBoard />
    </HistoricoContainer>
  );
};

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const data: IDataTopTabBox[] = [
    {
      name: "historico",
      icon: "history",
      text: "Historico",
      Component: Historico,
    },
  ];

  return (
    <Container
      titleHeader="Dashboard"
      subTitleHeader="Encontre aqui informações úteis referentes aos pedidos e a movimentação de dinheiro"
    >
      <TopTabBox data={data} />
    </Container>
  );
};

export default DashboardPage;
