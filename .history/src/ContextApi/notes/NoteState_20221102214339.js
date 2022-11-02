import React from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const state = {
        "name": "amit",
        "class": "5b"
    }
    const [first, setfirst] = useState(second)



    return <noteContext.Provider value={state}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;