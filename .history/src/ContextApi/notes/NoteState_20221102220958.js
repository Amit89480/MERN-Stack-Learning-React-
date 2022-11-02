import React,{useState} from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const notes=

 
    



    return <noteContext.Provider value={{state,update}}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;