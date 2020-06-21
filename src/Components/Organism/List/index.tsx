import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Card, CardProps } from "../../Molecules/Card";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";

const { StyledDiv, StyledSubheader, StyledCard, StyledButton } = styles;

export interface ListProps {
  cardProps: CardProps;
  subheaderProps: SubheaderProps;
  buttonProps: ButtonProps;
}

export const List: React.FC<ListProps> = ({
  subheaderProps,
  cardProps,
  buttonProps
}) => (
  <StyledDiv>
    <StyledSubheader>
      <Subheader {...subheaderProps} />
    </StyledSubheader>
    <StyledCard>
      <Card {...cardProps} />
    </StyledCard>
    <StyledButton>
      <Button {...buttonProps} />
    </StyledButton>
  </StyledDiv>
);
