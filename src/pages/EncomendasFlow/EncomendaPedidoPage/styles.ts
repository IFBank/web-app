import styled from "styled-components";

import GenericButton from "../../../components/GenericButton";
import BasePage from "../../../components/BasePage";

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
  display: flex;
  flex-direction: column;
`;

export const PedidoInfoContainer = styled.div`
  background: var(--linear-secondary);
  color: white;

  border-radius: 5px;

  justify-content: center;

  padding: 12px;

  margin-bottom: 30px;

  background: linear-gradient(
    90.28deg,
    #5e45cc 0.23%,
    #5e45cc 0.24%,
    #4250e3 99.74%
  );
  box-shadow: 0px 4px 4px #bfbfbf;
  border-radius: 10px;
`;

export const PedidoTitle = styled.p`
  text-align: center;
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 26px;
`;

export const ItemsContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 16px 32px;
  text-align: center;
  margin-bottom: 24px;

  font-family: Ubuntu;
  font-size: 24px;
  font-weight: 700;
`;

export const InfoPedidoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  > p {
    font-family: Mukta;
    font-size: 20px;
    font-weight: 400;
    > span {
      font-family: Mukta;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export const GenericButtonEncomendas = styled(GenericButton)`
  padding-left: 49px;
  padding-right: 49px;
`;

export const ConfirmConteiner = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
