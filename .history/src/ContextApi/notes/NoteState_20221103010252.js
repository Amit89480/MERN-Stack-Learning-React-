import React,{useState} from "react";
import  noteContext from "./noteContext";

const NoteState = (props) => {

    const notesinitial=[
        {
          "_id": "635ea3c4d1a7f9898a0aa4f0c419",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "635ea3c4d1a7f9898a0aa4f0c419",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "635ea3c4d1a7f9898a0aa4f0c419",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
        {
          "_id": "635ea3c4d1a7f9898a0aa4f0c419",
          "user": "635e9d2b5741e4f0a69563e1",
          "title": "amit",
          "description": "hey my name is amit ths is my first blog",
          "tag": "cartoon series",
          "date": "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
          "__v": 0
        },
       
    ]
    const [notes, setnotes] = useState(notesinitial)
    

 
    //Add a Note


    //Delete a Note



    //Edit A Note



    return <noteContext.Provider value={{notes,setnotes}}>
      {props.children}
     </noteContext.Provider>
}

export default NoteState;