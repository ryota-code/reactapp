import * as React from "react";
import styles from "./style";
import {
  InputWithText,
  InputWithTextProps,
} from "../../Molecules/InputWithText";
import {
  SelectWithText,
  SelectWithTextProps,
} from "../../Molecules/SelectWithText";
import { Button, ButtonProps } from "../../Atoms/Button";
import { Header, HeaderProps } from "../Header";
import { Footer, FooterProps } from "../Footer";
import { Subheader, SubheaderProps } from "../../Molecules/Subheader";

const {
  StyledDiv,
  StyledHeader,
  StyledInputWithTextPassword,
  StyledInputWithTextFile,
  StyledSelectWithTextCommentPermit,
  StyledInputWithTextTitle,
  StyledSelectWithTextGenre,
  StyledInputWithTextName,
  StyledSelectWithTextSex,
  StyledInputWithTextTrip,
  StyledInputWithTextComment,
  StyledFooter,
  StyledButton,
  StyledSubheader,
  StyledForm,
  StyledBody,
} = styles;

export interface VoiceFormBodyProps {
  headerProps: HeaderProps;
  subheaderProps: SubheaderProps;
  // お名前
  inputWithTextNameProps: InputWithTextProps;
  // 性別
  selectWithTextSexProps: SelectWithTextProps;
  // ジャンル
  selectWithTextGenreProps: SelectWithTextProps;
  // トリップ
  inputWithTextTripProps: InputWithTextProps;
  // タイトル
  inputWithTextTitleProps: InputWithTextProps;
  // コメント
  inputWithTextCommentProps: InputWithTextProps;
  // コメント許可
  selectWithTextCommentPermitProps: SelectWithTextProps;
  // ファイル選択
  inputWithTextFileProps: InputWithTextProps;
  // 削除用パスワード
  inputWithTextDeletePasswordProps: InputWithTextProps;
  // 投稿内容確認
  buttonProps: ButtonProps;
  footerProps: FooterProps;
}

export const VoiceFormBody: React.FC<VoiceFormBodyProps> = ({
  headerProps,
  subheaderProps,
  // お名前
  inputWithTextNameProps,
  // 性別
  selectWithTextSexProps,
  // ジャンル
  selectWithTextGenreProps,
  // トリップ
  inputWithTextTripProps,
  // タイトル
  inputWithTextTitleProps,
  // コメント
  inputWithTextCommentProps,
  // コメント許可
  selectWithTextCommentPermitProps,
  // ファイル選択
  inputWithTextFileProps,
  // 削除用パスワード
  inputWithTextDeletePasswordProps,
  footerProps,
  buttonProps,
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
        {/* 名前 */}
        <StyledInputWithTextName>
          <InputWithText {...inputWithTextNameProps} />
        </StyledInputWithTextName>
        {/* 性別 */}
        <StyledSelectWithTextSex>
          <SelectWithText {...selectWithTextSexProps} />
        </StyledSelectWithTextSex>
        {/* ジャンル */}
        <StyledSelectWithTextGenre>
          <SelectWithText {...selectWithTextGenreProps} />
        </StyledSelectWithTextGenre>
        {/* トリップ */}
        <StyledInputWithTextTrip>
          <InputWithText {...inputWithTextTripProps} />
        </StyledInputWithTextTrip>
        {/* タイトル */}
        <StyledInputWithTextTitle>
          <InputWithText {...inputWithTextTitleProps} />
        </StyledInputWithTextTitle>
        {/* コメント */}
        <StyledInputWithTextComment>
          <InputWithText {...inputWithTextCommentProps} />
        </StyledInputWithTextComment>
        {/* コメント許可 */}
        <StyledSelectWithTextCommentPermit>
          <SelectWithText {...selectWithTextCommentPermitProps} />
        </StyledSelectWithTextCommentPermit>
        {/* ファイル選択 */}
        <StyledInputWithTextFile>
          <InputWithText {...inputWithTextFileProps} />
        </StyledInputWithTextFile>
        {/* 削除用パスワード */}
        <StyledInputWithTextPassword>
          <InputWithText {...inputWithTextDeletePasswordProps} />
        </StyledInputWithTextPassword>
        <StyledButton>
          <Button {...buttonProps} />
        </StyledButton>
      </StyledForm>
    </StyledBody>
    <StyledFooter>
      <Footer {...footerProps} />
    </StyledFooter>
  </StyledDiv>
);
