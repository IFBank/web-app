import React, { ChangeEventHandler } from "react";

import MaterialIcon from "../MaterialIcon";

import { Container, InputContainer } from "./styles";

interface BarraPesquisaProps {
  children?: React.ReactNode;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  search?: string;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = ({
  children = null,
  setSearch,
  search,
  ...rest
}) => {
  function setTextInput(event) {
    setSearch(event.target.value);
  }

  return (
    <Container {...rest}>
      <InputContainer>
        <MaterialIcon name="search" color="black" size={24} />
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={setTextInput}
        />
      </InputContainer>
      {children}
    </Container>
  );
};

export default BarraPesquisa;
