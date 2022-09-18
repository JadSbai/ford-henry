import "./ChatboxButton.css";

import { animated, useTransition } from "react-spring";
import React, { useContext } from "react";
import image from "../images/icons/henryCar.png";
import message from "../images/icons/message.png";
import { GlobalContext } from "../contexts";

function OpenChat() {
  const {state, dispatch} = useContext(GlobalContext);
  return (
    <div className="chat-button-div">
      {!state.showComponent ? (
        <button
          className="ask-henry"
          onClick={() => {
            dispatch({type: "SHOW_CHAT"});
          }}
        >
          <animated.img className="pic" src={message}></animated.img>
          Ask Henry
        </button>
      ) : null}
      {!state.showComponent ? (
        <img className="henry-popup" alt-text="Robot pop up" src={image}></img>
      ) : null}
    </div>
  );
}

export default OpenChat;
