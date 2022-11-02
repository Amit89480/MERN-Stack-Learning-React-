import React from "react";
import noteContext from "./noteContext";

const NoteState = () => {

    const state = {
        "name":"amit",""
    }
    return <NoteState.Provider value={state}>
      {props.children}
  </NoteState.Provider>  
}

export default NoteState;