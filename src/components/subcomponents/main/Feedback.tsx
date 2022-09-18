import React, { useContext, useRef } from "react";
import "./Feedback.css"
import { GlobalContext } from "../../../contexts";
import Rating from '@mui/material/Rating';
import API from "../../../utils/API";

export default function Feedback() {

  const { state, dispatch } = useContext(GlobalContext);
  const inputRef = useRef<HTMLInputElement>(null);
  var rating = 0; 

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await handleClick();
  };

  async function handleClick() {
    const new_name = inputRef.current?.value ?? "";
    dispatch({ type: "SET_STAR_VALUE", starValue: rating});
    dispatch({ type: "CLOSE_SESSION" });
    dispatch({ type: "TOGGLE_STARS"});
    if(state.session_id) await API.endLexSession({ uuid: state.uuid, sessionId: state.session_id });
  }
  
  return (
    <div>
      <div className="feedbackGroup">
        <Rating 
          size="large"
          sx = {{
            color:"#010E59",
          }}
          onChange={async (event, newValue) => {
            if(newValue == null){
              rating = 0;
            }
            else{rating = newValue};
          }}
        />
      </div>
      <div className="feedbackGroup">
        <form>
        <fieldset>
          <textarea 
            rows={5}
            className="feedbackTxtBox"
            placeholder={state.allText.feedbackMsg}
            id="name"
            name="name"
            onSubmit={onSubmit}
          ></textarea>
        </fieldset>
        <button className="submitBtn" onClick={onSubmit}>
            {" "}
            Submit{" "}
          </button>
      </form>
      </div>
    </div>
  );
}
