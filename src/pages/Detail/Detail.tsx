import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionDispatcher } from "./Container";
import {
  DetailBody,
  DetailBodyProps,
} from "../../Components/Organism/DetailBody";
interface Props extends RouteComponentProps<{}> {
  actions: ActionDispatcher;
}

export const Detail: React.FC<Props> = (props) => {
  const detailBodyProps: DetailBodyProps = {
    headerProps: {
      buttonProps1: {
        buttonType: 1,
        label: "音声の投稿",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
        onClickAction: () => props.actions.transitToVoiceForm(),
      },
      buttonProps2: {
        buttonType: 1,
        label: "リクエストの投稿",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
        onClickAction: () => props.actions.transitToRequestForm(),
      },
      buttonProps3: {
        buttonType: 1,
        label: "ヘルプ",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
      },
    },
    subheaderTitleProps: {
      textProps: { label: "タイトル" },
    },
    audioProps: { width: "100%" },
    cardMainProps: {
      imageProps: { width: "4rem", height: "4rem" },
      text1Props: {
        label: "あいみょん :",
        fontWeight: "bold",
      },
      text2Props: {
        label: "ハローワールドハローワールド",
      },
      text3Props: { label: "コメ 14" },
      text4Props: { label: "拍手 255" },
      text5Props: { label: "@1日前" },
      isDetail: true,
      textGenreProps: { label: "オナ声" },
      buttonProps: { buttonType: 1, width: "10rem", label: "ブックマークする" },
    },
    buttonGoodProps: {
      buttonType: 1,
      label: "いいね23",
      width: "5rem",
    },
    viewsProps: {
      textViewsProps: { label: "再生数" },
      textCountsProps: { label: "5084" },
    },
    footerProps: {
      linkProps: {
        label: "音声の投稿",
        onClickAction: () => props.actions.transitToVoiceForm(),
      },
    },
  };

  return (
    <>
      <DetailBody {...detailBodyProps} />
    </>
  );
};
