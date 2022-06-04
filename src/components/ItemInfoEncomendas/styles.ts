import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 16px;
  flex-basis: 50%;
  border: #32dc32 solid 2px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 140px;
  height: 100px;

  background-color: black;
  margin-right: 12px;

  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: flex;

  > * {
    flex: 1;
  }

  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: Mukta;
  font-size: 20px;
  font-weight: 700;
`;

export const Info = styled.p`
  font-family: Mukta;
  font-size: 18px;
  font-weight: 600;

  > span {
    font-family: Mukta;
    font-size: 18px;
    font-weight: 400;
  }
`;
