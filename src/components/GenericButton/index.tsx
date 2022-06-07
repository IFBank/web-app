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
  loading?: boolean;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  gradient = "primary",
  borderRadius = 10,
  text = "TESTE",
  fontColor = "white",
  iconName,
  iconSize = 20,
  onClick,
  loading = false,
  ...rest
}) => {
  return (
    <Container
      onClick={loading ? null : onClick}
      fontColor={fontColor}
      backgroundColor={`--linear-${gradient}`}
      borderRadius={borderRadius}
      style={{
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "default" : "pointer",
      }}
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
