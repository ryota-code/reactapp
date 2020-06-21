import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionDispatcher } from "./Container";
import {
  VoiceFormBody,
  VoiceFormBodyProps
} from "../../Components/Organism/VoiceFormBody";

interface Props extends RouteComponentProps<{}> {
  actions: ActionDispatcher;
}

export const VoiceForm: React.FC<Props> = props => {
  const [userName, setUserName] = useState("");
  const [userSex, setUserSex] = useState(1);
  const [userTrip, setUserTrip] = useState("");
  const [userGenre, setUserGenre] = useState(1);
  const [userTitle, setUserTitle] = useState("");
  const [userComment, setUserComment] = useState("");
  const [userPermit, setUserPermit] = useState(1);
  const [userPassword, setUserPassword] = useState("");

  const voiceFormBodyProps: VoiceFormBodyProps = {
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
    subheaderProps: { textProps: { label: "投稿フォーム" } },
    inputWithTextNameProps: {
      textProps: { label: "お名前" },
      inputProps: {
        width: "10rem",
        value: userName,
        onChangeAction: event => {
          setUserName(event.target.value);
        }
      }
    },
    selectWithTextSexProps: {
      textProps: { label: "性別" },
      selectProps: {
        selectData: [
          { label: "女性", value: 1 },
          { label: "男性", value: 2 },
          { label: "カップル", value: 3 }
        ],
        defaultvalue: userSex,
        onChangeAction: event => {
          setUserSex(event.target.value);
        }
      }
    },
    selectWithTextGenreProps: {
      textProps: { label: "ジャンル" },
      selectProps: {
        selectData: [
          { label: "いい声", value: 1 },
          { label: "なかなかいい声", value: 2 },
          { label: "体験談", value: 3 },
          { label: "その他", value: 4 }
        ],
        defaultvalue: userGenre,
        onChangeAction: event => {
          setUserGenre(event.target.value);
        }
      }
    },
    inputWithTextTripProps: {
      textProps: { label: "トリップ" },
      inputProps: {
        width: "10rem",
        value: userTrip,
        onChangeAction: event => {
          setUserTrip(event.target.value);
        }
      }
    },
    inputWithTextTitleProps: {
      textProps: { label: "タイトル" },
      inputProps: {
        width: "10rem",
        value: userTitle,
        onChangeAction: event => {
          setUserTitle(event.target.value);
        }
      }
    },
    inputWithTextCommentProps: {
      textProps: { label: "コメント" },
      inputProps: {
        width: "20rem",
        value: userComment,
        onChangeAction: event => {
          setUserComment(event.target.value);
        }
      }
    },
    selectWithTextCommentPermitProps: {
      textProps: { label: "コメント許可" },
      selectProps: {
        selectData: [
          { label: "許可する", value: 1 },
          { label: "許可しない", value: 2 }
        ],
        width: "7rem",
        defaultvalue: userPermit,
        onChangeAction: event => {
          setUserPermit(event.target.value);
        }
      }
    },
    inputWithTextFileProps: {
      textProps: { label: "ファイル選択" },
      inputProps: { width: "5rem", type: "file" }
    },
    inputWithTextDeletePasswordProps: {
      textProps: { label: "削除用パスワード" },
      inputProps: {
        width: "10rem",
        value: userPassword,
        onChangeAction: event => {
          setUserPassword(event.target.value);
        }
      }
    },
    buttonProps: { buttonType: 1, label: "投稿内容確認", width: "10rem" },
    footerProps: {
      linkProps: {
        label: "音声の投稿",
        onClickAction: () => props.actions.transitToVoiceForm()
      }
    }
  };

  return (
    <>
      <VoiceFormBody {...voiceFormBodyProps} />
    </>
  );
};
