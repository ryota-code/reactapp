import * as React from "react";
import styles from "./style";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Header, HeaderProps } from "../Header";
import { Footer, FooterProps } from "../Footer";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";
import {
  ButtonPlusMinus,
  ButtonPlusMinusProps
} from "../../Molecules/ButtonPulsMinus";
import { Counter, CounterProps } from "../../Atoms/Counter";
import { AudioPlayer, AudioPlayerProps } from "../../Molecules/AudioPlayer";
import { ShowTimerProps, ShowTimer } from "../../Molecules/ShowTimer";

const {
  StyledDiv,
  StyledBody,
  StyledForm,
  StyledHeader,
  StyledFooter,
  StyledButton,
  StyledSubheader
} = styles;

export interface HelpBodyProps {
  headerProps: HeaderProps;
  subheaderProps: SubheaderProps;
  footerProps: FooterProps;
  buttonProps: ButtonProps;
  buttonPlusMinusProps: ButtonPlusMinusProps;
  counterProps: CounterProps;
  audioPlayerProps: AudioPlayerProps;
  showTimerProps: ShowTimerProps;
}

export const HelpBody: React.FC<HelpBodyProps> = ({
  headerProps,
  subheaderProps,
  footerProps,
  buttonProps,
  buttonPlusMinusProps,
  counterProps,
  audioPlayerProps,
  showTimerProps
}) => (
  <StyledDiv>
    <StyledHeader>
      <Header {...headerProps} />
    </StyledHeader>
    <StyledBody>
      <StyledSubheader>
        <Subheader {...subheaderProps} />
      </StyledSubheader>
      <StyledForm>
        <AudioPlayer {...audioPlayerProps} />
        <ShowTimer {...showTimerProps} />
        <StyledButton>
          <Counter {...counterProps} />
          <ButtonPlusMinus {...buttonPlusMinusProps} />
          <Button {...buttonProps} />
        </StyledButton>
      </StyledForm>
    </StyledBody>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
