import React from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const state = {
        "name": "amit",
        "class": "5b"
    }
    const [state, setstate] = useState(second)



    return <noteContext.Provider value={state}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;