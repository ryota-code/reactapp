import * as React from "react";
import styles from "./style";
// import { Button, ButtonProps } from "../../Atoms/Button";
import { Card, CardProps } from "../../Molecules/Card";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";
// import { List, ListProps } from "../List";
import { Category, CategoryProps } from "../../Molecules/Category";
import { PrevList, PrevListProps } from "../../Molecules/PrevList";
import { Header, HeaderProps } from "../Header";
import { Footer, FooterProps } from "../Footer";

const {
  StyledDiv,
  StyledHeader,
  StyledCategory,
  StyledPrevList,
  StyledCard,
  StyledFooter,
  StyledSubheader,
  // StyledCard,
  //   StyledButton,
} = styles;

export interface GenreWomenBodyProps {
  headerProps: HeaderProps;
  categoryProps: CategoryProps;
  prevListProps: PrevListProps;
  // listProps: ListProps;
  cardProps: CardProps;
  subheaderProps: SubheaderProps;
  //   buttonProps: ButtonProps;
  footerProps: FooterProps;
}

export const GenreWomenBody: React.FC<GenreWomenBodyProps> = ({
  headerProps,
  categoryProps,
  prevListProps,
  // listProps,
  cardProps,
  subheaderProps,
  //   buttonProps,
  footerProps,
}) => (
  <StyledDiv>
    <StyledHeader>
      <Header {...headerProps} />
    </StyledHeader>
    <StyledSubheader>
      <Subheader {...subheaderProps} />
    </StyledSubheader>
    <StyledCategory>
      <Category {...categoryProps} />
    </StyledCategory>
    <StyledPrevList>
      <PrevList {...prevListProps} />
    </StyledPrevList>
    <StyledCard>
      <Card {...cardProps} />
    </StyledCard>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
