import * as React from "react";
import styles from "./style";

const { StyledLink } = styles;

export interface LinkProps {
  label: string | null;
  fontsize?: string;
  fontWeight?: string;
  fontFamily?: string;
  colorType?: string;
  onClickAction?: () => any;
}

export const Link: React.FC<LinkProps> = ({
  label,
  fontsize,
  fontWeight,
  fontFamily,
  colorType,
  onClickAction
}) => (
  <StyledLink
    fontsize={fontsize}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    colorType={colorType}
    onClick={onClickAction}
  >
    {label}
  </StyledLink>
);

Link.defaultProps = {
  fontsize: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  colorType: "inherit"
};
