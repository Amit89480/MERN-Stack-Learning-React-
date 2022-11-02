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
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
              </form>
              </div>
    </div>
  )
}
