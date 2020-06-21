import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";

const { StyledDiv, StyledPlusButton, StyledMinusButton } = styles;

export interface ButtonPlusMinusProps {
  buttonPlusProps: ButtonProps;
  buttonMinusProps: ButtonProps;
}

export const ButtonPlusMinus: React.FC<ButtonPlusMinusProps> = ({
  buttonPlusProps,
  buttonMinusProps
}) => (
  <StyledDiv>
    <StyledPlusButton>
      <Button {...buttonPlusProps} />
    </StyledPlusButton>
    <StyledMinusButton>
      <Button {...buttonMinusProps} />
    </StyledMinusButton>
  </StyledDiv>
);
