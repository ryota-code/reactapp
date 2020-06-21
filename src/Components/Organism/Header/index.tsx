import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";

const { StyledDiv, StyledButtonDiv } = styles;

export interface HeaderProps {
  buttonProps1: ButtonProps;
  buttonProps2: ButtonProps;
  buttonProps3: ButtonProps;
}

export const Header: React.FC<HeaderProps> = ({
  buttonProps1,
  buttonProps2,
  buttonProps3
}) => (
  <StyledDiv>
    <StyledButtonDiv>
      <Button {...buttonProps1} />
      <Button {...buttonProps2} />
      <Button {...buttonProps3} />
    </StyledButtonDiv>
  </StyledDiv>
);
