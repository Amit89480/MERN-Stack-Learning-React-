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
        setnotes(json);
       
        
    
  
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
        const note = response.json();
        setnotes(notes.concat(note));
        
       
      
    };

    //Delete a Note
    const deletenote =async (id) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },
          
        })
      const json= response.json();
      console.log(json)
        const newnotes = notes.filter((note) => {return note._id!== id })
        setnotes(newnotes);
    }
       
    


    //Edit A Note
     let newnotes=JSON.parse(JSON.stringify(notes))
    const editnote = async (title, description, tag) => {
        
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },
            body: JSON.stringify({title,description,tag})
        })
      const json= response.json();
        console.log(json);
       
 for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            if (element._id == id) {
                newnotes[index].title = title;
                newnotes[index].description = description;
                newnotes[index].tag = tag;
                break;
            }
           
        }
        console.log(id, notes);
        setnotes(newnotes);
       
            
        

    };

  





    return (
        <noteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote ,getnotes}}>
            {props.children}
        </noteContext.Provider>
    );
}



export default NoteState;
