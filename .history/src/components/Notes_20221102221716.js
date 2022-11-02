import React from 'react'

export const Notes = () => {
  return (
      <div>
          <h1>Your Note</h1>
    {notes.map((note)=>{
return note.title
    })}</div>
  )
}
