import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts";
import { AlternateButton } from "../../../types/types";
import API from "../../../utils/API";

export default function AlternativeButton(props: {alternative: AlternateButton}){
    const {state, dispatch} = useContext(GlobalContext);
    async function handleClick(){
        const response = await API.updateRecord({message: props.alternative.url??"", is_bot: true, language: state.language, name: state.name, uuid: state.uuid, sessionId: state.session_id});
        if(response){
            //Check if we have a uuid if not set one
            if (!state.uuid || response.uuid != state.uuid) {
                dispatch({type: "SET_UUID", uuid: response.uuid});
            }
    
            //Check if we have a session id if not set one
            if (!state.session_id || response.session_id != state.session_id) {
                dispatch({type: "SET_SESSION_ID", uuid: response.session_id});
            } 
        } 
    }

    return (
      <a href={props.alternative.url?? ""} target="_blank">
      <button
        className="alternativeBtns"
        onClick={handleClick}
        >
          {props.alternative.text}     
      </button>
      </a>
    )
}