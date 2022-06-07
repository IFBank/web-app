import React from "react";

import MaterialIcon from "../MaterialIcon";

import { Container } from "./styles";

interface TypeItemProps {
  type?: "FOOD" | "DRINK";
  setType?: (type: any) => void;
}

// TODO: Corrigir icone
// TODO: Estilizar select

const TypeItem: React.FC<TypeItemProps> = ({ setType, type, ...rest }) => {
  async function handleChange(e: any) {
    console.log(e.target.value);

    setType(e.target.value);
  }

  return (
    <Container {...rest}>
      <MaterialIcon name="format_list_bulleted" size={26} color="#32CD32" />

      <select defaultValue={type} onChange={handleChange} name="type" id="type">
        <option value="FOOD">Comida</option>
        <option value="DRINK">Bebida</option>
      </select>
    </Container>
  );
};

export default TypeItem;
