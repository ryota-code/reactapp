import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Button, ButtonProps } from "../../Atoms/Button";

const { StyledDiv, StyledModalDiv, StyledTextDiv, StyledButtonDiv } = styles;

export interface ModalProps {
  textProps: TextProps;
  buttonProps: ButtonProps;
}

export const Modal: React.FC<ModalProps> = ({ textProps, buttonProps }) => (
  <>
    <StyledDiv>
      <StyledModalDiv>
        <StyledButtonDiv>
          <Button {...buttonProps} />
        </StyledButtonDiv>
        <StyledTextDiv>
          <Text {...textProps} />
        </StyledTextDiv>
      </StyledModalDiv>
    </StyledDiv>
  </>
);
