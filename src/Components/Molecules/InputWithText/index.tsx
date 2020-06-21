import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Input, InputProps } from "../../Atoms/Input/index";

const { StyledDiv } = styles;

export interface InputWithTextProps {
  textProps: TextProps;
  inputProps: InputProps;
}

export const InputWithText: React.FC<InputWithTextProps> = ({
  textProps,
  inputProps,
}) => (
  <StyledDiv>
    <Text {...textProps} />
    <Input {...inputProps} />
  </StyledDiv>
);
