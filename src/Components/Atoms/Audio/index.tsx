import * as React from "react";
import styles from "./style";

const { StyledAudio } = styles;

export interface AudioProps {
  width?: string;
}

export const Audio: React.FC<AudioProps> = ({}) => (
  <StyledAudio controls>
    <source src="../../../Resource/Bgm/shutter.mp3" type="audio/mp3"></source>
  </StyledAudio>
);
