
import { Action, Language, State} from "./types/types";
export const globalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'OPEN_CHAT':
        return { ...state, closed: false};
        case 'CLOSE_CHAT':
        return { ...state, closed: true };
        case 'SHOW_CHAT':
        return { ...state, showComponent: true};
        case 'HIDE_CHAT':
        return { ...state, showComponent: false };
        case 'SHOW_ALERT':
        return { ...state, showAlert: true };
        case 'HIDE_ALERT':
        return { ...state, showAlert: false };
        case 'TOGGLE_CHAT':
        return { ...state, minimised: !state.minimised};
        case 'TOGGLE_STARS':
        return {...state, showStars: !state.showStars}
        case "REFRESH_DATA":
            let newState: {[k: string]: any} = {...state};
            for(const data of action.savedData){
                const saved = localStorage.getItem(data);
                if (saved) {
                    const initialValue: string = saved;
                    if(data === "language"){
                        newState[data as keyof State] = initialValue?? Language.ENGLISH;
                    }
                    else{
                        newState[data as keyof State] = initialValue?? "";
                    }
                } else {
                    newState[data as keyof State] = "";
                }
            }
            return newState as State;

        case 'CLOSE_SESSION':
            return { ...state, showAlert: false, closed: true, showComponent: false, messages: [], isLink: false, loopBack: false, feedbackReq: false};
        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.language };
        case 'SET_LOOPBACK':
            return { ...state, loopBack: action.value };
        case 'SET_ISLINK':
            return { ...state, isLink: action.value };
        case 'SET_LOADING':
            return { ...state, loading: action.value };
        case 'SET_FEEDBACKREQ':
            return { ...state, feedbackReq: action.value };
        case 'SET_MESSAGES':
            return { ...state, messages: action.messages };
        case 'SET_ALTERNATE_BUTTONS':
            return { ...state, alternate_butttons: action.alternate_buttons };
        case 'SET_ALL_TEXT':
            return { ...state, allText: action.text};
        case 'SET_STAR_VALUE':
            return { ...state, starValue: action.starValue };
        case 'SET_LEX_STATE':
            return { ...state, lexState: action.state };
        case 'SET_SESSION_ID':
            return { ...state, session_id: action.session_id };
        case 'SET_UUID':
            return { ...state, uuid: action.uuid };
        case 'SET_NAME':
            return { ...state, name: action.name };
        case 'SET_REDIRECT':
            return { ...state, isRedirect: action.value };
        default: 
        return state;
        }      
}