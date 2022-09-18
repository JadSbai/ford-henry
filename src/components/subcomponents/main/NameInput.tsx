import "./NameInput.css";

import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../contexts";
import BotText, { languageToCode } from "../../../utils/BotText";

export default function NameInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const {state, dispatch} = useContext(GlobalContext);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await handleClick();
  };

  async function handleClick() {
    const new_name = inputRef.current?.value ?? "";
    const new_text = BotText(languageToCode(state.language), new_name);

    dispatch({type: "SET_NAME", name: new_name});
    dispatch({type: "SET_ALL_TEXT", text: new_text});

    //Create new list of messages
    const new_messages = [...state.messages,
    {
      message: {
        text: new_name,
        time: new Date(Date.now()),
      },
      isBot: false,
    },
    {
      message: {
        text: new_text.welcome,
        time: new Date(Date.now()),
      },
      isBot: true,
    }, 
    {
      message: {
        text: new_text.typeQ,
        time: new Date(Date.now()),
      },
      isBot: true,
    },
    ];
    
    
    dispatch({type: "SET_MESSAGES", messages: new_messages});
    dispatch({type: "SET_LOOPBACK", value: true});

    //clears box
    inputRef.current!.value = "";
  }

  return (
    <form className="nameform">
      <fieldset>
        <input
          className="nameTxtBox"
          ref={inputRef}
          type="text"
          placeholder={state.allText.namePlaceholder}
          id="name"
          name="name"
          onSubmit={onSubmit}
        ></input>
        <button className="okBtn" onClick={onSubmit}>
          {" "}
          GO{" "}
        </button>
      </fieldset>
    </form>
  );
}
