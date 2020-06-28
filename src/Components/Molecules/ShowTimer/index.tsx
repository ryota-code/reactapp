import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text";

const { StyledDiv, StyledTextTimer } = styles;

export interface ShowTimerProps {
  textTimerProps: TextProps;
}

export const ShowTimer: React.FC<ShowTimerProps> = ({ textTimerProps }) => (
  <StyledDiv>
    <StyledTextTimer>
      <Text {...textTimerProps} />
    </StyledTextTimer>
  </StyledDiv>
);
