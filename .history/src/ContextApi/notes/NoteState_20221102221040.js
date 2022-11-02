import React,{useState} from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const notes=[
        {
          "_id": "635ea3c4d1a7fa0aa4f0c419",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "635ea469d1a7fa0aa4f0c41d",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "635ea46ad1a7fa0aa4f0c421",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "63616b33732c349739cc6f67",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "hey programmer",
          "description": "hey this is my second data in mogo db",
          "tag": "programming series",
          "date": "Wed Nov 02 2022 00:15:10 GMT+0530 (India Standard Time)",
          "__v": 0
        }
    ]
    const [first, setfirst] = useState(second)
    

 
    



    return <noteContext.Provider value={notes}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;