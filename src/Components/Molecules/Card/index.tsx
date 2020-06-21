import * as React from "react";
import styles from "./style";
import { Image, ImageProps } from "../../Atoms/Image/index";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Button, ButtonProps } from "../../Atoms/Button";

const {
  StyledDiv,
  StyledImageDiv,
  StyledTextDiv,
  StyledUpDiv,
  StyledDownDiv,
  StyledText1Div,
  StyledText2Div,
  StyledText3Div,
  StyledText4Div,
  StyledText5Div,
  StyledTextGenreDiv,
  StyledButtonDiv,
} = styles;

export interface CardProps {
  imageProps: ImageProps;
  // 名前
  text1Props: TextProps;
  // 本文
  text2Props: TextProps;
  // コメント数
  text3Props: TextProps;
  // 拍手
  text4Props: TextProps;
  // 日付
  text5Props: TextProps;
  // 以下detail分岐用
  isDetail: boolean;
  textGenreProps: TextProps;
  buttonProps: ButtonProps;
}

export const Card: React.FC<CardProps> = ({
  imageProps,
  text1Props,
  text2Props,
  text3Props,
  text4Props,
  text5Props,
  isDetail,
  textGenreProps,
  buttonProps,
}) => (
  <StyledDiv>
    <StyledImageDiv>
      <Image {...imageProps} />
    </StyledImageDiv>
    <StyledTextDiv>
      <StyledUpDiv>
        <StyledText1Div>
          <Text {...text1Props} />
        </StyledText1Div>
        <StyledText2Div>
          <Text {...text2Props} />
        </StyledText2Div>
      </StyledUpDiv>
      <StyledDownDiv>
        <StyledText3Div>
          <Text {...text3Props} />
        </StyledText3Div>
        <StyledText4Div>
          <Text {...text4Props} />
        </StyledText4Div>
        <StyledText5Div>
          <Text {...text5Props} />
        </StyledText5Div>
        {isDetail && (
          <>
            <StyledTextGenreDiv>
              <Text {...textGenreProps} />
            </StyledTextGenreDiv>
            <StyledButtonDiv>
              <Button {...buttonProps} />
            </StyledButtonDiv>
          </>
        )}
      </StyledDownDiv>
    </StyledTextDiv>
  </StyledDiv>
);
