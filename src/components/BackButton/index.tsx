import React from "react";

import MaterialIcon from "../MaterialIcon";

import { Container } from "./styles";

interface BackButtonProps {
  onBack?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack, ...rest }) => {
  return (
    <Container onClick={onBack} {...rest}>
      <MaterialIcon name="arrow_back" color="black" size={36} />
    </Container>
  );
};

export default BackButton;
