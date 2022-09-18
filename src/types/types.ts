//Enum for different states lex are in
export enum LexState {
  FALLBACK = "Fallback",
  WAITING_FOR_RESPONSE = "WaitingForResponse",
  CONFIRMED = "Confirmed",
  DENIED = "Denied",
  NONE = "None",
}

export type Action =
 | { type: 'CLOSE_CHAT'}
 | { type: 'OPEN_CHAT' }
 | { type: 'SHOW_CHAT' }
 | { type: 'SHOW_ALERT' }
 | { type: 'HIDE_ALERT' }
 | { type: 'TOGGLE_CHAT' }
 | { type: 'HIDE_CHAT'}
 | { type: 'CLOSE_SESSION'}
 | { type: 'SET_NAME', name: string}
 | { type: 'SET_UUID', uuid: string}
 | { type: 'SET_SESSION_ID', session_id: string}
 | { type: 'SET_LOOPBACK', value: boolean}
 | { type: 'SET_ISLINK', value: boolean}
 | { type: 'SET_FEEDBACKREQ', value: boolean}
 | { type: 'SET_LOADING', value: boolean}
 | { type: 'TOGGLE_STARS', savedData: string[]}
 | { type: 'SET_MESSAGES', messages: ChatMessage[]}
 | { type: 'SET_ALTERNATE_BUTTONS', alternate_buttons: AlternateButton[]}
 | { type: 'CHANGE_LANGUAGE', language: Language}
 | { type: 'REFRESH_DATA', savedData: string[]}
 | { type: 'SET_ALL_TEXT', text: TranslatedText}
 | { type: 'SET_STAR_VALUE', starValue: Number}
 | { type: 'SET_LEX_STATE', state: LexState}
 | { type: 'SET_REDIRECT', value: boolean};

 export enum Language  {
    ENGLISH = "en_GB",
    SPANISH = "es_ES",
    FRENCH = "fr_FR",
    GERMAN = "de_DE",
    ITALIAN = "it_IT",
 }

 export interface TranslatedText {
    welcome: string;
    btn1: string; 
    btn2: string;
    btn3: string;
    ansQ: string;
    feedback: string;
    feedbackMsg: string;
    serviceUnavailable: string;
    noAnsQ: string;
    introTxt:string;
    tcTxt:string;
    tcLink:string;
    txtBoxNamePlaceholder: string;
    namePlaceholder: string;
    phType: string;
    phSpeak: string;
    phWait: string;
    hereLink: string;
    hereLinkText: string;
    yes: string;
    no: string;
    otherQs: string;
    close: string;
    typeQ: string;
    redirectQ: string;
    redirect: string;
    askAgain: string;
    liveAgentQueue: string;
    askAgainMsg: string;
    altOpts: string;
    selectOpt: string;
 }


 export type State = {
  name: string,
  messages: ChatMessage[],
  alternate_butttons: AlternateButton[],
  lexState: LexState,
  loading: boolean,
  language: Language,
  isLink: boolean,
  minimised: boolean,
  showAlert: boolean,
  loopBack: boolean,
  feedbackReq: boolean,
  showComponent: boolean,
  closed: boolean,
  showStars: boolean,
  uuid: string,
  session_id: string,
  allText: TranslatedText,
  starValue: Number,
  isRedirect: boolean,
 }

//Create an interface for alternate buttons
export interface AlternateButton {
  text: string;
  url?: string;
}

//Create an interface for messages
export interface Message {
  text: string;
  time: Date;
}

//Create an interface for chat messages
export interface ChatMessage {
  message: Message;
  isBot: boolean;
}

//For info returned about the user too the user
export interface UserInfo {
  uuid: string;
  session_id: string;
}

//Type for action buttons
export interface ActionReturn extends UserInfo {
  message: string;
}

//Type for how we expect a message response to be
export interface SendResponse {
  uuid: string;
  session_id: string;
  state: LexState;
  message: { text: string; time: Date };
  alternateButtons: AlternateButton[];
}
