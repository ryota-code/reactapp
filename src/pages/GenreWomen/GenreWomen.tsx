import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionDispatcher } from "./Container";
import {
  GenreWomenBody,
  GenreWomenBodyProps
} from "../../Components/Organism/GenreWomenBody";

interface Props extends RouteComponentProps<{}> {
  actions: ActionDispatcher;
}
export const GenreWomen: React.FC<Props> = props => {
  const genreWomenBodyProps: GenreWomenBodyProps = {
    headerProps: {
      buttonProps1: {
        buttonType: 1,
        label: "音声の投稿",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
        onClickAction: () => props.actions.transitToVoiceForm()
      },
      buttonProps2: {
        buttonType: 1,
        label: "リクエストの投稿",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
        onClickAction: () => props.actions.transitToRequestForm()
      },
      buttonProps3: {
        buttonType: 1,
        label: "ヘルプ",
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem"
      }
    },
    subheaderProps: { textProps: { label: "ジャンル:女性(全て)" } },
    categoryProps: {
      textProps: { label: "表示:" },
      linkAllProps: { label: "全て" },
      linkEroticVoiceProps: { label: "いい声" },
      linkMasturbationVoiceProps: { label: "なかなかいい声" },
      linkExperienceProps: { label: "体験談" },
      linkSecretProps: { label: "私の秘密" },
      linkAnotherProps: { label: "その他" }
    },
    prevListProps: {
      textProps: { label: "Prev:1" },
      linkProps: { label: "Next" }
    },
    cardProps: {
      imageProps: { width: "4rem", height: "4rem" },
      text1Props: {
        label: "あいみょん :",
        fontWeight: "bold",
        onClickAction: () => props.actions.transitToDetail()
      },
      text2Props: {
        label: "ハローワールドハローワールド"
      },
      text3Props: { label: "コメ 14" },
      text4Props: { label: "拍手 255" },
      text5Props: { label: "@1日前" },
      isDetail: false,
      textGenreProps: { label: "" },
      buttonProps: { buttonType: 1, label: "" }
    },
    footerProps: {
      linkProps: {
        label: "音声の投稿",
        onClickAction: () => props.actions.transitToVoiceForm()
      }
    }
  };
  return (
    <>
      <GenreWomenBody {...genreWomenBodyProps} />
    </>
  );
};
