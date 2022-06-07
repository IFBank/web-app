import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import MaterialIcon from "../../MaterialIcon";

import { Container } from "./styles";

interface MenuItemProps {
  nameIcon: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ nameIcon, to, ...rest }) => {
  const [selected, setSelected] = useState(false);

  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        setSelected(isActive);
        return { color: "#0000" };
      }}
    >
      <Container selected={selected} {...rest}>
        <MaterialIcon
          name={nameIcon}
          size={36}
          color={selected ? "#FEFFFE" : "#FEFFFE80"}
        />
      </Container>
    </NavLink>
  );
};

export default MenuItem;
