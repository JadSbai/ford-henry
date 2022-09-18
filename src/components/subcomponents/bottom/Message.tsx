import "./Message.css";

import {ChatMessage, LexState } from "../../../types/types";
import React, { useContext, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import API from "../../../utils/API";
import Languages from "../../../utils/Languages";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { RiSendPlaneFill } from "react-icons/ri";
import { ToggleButton } from "@mui/material";
import { GlobalContext } from "../../../contexts";

function Message() {
  const {state, dispatch} = useContext(GlobalContext);
  //message is current state, setMessage to update
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const switchListening = async () => {
    if (!listening) {
      if (isMicrophoneAvailable) {
        dispatch({type: "SET_LOADING", value: true});
        await SpeechRecognition.startListening({
          continuous: true,
          language: Languages(state.language),
        });
        dispatch({type: "SET_LOADING", value: false});
      }
    } else {
      setMessage(message + transcript);
      await SpeechRecognition.stopListening();
      resetTranscript();
    }
  };

  async function handleClick() {
    //Check we aren't currently processing a service
    if (!state.loading && message !== "") {
      //Stop the user from spamming our service
      dispatch({type: "SET_LOADING", value: true});

      dispatch({type: "SET_LOOPBACK", value: false});

      //Create a local copy of the array
      let local_arr: ChatMessage[] = [
        ...state.messages,
        {
          message: { text: message, time: new Date(Date.now()) },
          isBot: false,
        },
      ];
      const new_messages = [
        ...state.messages,
        {
          message: { text: message, time: new Date(Date.now()) },
          isBot: false,
        },
      ];
      //adds the message to existing array
      dispatch({type: "SET_MESSAGES", messages: new_messages});
      
      //useRef allows there to be a 'current' to the const
      //clears box
      inputRef.current!.value = "";

      //blank box
      setMessage("");

      //Send a request too the endpoint
      const response = await API.sendMessage({
        message: message,
        language: state.language,
        name: state.name,
        uuid: state.uuid,
        sessionId: state.session_id,
      });
      
      // Reset the transcript
      resetTranscript();

      if (response) {
        //Check if we have a uuid if not set one
        if (!state.uuid || response.uuid != state.uuid) {
          dispatch({type: "SET_UUID", uuid: response.uuid});
        }

        //Check if we have a session id if not set one
        if (!state.session_id || response.session_id != state.session_id) {
          dispatch({type: "SET_SESSION_ID", session_id: response.session_id});
        }

        //If we get a response update, using our local array copy otherwise update with an error message
        dispatch({type: "SET_MESSAGES", messages: [
          ...local_arr,
          { message: response.message, isBot: true },
        ]});

        //Update the local array as well in case of an update to the messages
        local_arr.push({ message: response.message, isBot: true });

        // Set the alternatives state to the most recent intent.
        dispatch({type: "SET_ALTERNATE_BUTTONS", alternate_buttons: response.alternateButtons});

        // Update the lex state to the most recent one
        dispatch({type: "SET_LEX_STATE", state: response.state});

        switch(response.state){
          case LexState.FALLBACK:
            dispatch({type: "SET_MESSAGES", messages: [
              ...local_arr,
              { message:{text: state.allText.altOpts, time: new Date(Date.now()) }, isBot: true },
            ]});
            break;
          case LexState.WAITING_FOR_RESPONSE:
            dispatch({type: "SET_ISLINK", value: true});
            break;
          case LexState.CONFIRMED:
            dispatch({type: "SET_MESSAGES", messages: [
              ...local_arr,
              {
                message: {
                  text: state.allText.ansQ,
                  time: new Date(Date.now()),
                },
                isBot: true,
              },
            ]});
            dispatch({type: "SET_ISLINK", value: true});
            break;
          case LexState.DENIED:
            dispatch({type: "SET_MESSAGES", messages: [
              ...local_arr,
              {
                message: {
                  text: state.allText.noAnsQ,
                  time: new Date(Date.now()),
                },
                isBot: true,
              },
            ]});
            break;
          case LexState.NONE:
            break;
        }

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
      //Allow the user to send another message
      dispatch({type: "SET_LOADING", value: false});
    }
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await handleClick();
  };

  return (
    <form className="send" onSubmit={onSubmit}>
      {browserSupportsSpeechRecognition ? (
        <ToggleButton
          value="mic"
          onClick={() => {
            switchListening();
          }}
          disabled={state.loading || state.messages.length==0 || state.isLink}
          style={{
            width: "8%",
            height: 25,
            marginLeft: "2.5%",
            borderWidth: 0,
          }}
        >
          {listening ? (
            <MicIcon style={{ color: "red" }}></MicIcon>
          ) : (
            <MicOffIcon
              style={{
                color:
                  !isMicrophoneAvailable || state.loading || state.feedbackReq || state.messages.length==0 || state.isLink
                    ? "grey"
                    : "#000071",
              }}
            ></MicOffIcon>
          )}
        </ToggleButton>
      ) : null}
      <input
        disabled={state.loading || state.feedbackReq || state.messages.length==0 || state.isLink}
        ref={inputRef}
        type="text"
        placeholder={
          state.loading || state.feedbackReq
            ? state.allText.phWait
            : listening
            ? state.allText.phSpeak
            : state.messages.length==0 
            ? state.allText.txtBoxNamePlaceholder 
            : state.isLink
            ? state.allText.selectOpt
            : state.allText.phType
          }
        id="message"
        name="message"
        className="txtBox"
        value={listening ? message + transcript : message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <RiSendPlaneFill
        className="sendButton"
        size="20%"
        color={
          state.loading || state.feedbackReq || !message ? "#DCDCDC" : "#000071"
        }
        onClick={async () => await handleClick()}
      />
    </form>
  );
}

export default Message;
