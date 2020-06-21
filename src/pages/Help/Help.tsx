import { RouteComponentProps } from "react-router-dom";
import { HelpBodyProps, HelpBody } from "../../Components/Organism/HelpBody";
import { ActionDispatcher } from "./Container";
import React from "react";
import { HelpState } from "./Module";

interface Props extends RouteComponentProps<{}> {
  value: HelpState;
  actions: ActionDispatcher;
}

export const Help: React.FC<Props> = props => {
  const helpBodyProps: HelpBodyProps = {
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
    subheaderProps: { textProps: { label: "ヘルプデスク" } },
    counterProps: { label: props.value.count },
    buttonPlusMinusProps: {
      buttonPlusProps: {
        label: "+",
        buttonType: 1,
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem",
        onClickAction: () => {
          props.actions.setIncrimentCount();
        }
      },
      buttonMinusProps: {
        label: "-",
        buttonType: 3,
        width: "6rem",
        fontsize: "0.5rem",
        height: "2rem"
      }
    },

    buttonProps: { buttonType: 1, label: "投稿を確認", width: "100%" },
    footerProps: {
      linkProps: {
        label: "音声の投稿",
        onClickAction: () => props.actions.transitToVoiceForm()
      }
    }
  };

  return (
    <>
      <HelpBody {...helpBodyProps} />
    </>
  );
};
