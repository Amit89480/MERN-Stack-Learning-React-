import React, { useContext ,useEffect, useRef} from 'react'
import noteContext from '../ContextApi/notes/noteContext';
import { AddNote } from './AddNote';
import { NotesItems } from './NotesItems';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getnotes } = context;
    useEffect(() => {
        getnotes();
    }, [])
  
    const ref = useRef(null)


    const updatenote = (note) => {
        ref.current.click();
    }
    
    
    
    
    
    
    return (
        <>
            <AddNote />
          

            
            
            
            <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">

                            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3">
          <h1 className='container mx-4'>Your Note</h1>
                {notes.map((note)=>{
                    return <NotesItems key={note._id} updatenote={ updatenote} note={note} />
                })}
      
            </div>
            </>
  )
}