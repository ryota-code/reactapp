import * as React from "react";
import styles from "./style";
import { Link, LinkProps } from "../../Atoms/Link";

const { StyledDiv, StyledLinkDiv } = styles;

export interface FooterProps {
  linkProps: LinkProps;
}

export const Footer: React.FC<FooterProps> = ({
  linkProps,
}) => (
  <StyledDiv>
    <StyledLinkDiv>
      <Link {...linkProps} />
    </StyledLinkDiv>
  </StyledDiv>
);
