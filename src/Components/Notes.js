import React, { useContext } from 'react'
import noteContext from '../ContextApi/notes/noteContext';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setnotes } = context;
  return (
      <div className="container my-3">
          <h1>Your Note</h1>
                {notes.map((note)=>{
            return note.title
                })}
      
      </div>
  )
}
