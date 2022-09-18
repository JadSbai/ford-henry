import React from "react";
import { Language, LexState, State } from "./types/types";
import BotText from "./utils/BotText";


export const initalData: State = {
  name: "",
  messages: [],
  alternate_butttons: [],
  lexState: LexState.NONE,
  loading: false,
  language: Language.ENGLISH,
  isLink: false,
  minimised: false,
  showAlert: false,
  loopBack: false,
  feedbackReq: false,
  showComponent: false,
  closed: true,
  showStars: false,
  uuid: "",
  session_id: "",
  allText: BotText("EN", ""),
  starValue: 0,
  isRedirect: false
}

export const GlobalContext = React.createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
  }>({
    state: initalData,
    dispatch: () => null
  });