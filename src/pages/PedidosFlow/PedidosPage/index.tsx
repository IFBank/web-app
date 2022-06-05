/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import GenericButton from "../../../components/GenericButton";

import { Container } from "./styles";

import pedidosInitial from "../../../assets/pedidosInitial.png";
import { useNavigate } from "react-router-dom";

interface PedidosPageProps {}

const PedidosPage: React.FC<PedidosPageProps> = () => {
  // TODO: Corrigir texto do header
  // TODO: Implementar button

  const navigate = useNavigate();

  async function navigateToNewOrder() {
    navigate("/pedidos/new");
  }

  return (
    <Container
      titleHeader="Pedidos"
      subTitleHeader="Encontre aqui os pedidos requisitados pelo nosso aplicativo"
    >
      <GenericButton
        onClick={navigateToNewOrder}
        iconName="add_circle_outline"
        iconSize={34}
        text="Novo Pedido"
        borderRadius={30}
      />
      <img src={pedidosInitial} />
    </Container>
  );
};

export default PedidosPage;
