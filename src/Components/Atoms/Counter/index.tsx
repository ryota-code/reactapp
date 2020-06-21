import * as React from "react";
import styles from "./style";

const { StyledCounter } = styles;

export interface CounterProps {
  label?: number;
}

export const Counter: React.FC<CounterProps> = ({ label }) => (
  <StyledCounter>{label}</StyledCounter>
);

Counter.defaultProps = {
  label: 0
};
