import React from "react";
import { ButtonPassPage } from "../../pages/EncomendasFlow/EncomendasPage/styles";

import { Container, IconButton } from "./styles";

interface ComponentProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Component: React.FC<ComponentProps> = ({
  onCancel,
  onConfirm,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <span>Confirmar? </span>
      <ButtonPassPage onClick={onCancel}>
        <IconButton
          bgColor="semantic-red"
          name="clear"
          size={40}
          color="white"
        />
      </ButtonPassPage>
      <ButtonPassPage onClick={onConfirm}>
        <IconButton bgColor="primary" name="check" size={40} color="white" />
      </ButtonPassPage>
    </Container>
  );
};

export default Component;
