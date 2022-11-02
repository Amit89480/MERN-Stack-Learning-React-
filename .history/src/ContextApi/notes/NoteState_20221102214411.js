import React from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "amit",
        "class": "5b"
    }
    const [state, setstate] = useState(s1)
    update = () => {
        
    }



    return <noteContext.Provider value={state}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;