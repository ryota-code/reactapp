import * as React from "react";
import styles from "./style";
import {
  InputWithText,
  InputWithTextProps,
} from "../../Molecules/InputWithText";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Header, HeaderProps } from "../Header";
import { Footer, FooterProps } from "../Footer";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";

const {
  StyledDiv,
  StyledBody,
  StyledForm,
  StyledHeader,
  StyledInputWithTextName,
  StyledInputWithTextTrip,
  StyledInputWithTextRequest,
  StyledInputWithTextDelete,
  StyledFooter,
  StyledButton,
  StyledSubheader,
} = styles;

export interface RequestFormBodyProps {
  headerProps: HeaderProps;
  subheaderProps: SubheaderProps;
  inputWithTextNameProps: InputWithTextProps;
  inputWithTextTripProps: InputWithTextProps;
  inputWithTextRequestProps: InputWithTextProps;
  inputWithTextDeleteProps: InputWithTextProps;
  footerProps: FooterProps;
  buttonProps: ButtonProps;
}

export const RequestFormBody: React.FC<RequestFormBodyProps> = ({
  headerProps,
  subheaderProps,
  inputWithTextNameProps,
  inputWithTextTripProps,
  inputWithTextRequestProps,
  inputWithTextDeleteProps,
  footerProps,
  buttonProps,
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
        <StyledInputWithTextName>
          <InputWithText {...inputWithTextNameProps} />
        </StyledInputWithTextName>
        <StyledInputWithTextTrip>
          <InputWithText {...inputWithTextTripProps} />
        </StyledInputWithTextTrip>
        <StyledInputWithTextRequest>
          <InputWithText {...inputWithTextRequestProps} />
        </StyledInputWithTextRequest>
        <StyledInputWithTextDelete>
          <InputWithText {...inputWithTextDeleteProps} />
        </StyledInputWithTextDelete>
        <StyledButton>
          <Button {...buttonProps} />
        </StyledButton>
      </StyledForm>
    </StyledBody>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
