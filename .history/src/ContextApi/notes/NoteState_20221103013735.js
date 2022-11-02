import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesinitial = [
    {
      _id: "635ea3c4d1a7f87879898a0aa4f0c419",
      user: "635e9d2b5741e8787994f0a69563e1",
      title: "amit",
      description: "hey my name is amit ths is my first blog",
      tag: "cartoon series",
      date: "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
      __v: 0,
    },

    {
      _id: "635ea3c4d1a7f9898989898a0aa4f0c419",
      user: "635e9d878782b5741e4f0a69563e1",
      title: "amit",
      description: "hey my name is amit ths is my first blog",
      tag: "cartoon series",
      date: "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
      __v: 0,
    },
    {
      _id: "635ea3c4d1a7f987878898a0aa4f0c419",
      user: "635e9d2b57418787878e4f0a69563e1",
      title: "amit",
      description: "hey my name is amit ths is my first blog",
      tag: "cartoon series",
      date: "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(notesinitial);

  //Add a Note
  const addnote = (title, description, tag) => {
    //api call
    console.log("adding a new note");
    const note = {
      _id: "635ea3c4d18898a7f9898a0aa4f0c419",
      user: "635e9d2b5741545455446465656545455e4f0a69563e1",
      title: title,
      description: description,
      tag: "cartoon series",
      date: "Sun Oct 30 2022 21:48:10 GMT+0530 (India Standard Time)",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };

  //Delete a Note
  const deletenote = (id) => {};

  //Edit A Note
  const editnote = (id) => {};

  return (
    <noteContext.Provider
      value={{ notes, setnotes, addnote, deletenote, editnote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
