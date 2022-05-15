import React, { useState } from "react";

import MaterialIcon from "../../components/MaterialIcon";

import {
  Container,
  InfoContainer,
  ActionContainer,
  QuantContainer,
  ActionButton,
  QuantText,
} from "./styles";

interface PedidoQuantCardProps {}

const PedidoQuantCard: React.FC<PedidoQuantCardProps> = () => {
  const [quantValue, setQuantValue] = useState<number>(0);

  return (
    <Container>
      <img src="" />

      <InfoContainer>
        <p>Nome</p>
        <p>Valor</p>
        <p>Estoque</p>
      </InfoContainer>

      {/* <ActionContainer>
				<QuantContainer>
					<ActionButton backgroundColor="--linear-semantic-red">
						<MaterialIcon name="task" size="30" color="white" />
					</ActionButton>

					<QuantText>{quantValue}</QuantText>

					<ActionButton backgroundColor="--linear-primary">
						<MaterialIcon name="task" size="30" color="white" />
					</ActionButton>
				</QuantContainer>

				<ActionButton backgroundColor="--linear-primary">
					Adicionar
				</ActionButton>

			</ActionContainer> */}
    </Container>
  );
};

export default PedidoQuantCard;
