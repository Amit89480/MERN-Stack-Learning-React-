import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host="http://localhost:5000"
    const notesinitial =[]
    const [notes, setnotes] = useState(notesinitial);

    //GET ALL NOTES
    const getnotes = async () => {
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },

        })
        const json = await response.json();
        console.log(json)
    
  
    };



    //Add a Note
    const addnote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },
            body: JSON.stringify({title,description,tag})
        })
    //   const json= response.json();
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
    const deletenote = (id) => {
        const newnotes = notes.filter((note) => {return note._id!== id })
        setnotes(newnotes);
    }
       
    
  

    //Edit A Note
    const editnote = async (title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },
            body: JSON.stringify({title,description,tag})
        })
      const json= response.json();
    





        // here we are using for loop
        for (let index = 0; notes < array.length; index++) {
            const element = notes[index];
            if (element._id == id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }

    };

  





    return (
        <noteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote }}>
            {props.children}
        </noteContext.Provider>
    );
}



export default NoteState;
