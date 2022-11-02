import React from 'react'

export const NotesItems = (props) => {
    const{note}=props
  return (
      <div>
          {note.title}
          {note.description}
          <div class="card" style="width: 18rem;">
 <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          
 </div>
  )
}
