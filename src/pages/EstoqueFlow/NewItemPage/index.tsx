import React, { useState } from "react";

import GenericInput from "../../../components/GenericInput";
import GenericButton from "../../../components/GenericButton";

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
import { toast } from "react-toastify";

interface NewItemPageProps {}

const NewItemPage: React.FC<NewItemPageProps> = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [stock, setStock] = useState(0);
  const [loadingCreate, setLoadingCreate] = useState(false);

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

    setLoadingCreate(true);
    const createToast = api
      .post("/item/create", {
        name,
        price: parseFloat(price.toString()),
        type: "FOOD",
        avatar_url:
          "https://pubimg.band.uol.com.br/files/2c0933a3fb3b6946e074.png",
      })
      .then(() => {
        navigate("/estoque");
      })
      .finally(() => {
        setLoadingCreate(false);
      });

    toast.promise(createToast, {
      pending: "Criando item...",
      success: "Criação finalizada!",
      error: "Algum erro encontrado...",
    });
  }

  return (
    <Container
      titleHeader="Cadastro de mercadoria"
      subTitleHeader="Preencha os campos e cadastre um produto."
      textCancelButton="Cancelar cadastro"
      onClickCancelButton={back}
      loading={loadingCreate}
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
            <GenericInput
              textLabel="Estoque"
              name="quant"
              inputType="number"
              placeholder="0"
              textSide="unid."
              sideOnRight={false}
              setTextInput={setStock}
            />
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
          loading={loadingCreate}
        />
      </ButtonContainer>
    </Container>
  );
};

export default NewItemPage;
