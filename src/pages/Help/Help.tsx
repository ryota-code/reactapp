import { RouteComponentProps } from "react-router-dom";
import { HelpBodyProps, HelpBody } from "../../Components/Organism/HelpBody";
import { ActionDispatcher } from "./Container";
import React, { useState, useEffect, useCallback } from "react";
import { HelpState } from "./Module";

interface Props extends RouteComponentProps<{}> {
  value: HelpState;
  actions: ActionDispatcher;
}

export const Help: React.FC<Props> = props => {
  const url = "http://www.ne.jp/asahi/music/myuu/wave/hana.mp3";
  const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const toggling = useCallback(e => {
      setPlaying(!playing);
      console.log(playing);
    }, []);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggling];
  };
  const [playing, toggling] = useAudio(url);

  const [count, setConut] = useState<string | null>(null);
  const handleClickCaptureButton = () => {
    const sec = 3;
    let dt = new Date(); //現在の日時を取得
    const endDt = new Date(dt.getTime() + sec * 1000);
    let cnt = sec;
    setConut(cnt.toString());
    let id = setInterval(function() {
      cnt--;
      setConut(cnt.toString());
      dt = new Date();
      if (dt.getTime() >= endDt.getTime()) {
        clearInterval(id);
      }
    }, 1000);
  };
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
    audioPlayerProps: {
      buttonPlayProps: {
        buttonType: 2,
        onClickAction: () => {
          toggling;
        },
        label: playing ? "Pause" : "Play"
      }
    },
    showTimerProps: {
      textTimerProps: {
        label: count
      }
    },
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
        height: "2rem",
        onClickAction: () => {
          handleClickCaptureButton();
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
      <HelpBody {...helpBodyProps} />
    </>
  );
};
