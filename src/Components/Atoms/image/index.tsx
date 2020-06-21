import * as React from "react";
import styles from "./style";
import female from "../../../Resource/Image/female.png";

const { StyledImage } = styles;

export interface ImageProps {
  width?: string;
  height?: string;
}

export const Image: React.FC<ImageProps> = ({
  width,
  height
}) => (
  <StyledImage src={female} height={height} width={width}></StyledImage>
);
