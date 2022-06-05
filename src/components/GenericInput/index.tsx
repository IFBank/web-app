import React, { useState } from "react";

import { Container, LabelText, SideText, InputContainer } from "./styles";

interface GenericInputProps {
  textLabel?: string;
  name: string;
  placeholder?: string;
  inputType?: string;
  textSide?: string;
  sideOnRight?: boolean;
  defaultValue?: any;
  gradient?: string;
  setTextInput?: (text: any) => void;
}

const GenericInput: React.FC<GenericInputProps> = ({
  textLabel = "Input",
  name,
  placeholder = "",
  textSide = "",
  sideOnRight = true,
  inputType = "text",
  defaultValue = "",
  gradient = "primary",
  setTextInput,
  ...rest
}) => {
  const [value, setValue] = useState<any>(defaultValue);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTextInput(e.target.value);
  };

  return (
    <Container {...rest}>
      <LabelText>{textLabel}</LabelText>
      <InputContainer sideOnRight={sideOnRight} gradient={gradient}>
        {textSide != "" && <SideText>{textSide}</SideText>}
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onHandleChange}
          required
        />
      </InputContainer>
    </Container>
  );
};

export default GenericInput;
