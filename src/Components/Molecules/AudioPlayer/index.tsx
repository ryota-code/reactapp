import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";

const { StyledDiv, StyledPlayButton } = styles;

export interface AudioPlayerProps {
  buttonPlayProps: ButtonProps;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  buttonPlayProps
}) => (
  <StyledDiv>
    <StyledPlayButton>
      <Button {...buttonPlayProps} />
    </StyledPlayButton>
  </StyledDiv>
);
