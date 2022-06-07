import React, { useEffect, useState } from "react";

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
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

interface NewItemPageProps {}

const NewItemPage: React.FC<NewItemPageProps> = () => {
  const { id_item: item_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [type, setType] = useState("FOOD");

  const navigate = useNavigate();

  async function editItem() {
    if (name.trim() === "") {
      toast.error("Precisa ter um nome!");
      return;
    }

    if (price <= 0.25) {
      toast.error("Preço precisa ser maior que R$0,25");
      return;
    }

    setLoadingEdit(true);
    const editItemToast = api
      .put(`/item/admin/edit/${item_id}`, {
        name,
        price: parseFloat(price.toString()),
        type,
        avatar_url:
          "https://img.itdg.com.br/tdg/images/recipes/000/098/564/333992/333992_original.jpg",
      })
      .finally(() => {
        setLoadingEdit(false);
        navigate("/estoque");
      });

    toast.promise(editItemToast, {
      pending: "Alterando item...",
      success: "Item alterado!",
      error: "Algum erro encontrado...",
    });
  }

  async function back() {
    navigate("/estoque");
  }

  useEffect(() => {
    if (!loading) {
      return;
    }

    async function getItem() {
      setLoadingEdit(true);
      const getItemToast = api
        .get(`/item/admin/get/${item_id}`)
        .then((response) => {
          if (!response.data) {
            navigate("/estoque");
          }

          setName(response.data.name);
          setPrice(response.data.price);
          setAvatarUrl(response.data.avatar_url);
          setType(response.data.type);
        })
        .finally(() => {
          setLoading(false);
          setLoadingEdit(false);
        });

      toast.promise(getItemToast, {
        pending: "Buscando informações...",
        success: "Busca finalizada!",
        error: "Algum erro encontrado...",
      });
    }

    getItem();
  }, []);

  return (
    <Container
      titleHeader="Cadastro de mercadoria"
      subTitleHeader="Preencha os campos e cadastre um produto."
      textCancelButton="Cancelar cadastro"
      onClickCancelButton={back}
      loading={loadingEdit}
    >
      {!loading ? (
        <FormStyled>
          <InputImage>
            <img src={avatarUrl} alt="" />
            <input type="file" hidden />
          </InputImage>

          <OutrosInputs>
            <GenericInput
              gradient="primary"
              textLabel="Nome"
              name="name"
              defaultValue={name}
              setTextInput={setName}
            />

            <InputDuplo>
              <GenericInput
                gradient="primary"
                textLabel="Preço"
                name="price"
                inputType="number"
                placeholder="0,00"
                textSide="R$"
                defaultValue={price}
                setTextInput={setPrice}
              />
              <TypeItem type={type as "FOOD" | "DRINK"} setType={setType} />
            </InputDuplo>
          </OutrosInputs>
        </FormStyled>
      ) : null}

      <ButtonContainer>
        <GenericButton
          text="Alterar produto"
          borderRadius={30}
          iconName="create"
          iconSize={36}
          onClick={editItem}
          loading={loadingEdit}
        />
      </ButtonContainer>
    </Container>
  );
};

export default NewItemPage;
