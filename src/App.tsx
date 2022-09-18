import "./App.css";

import React, { useReducer } from "react";

import Chatbox from "./components/Chatbox";
import ChatboxButton from "./components/ChatboxButton";
import { GlobalContext, initalData } from "./contexts";
import { globalReducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initalData);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <div className="background">
      <header className="App-header"></header>
      <ChatboxButton/>
      <Chatbox/>
    </div>
      </GlobalContext.Provider>
    
  );
}

export default App;
