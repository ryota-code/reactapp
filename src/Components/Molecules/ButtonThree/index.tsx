import * as React from "react";
import styles from "./style";
import { ButtonProps, Button } from "../../Atoms/Button";

const {
  StyledDiv,
  StyledWomenButton,
  StyledMenButton,
  StyledCoupleButton
} = styles;

export interface ButtonThreeProps {
  buttonWomenProps: ButtonProps;
  buttonMenProps: ButtonProps;
  buttonCoupleProps: ButtonProps;
}

export const ButtonThree: React.FC<ButtonThreeProps> = ({
  buttonWomenProps,
  buttonMenProps,
  buttonCoupleProps
}) => (
  <StyledDiv>
    <StyledWomenButton>
      <Button {...buttonWomenProps} />
    </StyledWomenButton>
    <StyledMenButton>
      <Button {...buttonMenProps} />
    </StyledMenButton>
    <StyledCoupleButton>
      <Button {...buttonCoupleProps} />
    </StyledCoupleButton>
  </StyledDiv>
);
