import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionDispatcher } from "./Container";
import {
  RequestFormBody,
  RequestFormBodyProps
} from "../../Components/Organism/RequestFormBody";

interface Props extends RouteComponentProps<{}> {
  actions: ActionDispatcher;
}

export const RequestForm: React.FC<Props> = props => {
  const [userName, setUserName] = useState("");
  const [userTrip, setUserTrip] = useState("");
  const [userRequest, setUserRequest] = useState("");
  const [userDelete, setUserDelete] = useState("");

  const requestFormBodyProps: RequestFormBodyProps = {
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
        height: "2rem",
        onClickAction: () => props.actions.transitToHelp()
      }
    },
    subheaderProps: { textProps: { label: "リクエスト投稿フォーム" } },
    inputWithTextNameProps: {
      textProps: { label: "お名前" },
      inputProps: {
        width: "5rem",
        value: userName,
        onChangeAction: event => {
          setUserName(event.target.value);
        }
      }
    },
    inputWithTextTripProps: {
      textProps: { label: "トリップ（任意）" },
      inputProps: {
        width: "5rem",
        value: userTrip,
        onChangeAction: event => {
          setUserTrip(event.target.value);
        }
      }
    },
    inputWithTextRequestProps: {
      textProps: { label: "リクエスト" },
      inputProps: {
        width: "5rem",
        value: userRequest,
        onChangeAction: event => {
          setUserRequest(event.target.value);
        }
      }
    },
    inputWithTextDeleteProps: {
      textProps: { label: "削除用パスワード" },
      inputProps: {
        width: "5rem",
        value: userDelete,
        onChangeAction: event => {
          setUserDelete(event.target.value);
        }
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
      <RequestFormBody {...requestFormBodyProps} />
    </>
  );
};
