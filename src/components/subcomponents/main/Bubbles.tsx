import "./Bubble.css";

import { ChatMessage, Message } from "../../../types/types";
import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts";

export default function Bubbles(props: { message: ChatMessage }) {

  const timestamp = new Date(props.message.message.time);
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <div className={props.message.isBot ? "botBubble" : "userBubble"}>
      {props.message.message.text.includes("http") ? 
        <div>
        <a href={props.message.message.text} target="_blank">
          {state.allText.hereLink}
        </a>
        {state.allText.hereLinkText}
        </div>
       : (
        props.message.message.text
      )}
      {timestamp ? (
        <div className={props.message.isBot ? "bTime" : "uTime"}>
          {timestamp.getMinutes() % 10 == timestamp.getMinutes()
            ? timestamp.getHours() + ":0" + timestamp.getMinutes()
            : timestamp.getHours() + ":" + timestamp.getMinutes()}
        </div>
      ) : null}
      <div className={props.message.isBot ? "triangle-left" : "triangle-right"}>
      </div>
    </div>
  );
}
