import styled from "styled-components";

import BasePage from "../../../components/BasePage";

// COMPONENTES DE BASE
export const Container = styled(BasePage)`
  display: flex;
  flex-direction: column;
`;

export const PageIndicator = styled.span`
  font-family: Mukta;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.5;
`;

export const ButtonPassPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
`;

export const PedidosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;

  height: min-content;
  flex: 1;
  padding: 0 12px;
`;
