import React, { useContext } from 'react'
import noteContext from '../ContextApi/notes/noteContext';
import { NotesItems } from './NotesItems';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addnotes } = context;
    return (
      <></>
      <div className="row my-3">
          <h1 className='container mx-4'>Your Note</h1>
                {notes.map((note)=>{
                    return <NotesItems key={note._id} note={note} />
                })}
      
      </div>
  )
}
