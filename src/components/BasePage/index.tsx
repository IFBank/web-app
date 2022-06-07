import React from "react";

import MenuLateral from "../MenuLateral";
import HeaderTitle from "../HeaderTitle";
import GenericButton from "../GenericButton";

import { Container, Content, HeaderContainer, MainContent } from "./styles";

interface BasePageProps {
  children?: React.ReactNode;
  titleHeader: string;
  subTitleHeader: string;
  textCancelButton?: string;
  onClickCancelButton?: () => {};
  loading?: boolean;
}

const BasePage: React.FC<BasePageProps> = ({
  children = null,
  titleHeader,
  subTitleHeader,
  textCancelButton,
  onClickCancelButton,
  loading = false,
  ...rest
}) => {
  return (
    <Container>
      <MenuLateral />

      <Content>
        <HeaderContainer>
          <HeaderTitle title={titleHeader} subTitle={subTitleHeader} />
          {textCancelButton && (
            <GenericButton
              gradient="semantic-red"
              loading={loading}
              text={textCancelButton}
              onClick={loading ? null : onClickCancelButton}
              borderRadius={30}
              iconName="clear"
              iconSize={28}
            />
          )}
        </HeaderContainer>

        <MainContent {...rest}>{children}</MainContent>
      </Content>
    </Container>
  );
};

export default BasePage;
