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
    const updatenote = (note) => {

        
    }
    
    return (
        <>
            <AddNote />
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
