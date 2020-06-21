import * as React from "react";
import styles from "./style";
import { Header, HeaderProps } from "../Header";
import { Audio, AudioProps } from "../../Atoms/Audio";
import { Views, ViewsProps } from "../../Molecules/Views";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";
import { Card, CardProps } from "../../Molecules/Card";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Footer, FooterProps } from "../Footer";

const {
  // StyledDivとstylesをつなぐ
  StyledDiv,
  StyledHeader,
  StyledContainer,
  StyledSubheader,
  StyledAudio,
  StyledCard,
  StyledFooter,
  StyledButton,
  StyledViews,
  StyledBody,
  StyledGoodViews,
  // StyledSubheader,
} = styles;

export interface DetailBodyProps {
  // インターフェースをエクスポートする
  headerProps: HeaderProps;
  subheaderTitleProps: SubheaderProps;
  audioProps: AudioProps;
  cardMainProps: CardProps;
  buttonGoodProps: ButtonProps;
  viewsProps: ViewsProps;
  footerProps: FooterProps;
}

export const DetailBody: React.FC<DetailBodyProps> = ({
  headerProps,
  subheaderTitleProps,
  audioProps,
  cardMainProps,
  buttonGoodProps,
  footerProps,
  viewsProps,
}) => (
  <StyledDiv>
    <StyledHeader>
      <Header {...headerProps} />
    </StyledHeader>
    <StyledBody>
      <StyledContainer>
        <StyledSubheader>
          <Subheader {...subheaderTitleProps} />
        </StyledSubheader>
        <StyledAudio>
          <Audio {...audioProps} />
        </StyledAudio>
        <StyledCard>
          <Card {...cardMainProps} />
        </StyledCard>
      </StyledContainer>
      <StyledGoodViews>
        {/* いいね */}
        <StyledButton>
          <Button {...buttonGoodProps} />
        </StyledButton>
        {/* 再生数 */}
        <StyledViews>
          <Views {...viewsProps} />
        </StyledViews>
      </StyledGoodViews>
      {/* ツイートする
    <StyledButton>
      <Button {...buttonProps} />
    </StyledButton> */}
      {/* 投稿削除
    <StyledInputWithTextDiv>
      <InputWithText {...inputWithTextProps} />
    </StyledInputWithTextDiv> */}
      {/* コメント投稿 */}
      {/* <StyledSubheadder>
      <Subheader {...subheaderProps} />
    </StyledSubheadder> */}
    </StyledBody>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
