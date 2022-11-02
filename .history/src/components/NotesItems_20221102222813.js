import React from 'react'

export const NotesItems = (props) => {
    const{note}=props
  return (
      <div className='container'>
        
          <div className="card">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                
            </div>
            </div>
          
 </div>
  )
}
