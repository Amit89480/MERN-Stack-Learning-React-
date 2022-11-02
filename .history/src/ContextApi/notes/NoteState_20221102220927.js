import React,{useState} from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "amit",
        "class": "5b"
    }
    const [state, setstate] = useState(s1)
 
    }



    return <noteContext.Provider value={{state,update}}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;