import React from "react";
import { ButtonPassPage } from "../../pages/EncomendasFlow/EncomendasPage/styles";

import { Container, IconButton } from "./styles";

interface ComponentProps {
  onCancel?: () => void;
  onConfirm?: () => void;
  loading?: boolean;
}

const Component: React.FC<ComponentProps> = ({
  onCancel,
  onConfirm,
  loading = false,
  ...rest
}) => {
  return (
    <Container
      style={{
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "default" : "pointer",
      }}
      {...rest}
    >
      <span>Confirmar? </span>
      <ButtonPassPage
        style={{
          cursor: loading ? "default" : "pointer",
        }}
        onClick={loading ? null : onCancel}
      >
        <IconButton
          bgColor="semantic-red"
          name="clear"
          size={40}
          color="white"
        />
      </ButtonPassPage>
      <ButtonPassPage
        style={{
          cursor: loading ? "default" : "pointer",
        }}
        onClick={loading ? null : onConfirm}
      >
        <IconButton bgColor="primary" name="check" size={40} color="white" />
      </ButtonPassPage>
    </Container>
  );
};

export default Component;
