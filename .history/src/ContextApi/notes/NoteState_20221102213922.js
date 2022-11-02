import React from "react";
import  NoteContext from "./noteContext";

const NoteState = (props) => {

    const state = {
        "name": "amit",
        "class": "5b"
    }



    return <NoteState.Provider value={state}>
      {props.children}
     </NoteState.Provider>
}

export default NoteState;