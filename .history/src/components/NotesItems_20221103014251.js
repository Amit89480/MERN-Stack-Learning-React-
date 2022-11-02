import React, { useContext } from 'react'
import noteContext from '../ContextApi/notes/noteContext'

export const NotesItems = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const{note}=props
  return (
      <div className='container col-md-3'>
        
          <div className="card my-3">
              <div className="card-body">

                 <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                  <i className="fa-solid fa-pen-to-square mx-2"></i>
                      <i className="fa-solid fa-trash mx-2"onClick={()=>{deletenote(note)}}></i>
                     
                     
                
            </div>
            </div>
          
 </div>
  )
}
