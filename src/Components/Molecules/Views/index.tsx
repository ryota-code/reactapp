import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";

const { StyledDiv, StyledViews, StyledCounts } = styles;

export interface ViewsProps {
  textViewsProps: TextProps;
  textCountsProps: TextProps;
}

export const Views: React.FC<ViewsProps> = ({
  textViewsProps,
  textCountsProps,
}) => (
  <StyledDiv>
    <StyledViews>
      <Text {...textViewsProps} />
    </StyledViews>
    <StyledCounts>
      <Text {...textCountsProps} />
    </StyledCounts>
  </StyledDiv>
);
