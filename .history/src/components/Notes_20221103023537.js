import React, { useContext ,useEffect} from 'react'
import noteContext from '../ContextApi/notes/noteContext';
import { AddNote } from './AddNote';
import { NotesItems } from './NotesItems';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getnotes } = context;
    useEffect(() => {
        getnotes();
    }, [])
    
    return (
        <>
            <AddNote/>
      <div className="row my-3">
          <h1 className='container mx-4'>Your Note</h1>
                {notes.map((note)=>{
                    return <NotesItems key={note._id} note={note} />
                })}
      
            </div>
            </>
  )
}
