import "./Chatbox.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import { AiOutlineClose } from "react-icons/ai";
import Bubbles from "./subcomponents/main/Bubbles";
import Buttons from "./subcomponents/main/Buttons";
import Feedback from "./subcomponents/main/Feedback";
import { FiMaximize } from "react-icons/fi";
import { Gb } from "react-flags-select";
import { GlobalContext } from "../contexts";
import Message from "./subcomponents/bottom/Message";
import NameInput from "./subcomponents/main/NameInput";
import ReactFlagsSelect from "react-flags-select";
import { VscChromeMinimize } from "react-icons/vsc";
import image from "../images/icons/henryCar.png";
import BotText from "../utils/BotText";
import languageMap from "../utils/Languages";
import { LexState } from "../types/types";
import AlternativeButton from "./subcomponents/main/AlternativeButton";
import YnBtn from "./subcomponents/main/YnBtn";


<link href="https://css.gg/maximize.css" rel="stylesheet"></link>;

function Chatbox() {
  const { state, dispatch } = useContext(GlobalContext);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("GB");

  // Function which scrolls to the bottom of the chat
  const messageSend = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Side effect that fires on every message sent to scroll to the bottom of the chat
  useEffect(() => {
    messageSend();
  }, [state.messages]);

  //Update the local storage when these values are reset
  useEffect(() => {
    localStorage.setItem("name", state.name);
  }, [state.name]);

  useEffect(() => {
    localStorage.setItem("language", state.language);
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("uuid", state.uuid);
  }, [state.uuid]);

  useEffect(() => {
    localStorage.setItem("sessionId", state.session_id);
  }, [state.session_id]);

  // Side that fires when the chat is first rendered, refreshes any saved data (name, uuid...).
  useEffect(() => {
    const savedData = ["name", "language", "uuid", "session_id"];
    dispatch({ type: "REFRESH_DATA", savedData: savedData });
  }, []);

  const transition1 = useTransition(state.showComponent, {
    from: { x: 0, y: 2000 },
    enter: { x: 0, y: 0 },
  });

  const Typing = () => (
    <div className="dotCtn">
      <div className="dot-pulse">
        <div className="dot-pulse"></div>
        <div className="dot-pulse"></div>
        <div className="dot-pulse"></div>
      </div>
    </div>
  );

  const onMinMax = () => {
    dispatch({ type: "OPEN_CHAT" });
    dispatch({ type: "TOGGLE_CHAT" });
  };

  const onClose = () => {
    dispatch({ type: "SHOW_ALERT" });
  };

  const onAlertYes = async () => {
    //Stop the lex session and mark it as inactive
    dispatch({type: "TOGGLE_STARS" });
    dispatch({type: "HIDE_ALERT" })
    dispatch({type: "SET_LEX_STATE", value: LexState.NONE})
  };

  // change onClose so that it just enables the pop up and put the onClose code onto onAlertClose
  // when the pop up is visible, make the chat box blurry/opaque - see which one works best

  return (
    <div>
      {transition1((style, item) =>
        state.showComponent ? (
          <animated.div
            style={style}
            ref={chatboxRef}
            className={
              state.closed
                ? "chatbox_closed"
                : state.minimised
                ? "chatbox_min"
                : "chatbox"
            }
          >
            {state.showAlert ? (
              <div className="alert_custom">
                {state.allText.close}
                <div className="yesno">
                  <button onClick={onAlertYes}>{state.allText.yes}</button>
                  <button
                    onClick={() => {
                      dispatch({ type: "HIDE_ALERT" });
                    }}
                  >
                    {state.allText.no}
                  </button>
                </div>
              </div>
            ) : null}
            {state.showStars ? (
              <div className="alert_custom">
                {state.allText.feedback}
                <div className="feedback_stars">
                  <Feedback />
                </div>
              </div>
            ) : null}
            <div className={(state.showAlert || state.showStars) ? "top-blurred" : "top"}>
              <img className="robot" src={image} alt="robot"></img>
              <div className="henry">Henry</div>
              <ReactFlagsSelect
                className="flags"
                countries={["GB", "ES", "FR", "DE", "IT"]}
                placeholder={<Gb />}
                showOptionLabel={false}
                showSelectedLabel={false}
                selectedSize={23}
                selected={selected}
                optionsSize={23}
                onSelect={
                  (code) => {
                    setSelected(code);
                    dispatch({type: "CHANGE_LANGUAGE", language: languageMap(code)});
                    const newText = BotText(code, state.name);
                    dispatch({type:"SET_ALL_TEXT", text: newText});
                  }
                } 
              />
              <div className="btnContainer">
                {state.minimised ? null : (
                  <AiOutlineClose
                    size="100%"
                    color="#000071"
                    className="cross"
                    onClick={onClose}
                  />
                )}
                {state.minimised ? (
                  <FiMaximize
                    size="100%"
                    color="#000071"
                    className="max"
                    onClick={onMinMax}
                  />
                ) : (
                  <VscChromeMinimize
                    size="100%"
                    color="#000071"
                    className="min"
                    onClick={onMinMax}
                  />
                )}
              </div>
            </div>
            <div className={(state.showAlert || state.showStars) ? "main-blurred" : "main"} id="main">
              <div className="introTextBox">
                <div className="introText">
                  {state.allText.introTxt}
                  <br />
                  {state.allText.tcTxt} 
                  <a href="https://www.ford.co.uk/useful-information/terms-and-privacy/privacy-policy" target="_blank"> {state.allText.tcLink}</a>
                  .
                </div>
              </div>
              {state.messages.length == 0 ? (
                <div className="nameBox">
                  <NameInput/>
                </div>
              ) : null}
              {state.messages.map((message, i) => {
                // return (message.isBot? <BotBubble key={i} message={message.message} messages={messages} setMessages={setMessages} name={name}/>:
                // <UserBubble key={i} message={message.message}/>);
                return <Bubbles key={i} message={message} />;
              })}
              <div ref={messageEndRef} />
              {state.isLink ? (
                <div className="ynCtn">
                  <YnBtn/>
                </div>
              ) : null}
              <div ref={messageEndRef} />
              {state.loopBack ? (
                <div className="buttons">
                  <Buttons
                    style={{ opacity: "1" }}
                    onClick={() => dispatch({type: "SET_LOOPBACK", value: false})}
                  />
                </div>
              ) : null}
              {state.loading ? (
                <div className="dotsBox">
                    <Typing />
                  <div className="triangle-left"/>
                </div>
              ) : null}
              {
                (state.lexState === LexState.FALLBACK || state.lexState === LexState.DENIED) && !state.loading? (
                  <div className="altButtons">
                    {state.alternate_butttons.map((alternative, i) => <AlternativeButton key={i} alternative={alternative}/>)}
                  </div>
                )
                : null
              }
              <div ref={messageEndRef} />
            </div>
            <div className={(state.showAlert || state.showStars) ? "send-text-blurred" : "send-text"}>
              <Message/>
            </div>
          </animated.div>
        ) : null
      )}
    </div>
  );
}

export default Chatbox;
