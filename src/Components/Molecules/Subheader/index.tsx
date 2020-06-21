import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";

const { StyledDiv } = styles;

export interface SubheaderProps {
  textProps: TextProps;
}

export const Subheader: React.FC<SubheaderProps> = ({ textProps }) => (
  <StyledDiv>
    <Text {...textProps} />
  </StyledDiv>
);
