import React,{useC} from 'react'

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setnotes } = context;
  return (
      <div className="container">
          <h1>Your Note</h1>
                {notes.map((note)=>{
            return note.title
                })}
      
      </div>
  )
}
