import React, { useState } from "react";

import GenericInput from "../../../components/GenericInput";
import GenericButton from "../../../components/GenericButton";
import TypeItem from "../../../components/TypeItem";

import {
  Container,
  InputImage,
  FormStyled,
  OutrosInputs,
  InputDuplo,
  ButtonContainer,
} from "./styles";

import addImageItem from "../../../assets/addImageItem.png";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface NewItemPageProps {}

const NewItemPage: React.FC<NewItemPageProps> = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  async function back() {
    navigate("/estoque");
  }

  async function createItem() {
    if (name.trim() === "") {
      return;
    }

    if (price <= 0.25) {
      return;
    }

    if (stock < 0) {
      return;
    }

    await api.post("/item/create", {
      name,
      price: parseFloat(price.toString()),
      type: "DRINK",
      avatar_url:
        "https://www.zappas.com.br/wp-content/uploads/2020/04/Suco-de-Laranja-1.jpg",
    });

    navigate("/estoque");
  }

  return (
    <Container
      titleHeader="Cadastro de mercadoria"
      subTitleHeader="Preencha os campos e cadastre um produto."
      textCancelButton="Cancelar cadastro"
      onClickCancelButton={back}
    >
      <FormStyled>
        <InputImage>
          <img src={addImageItem} alt="" />
          <input type="file" hidden />
        </InputImage>

        <OutrosInputs>
          <GenericInput
            textLabel="Nome"
            name="name"
            placeholder="Pastel de frango"
            setTextInput={setName}
          />

          <InputDuplo>
            <GenericInput
              textLabel="Preço"
              name="price"
              inputType="number"
              placeholder="0,00"
              textSide="R$"
              setTextInput={setPrice}
            />
            <TypeItem />
          </InputDuplo>
        </OutrosInputs>
      </FormStyled>

      <ButtonContainer>
        <GenericButton
          text="Cadastrar produto"
          borderRadius={30}
          iconName="add"
          iconSize={36}
          onClick={createItem}
        />
      </ButtonContainer>
    </Container>
  );
};

export default NewItemPage;
