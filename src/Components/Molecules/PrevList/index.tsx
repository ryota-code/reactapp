import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Link, LinkProps } from "../../Atoms/Link";

const { StyledDiv, StyledText, StyledLink } = styles;

export interface PrevListProps {
  textProps: TextProps;
  linkProps: LinkProps;
}

export const PrevList: React.FC<PrevListProps> = ({ textProps, linkProps }) => (
  <StyledDiv>
    <StyledText>
      <Text {...textProps} />
    </StyledText>
    <StyledLink>
      <Link {...linkProps} />
    </StyledLink>
  </StyledDiv>
);
