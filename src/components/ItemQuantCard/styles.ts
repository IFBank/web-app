import styled from "styled-components";

import MaterialIcon from "../../components/MaterialIcon";

interface IActionButtonTextProps{
  bgColor: string;
};

// COMPONENTES DE BASE
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  padding: 8px 16px;

  border: #32DC32 solid 2px;

  border-radius: 8px;

  img {
    width: 140px;
    height: 100px;
    background-color: black;
    border-radius: 10px;
  }
`;

export const ImageInfoContainer = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: center;

  flex-direction: column;

`;

export const InfoText = styled.p``;

export const ActionContainer = styled.div`
  display: flex;
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

  text-align: center;
`;

export const QuantText = styled.span`
  background-color: #CCC;
  border-bottom: black solid 2px;
  width: 16px;

  font-size: 20px;

  padding: 0px 10px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
