import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Select, SelectProps } from "../../Atoms/Select/index";

const { StyledDiv } = styles;

export interface SelectWithTextProps {
  textProps: TextProps;
  selectProps: SelectProps;
}

export const SelectWithText: React.FC<SelectWithTextProps> = ({
  textProps,
  selectProps,
}) => (
  <StyledDiv>
    <Text {...textProps} />
    <Select {...selectProps} />
  </StyledDiv>
);
