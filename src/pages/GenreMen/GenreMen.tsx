import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionDispatcher } from "./Container";
import {
  GenreMenBody,
  GenreMenBodyProps
} from "../../Components/Organism/GenreMenBody";

interface Props extends RouteComponentProps<{}> {
  actions: ActionDispatcher;
}
export const GenreMen: React.FC<Props> = props => {
  const genreMenBodyProps: GenreMenBodyProps = {
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
      textProps: { label: "Prev 1" },
      linkProps: { label: "Next" }
    },
    listProps: {
      subheaderProps: {
        textProps: { label: "注目の音声(総合)" }
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
      buttonProps: { buttonType: 1, label: "もっと見る", width: "100%" }
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
      <GenreMenBody {...genreMenBodyProps} />
    </>
  );
};
