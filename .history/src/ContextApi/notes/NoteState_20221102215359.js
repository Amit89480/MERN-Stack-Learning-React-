import React,{useState} from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "amit",
        "class": "5b"
    }
    const [state, setstate] = useState(s1)
   const  update = () => {
        setTimeout(() => {
            setstate({
                "name": "misti",
                "class":"10a"
            })
        },2000)
    }



    return <noteContext.Provider value={s1}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;