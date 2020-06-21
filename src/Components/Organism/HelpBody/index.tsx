import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Header, HeaderProps } from "../Header";
import { Footer, FooterProps } from "../Footer";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";
import {
  ButtonPlusMinus,
  ButtonPlusMinusProps
} from "../../Molecules/ButtonPulsMinus";
import { Counter, CounterProps } from "../../Atoms/Counter";

const {
  StyledDiv,
  StyledBody,
  StyledForm,
  StyledHeader,
  StyledFooter,
  StyledButton,
  StyledSubheader
} = styles;

export interface HelpBodyProps {
  headerProps: HeaderProps;
  subheaderProps: SubheaderProps;
  footerProps: FooterProps;
  buttonProps: ButtonProps;
  buttonPlusMinusProps: ButtonPlusMinusProps;
  counterProps: CounterProps;
}

export const HelpBody: React.FC<HelpBodyProps> = ({
  headerProps,
  subheaderProps,
  footerProps,
  buttonProps,
  buttonPlusMinusProps,
  counterProps
}) => (
  <StyledDiv>
    <StyledHeader>
      <Header {...headerProps} />
    </StyledHeader>
    <StyledBody>
      <StyledSubheader>
        <Subheader {...subheaderProps} />
      </StyledSubheader>
      <StyledForm>
        <StyledButton>
          <Counter {...counterProps} />
          <ButtonPlusMinus {...buttonPlusMinusProps} />
          <Button {...buttonProps} />
        </StyledButton>
      </StyledForm>
    </StyledBody>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
