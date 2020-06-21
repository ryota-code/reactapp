import * as React from "react";
import styles from "./style";
import { Header, HeaderProps } from "../Header";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";
import { ButtonThree, ButtonThreeProps } from "../../Molecules/ButtonThree";
import { List, ListProps } from "../List";
import { Footer, FooterProps } from "../Footer";

const {
  StyledDiv,
  StyledHeader,
  StyledSubheader,
  StyledButtonThree,
  StyledList,
  StyledFooter,
} = styles;

export interface TableBodyProps {
  headerProps: HeaderProps;
  subheaderProps: SubheaderProps;
  buttonThreeProps: ButtonThreeProps;
  listProps: ListProps;
  footerProps: FooterProps;
}

export const TableBody: React.FC<TableBodyProps> = ({
  headerProps,
  subheaderProps,
  buttonThreeProps,
  listProps,
  footerProps,
}) => (
  <StyledDiv>
    <StyledHeader>
      <Header {...headerProps} />
    </StyledHeader>
    <StyledSubheader>
      <Subheader {...subheaderProps} />
    </StyledSubheader>
    <StyledButtonThree>
      <ButtonThree {...buttonThreeProps} />
    </StyledButtonThree>
    <StyledList>
      <List {...listProps} />
    </StyledList>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
