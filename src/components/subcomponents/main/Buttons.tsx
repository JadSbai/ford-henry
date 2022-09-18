import "./Buttons.css";

import React, { useContext } from "react";

import API from "../../../utils/API";
import { GlobalContext } from "../../../contexts";

export default function Buttons(props: {
  style: React.CSSProperties;
  onClick(): void;
}) {
  const {state, dispatch} = useContext(GlobalContext);

  async function getButtonLink(type: string, text: string) {  
    const response = await API.actionButton({
      type: type,
      language: state.language,
      name: state.name,
      uuid: state.uuid,
      sessionId: state.session_id,
    });

    if (response) {
      //Check if we have a uuid if not set one
      if (!state.uuid || response.uuid !== state.uuid) {
        dispatch({type: "SET_UUID", uuid: response.uuid});
      }
      dispatch({type: "SET_LOADING", value: false});

      //Check if we have a session id if not set one
      if (!state.session_id || response.session_id !== state.session_id) {
        dispatch({type: "SET_SESSION_ID", uuid: response.session_id});
      }
      const new_messages = [
        ...state.messages,
        { message: { text: text, time: new Date(Date.now()) }, isBot: false },
        {
          message: { text: response.message, time: new Date(Date.now()) },
          isBot: true,
        },
        {
          message: {
            text: state.allText.ansQ,
            time: new Date(Date.now()),
          },
          isBot: true,
        },
      ];
      dispatch({type: "SET_MESSAGES", messages: new_messages});
      dispatch({type: "SET_ISLINK", value: true});
      dispatch({type: "SET_LOOPBACK", value: false});
    } else {
      dispatch({type: "SET_MESSAGES", messages: [
        ...state.messages,
        {
          message: {
            text: "This service is currently unavailable",
            time: new Date(Date.now()),
          },
          isBot: true,
        },
      ]});
    } 
    dispatch({type: "SET_LOADING", value: false});
  }

  return (
    <div
      className="buttons-container"
      id="btnGroup"
      onClick={props.onClick}
      style={props.style}
    >
      <button
        className="principleBtn1"
        onClick={async () => {
          dispatch({type: "SET_LOADING", value: true});
          await getButtonLink("price-comp-click", state.allText.btn1);
        }}
      >
        {state.allText.btn1}
      </button>
      <button
        className="principleBtns"
        onClick={async () => {
          dispatch({type: "SET_LOADING", value: true});
          await getButtonLink("model-comparison-click", state.allText.btn2)
        }}
      >
      {state.allText.btn2}
      </button>
      <button
        className="principleBtns"
        onClick={async () => {
          dispatch({type: "SET_LOADING", value: true});
          await getButtonLink("testdrive-click", state.allText.btn3);
        }}
      >
        {state.allText.btn3}
      </button>
    </div>
  );
}
