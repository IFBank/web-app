import React from "react";

import { Container, MaterialIconStyled } from "./styles";

interface GenericButtonProps {
  gradient?: string;
  borderRadius?: number;
  text?: string;
  fontColor?: string;
  iconName?: string;
  iconSize?: number;
  onClick?: () => {};
}

const GenericButton: React.FC<GenericButtonProps> = ({
  gradient = "primary",
  borderRadius = 10,
  text = "TESTE",
  fontColor = "white",
  iconName,
  iconSize = 20,
  onClick,
  ...rest
}) => {
  return (
    <Container
      onClick={onClick}
      fontColor={fontColor}
      backgroundColor={`--linear-${gradient}`}
      borderRadius={borderRadius}
      {...rest}
    >
      {iconName && (
        <MaterialIconStyled name={iconName} size={iconSize} color={fontColor} />
      )}
      <span>{text}</span>
    </Container>
  );
};

export default GenericButton;
