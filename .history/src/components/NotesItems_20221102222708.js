import React from 'react'

export const NotesItems = (props) => {
    const{note}=props
  return (
      <div>
        
          <div classN="card" style="width: 18rem;">
            <div classN="card-body">
                <h5 classN="card-title">{note.title}</h5>
                  <p classN="card-text">{note.description}</p>
                
            </div>
            </div>
          
 </div>
  )
}
