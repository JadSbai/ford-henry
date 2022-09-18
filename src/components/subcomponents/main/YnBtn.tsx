import "./ynBtn.css";

import { ChatMessage, LexState } from "../../../types/types";
import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts";
import API from "../../../utils/API";

export default function YnBtn() {
  const {state, dispatch} = useContext(GlobalContext);

  async function choiceHandleYesClick(){
    //Stop the user from spamming our service
    dispatch({type: "SET_ISLINK", value: false});
    dispatch({type: "SET_LOOPBACK", value: false});

    //Create a local copy of the array
    let local_arr: ChatMessage[] = [
      ...state.messages,
      {
        message: { text: state.allText.yes, time: new Date(Date.now()) },
        isBot: false,
      },
    ];

    dispatch({type: "SET_MESSAGES", messages: local_arr});

    dispatch({type: "SET_LOADING", value: true});

    const response = await API.sendMessage({
      message: state.allText.yes,
      language: state.language,
      name: state.name,
      uuid: state.uuid,
      sessionId: state.session_id,
    });

    if (response) {
      //Check if we have a uuid if not set one
      if (!state.uuid || response.uuid != state.uuid) {
        dispatch({type: "SET_UUID", uuid: response.uuid});
      }

      //Check if we have a session id if not set one
      if (!state.session_id || response.session_id != state.session_id) {
        dispatch({type: "SET_SESSION_ID", session_id: response.session_id});
      }

      // Set the alternatives state to the most recent intent.
      dispatch({type: "SET_ALTERNATE_BUTTONS", alternate_buttons: response.alternateButtons});

      // Update the lex state to the most recent one
      dispatch({type: "SET_LEX_STATE", state: response.state});

      //If we get a response update, using our local array copy otherwise update with an error message
      dispatch({type: "SET_MESSAGES", messages: [
        ...local_arr,
        { message: response.message, isBot: true },
        {
          message: {
            text: state.allText.ansQ,
            time: new Date(Date.now()),
          },
          isBot: true,
        },
      ]});

      dispatch({type: "SET_ISLINK", value: true});
      // dispatch({type: "SET_LOOPBACK", value: false});

      //Update the local array as well in case of an update to the messages
      local_arr.push({ message: response.message, isBot: true });

    } else {
      dispatch({type: "SET_MESSAGES", messages: [
        ...local_arr,
        {
          message: {
            text: state.allText.serviceUnavailable,
            time: new Date(Date.now()),
          },
          isBot: true,
        },
      ]});
    }
    dispatch({type: "SET_LOADING", value: false});
  }

  async function choiceHandleNoClick(){
    dispatch({type: "SET_ISLINK", value: false});
    const new_messages = [
      ...state.messages,
      {
        message: { text: state.allText.no, time: new Date(Date.now()) },
        isBot: false,
      },
      {
        message: {
          text: state.allText.noAnsQ,
          time: new Date(Date.now()),
        },
        isBot: true,
      },
    ];
    dispatch({type: "SET_MESSAGES", messages: new_messages});
    dispatch({type: "SET_LEX_STATE", state: LexState.DENIED});
    await API.endLexSession({
      uuid: state.uuid,
      sessionId: state.session_id,
    });
  }

  async function satisfactionHandleYesClick(){
     // dispatch({type: "SET_FEEDBACKREQ", value: true});
     dispatch({type: "SET_ISLINK", value: false});
     dispatch({type: "SET_LOOPBACK", value: false});
     dispatch({type: "SET_LOADING", value: false});
     const new_messages = [
       ...state.messages,
       {
         message: { text: state.allText.yes, time: new Date(Date.now()) },
         isBot: false,
       },
       {
         message: { text: state.allText.otherQs, time: new Date(Date.now()) },
         isBot: true,
       },
     ];
     dispatch({type: "SET_MESSAGES", messages: new_messages});
  }

  async function satisfactionHandleNoClick(){
    dispatch({type: "SET_ISLINK", value: true});
    dispatch({type: "SET_REDIRECT", value: true});
         
    const new_messages = [
      ...state.messages,
      {
        message: { text: state.allText.no, time: new Date(Date.now()) },
        isBot: false,
      },
      {
        message: {
          text: state.allText.redirectQ,
          time: new Date(Date.now()),
        },
        isBot: true,
      },
    ];
    dispatch({type: "SET_MESSAGES", messages: new_messages});
  }

  async function redirectHandleClick(){
    dispatch({type: "SET_REDIRECT", value: false});
    dispatch({type: "SET_ISLINK", value: false});

    const new_messages = [
      ...state.messages,
      {
        message: { text: state.allText.redirect, time: new Date(Date.now()) },
        isBot: false,
      },
      {
        message: {
          text: state.allText.liveAgentQueue,
          time: new Date(Date.now()),
        },
        isBot: true,
      },
    ];
    dispatch({type: "SET_MESSAGES", messages: new_messages});

  }

  async function askAgainHandleClick(){
    dispatch({type: "SET_LOOPBACK", value: true});
    dispatch({type: "SET_REDIRECT", value: false});
    dispatch({type: "SET_ISLINK", value: false});

    const new_messages = [
      ...state.messages,
      {
        message: { text: state.allText.askAgain, time: new Date(Date.now()) },
        isBot: false,
      },
      {
        message: {
          text: state.allText.askAgainMsg,
          time: new Date(Date.now()),
        },
        isBot: true,
      },
    ];
    dispatch({type: "SET_MESSAGES", messages: new_messages});

  }

  return (
    state.lexState === LexState.WAITING_FOR_RESPONSE || !state.isLink? 
    (
      <div>
      <button
        className="ynBtn"
        onClick={choiceHandleYesClick}
      >
        {state.allText.yes}
      </button>
      <button
        className="ynBtn"
        onClick={choiceHandleNoClick}
      >
        {state.allText.no}
      </button>
    </div>
    ): !state.isRedirect?
    (
      <div className="feedbackContainer">
      <button
        className="ynBtn"
        onClick={satisfactionHandleYesClick}
      >
        {state.allText.yes}
      </button>
      <button
        className="ynBtn"
        onClick={satisfactionHandleNoClick}
      >
        {state.allText.no}
      </button>
    </div>
    ):
    <div className="feedbackContainer">
            <button
              className="ynBtn"
              onClick={redirectHandleClick}
            >
              {state.allText.redirect}
            </button>
            <button
              className="ynBtn"
              onClick={askAgainHandleClick}
            >
              {state.allText.askAgain}
            </button>
          </div>
  );
}
