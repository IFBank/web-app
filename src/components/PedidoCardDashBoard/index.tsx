import React, { useState } from "react";

import ItemInfoCard from "./ItemInfoCard";

import {
  Container,
  PedidoInfo,
  ItemsContainer,
  PedidoTextSemiBold,
  PedidoTextRegular,
  MaterialIconStyled,
} from "./styles";

interface PedidoCardDashBoardProps {
  isEven?: boolean;
  hasBorderRTop?: boolean;
  hasBorderRBottom?: boolean;
}

interface ItemsPedidosProps {}

const ItemsPedidos: React.FC<ItemsPedidosProps> = ({ ...rest }) => {
  return (
    <ItemsContainer {...rest}>
      <ItemInfoCard />
      <ItemInfoCard />
      <ItemInfoCard />
      <ItemInfoCard />
    </ItemsContainer>
  );
};

const PedidoCardDashBoard: React.FC<PedidoCardDashBoardProps> = ({
  isEven = false,
  hasBorderRTop = true,
  hasBorderRBottom = false,
  ...rest
}) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <Container
      bgColor={isEven ? "primary" : "secondary"}
      hasBorderRBottom={hasBorderRBottom}
      hasBorderRTop={hasBorderRTop}
      {...rest}
    >
      <PedidoInfo>
        <PedidoTextSemiBold>Pedido {"XRT348"}</PedidoTextSemiBold>
        <PedidoTextRegular>Feito por: {"Êxodo Melo"}</PedidoTextRegular>
        <PedidoTextRegular>Data: {"24/01"}</PedidoTextRegular>
        <PedidoTextSemiBold>R$ {"9,50"}</PedidoTextSemiBold>
      </PedidoInfo>

      {showItems && <ItemsPedidos />}

      <MaterialIconStyled
        name={showItems ? "expand_less" : "expand_more"}
        color="white"
        size={20}
      />
    </Container>
  );
};

export default PedidoCardDashBoard;
