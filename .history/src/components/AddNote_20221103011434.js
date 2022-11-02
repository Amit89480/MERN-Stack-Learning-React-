import React,{useContext} from 'react'
import noteContext from '../ContextApi/notes/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const { addnotes } = context;
    
    const handleClick = () => {
    
}





  return (
      <div>
           <div className="container my-3 mx-4">
      <h1 className="container mx-2">Add a Note</h1>
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="title"onChange={onChange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="description">description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
              </form>
              </div>
    </div>
  )
}
