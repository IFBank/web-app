import styled from "styled-components";

import MaterialIcon from "../../components/MaterialIcon";

interface IActionButtonTextProps{
  bgColor: string;
};


interface IChanceOnClickComponentsProps{
  isClicked: boolean;
};

interface IContainerProps{
  isEstoquePage: boolean;
};

// COMPONENTES DE BASE
export const Container = styled.div<IContainerProps & IChanceOnClickComponentsProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  ${ ({isEstoquePage}) => isEstoquePage && "cursor: pointer;"}
  ${ ({isClicked}) => isClicked && "background: var(--linear-secondary);"}

  padding: 12px 18px;

  border: #32DC32 solid 2px;
  ${ ({isClicked}) => isClicked && "border: none;"}

  border-radius: 8px;

  img {
    width: 140px;
    height: 100px;
    background-color: black;
    border-radius: 10px;
  }
`;

export const DeleteEditContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  > * {
    margin-left: 24px;
  }
`;

export const ImageInfoContainer = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div<IChanceOnClickComponentsProps>`
  margin-left: 12px;
  display: flex;
  justify-content: flex-start;

  flex-direction: column;

  color: ${({isClicked}) => isClicked ? "white" : "black"};

`;

export const NameText = styled.p`
  font-family: Mukta;
  font-size: 24px;
  font-weight: 700;
`;

export const ValueText = styled.p`
  font-family: Mukta;
  font-size: 16px;
  font-weight: 400;
  color: #32CD32;
`;

export const EstoqueText = styled.p`
  font-family: Mukta;
  font-size: 17px;
  font-weight: 400;
`;

export const ActionContainer = styled.div<IChanceOnClickComponentsProps>`
  display: ${({isClicked}) => isClicked ? "none" : "flex"};
  flex-direction: column;

  width: 100px;
`;

export const QuantContainer = styled.div`
  display: flex;

  justify-content: space-between;
  flex: 1;

  margin-bottom: 8px;
`;

export const ActionButtonIcon = styled(MaterialIcon)`
  background: ${ ({bgColor})=> `var( --linear-${bgColor} )`};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 10px;

  border-radius: 5px; 
`;

export const ActionButtonText = styled.div<IActionButtonTextProps>`
  color: white;
  background: ${ ({bgColor})=> `var( --linear-${bgColor} )`};
  cursor: pointer;
  border-radius: 5px; 
  padding: 4px 8px;

  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 700;

  text-align: center;
`;

export const QuantText = styled.span`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #C4C4C44D;

  width: 16px;

  font-size: 20px;

  margin: 0 8px;

  padding: 0px 10px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
