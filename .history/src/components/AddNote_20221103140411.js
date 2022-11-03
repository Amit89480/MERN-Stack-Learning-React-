import React,{useContext,useState} from 'react'
import noteContext from '../ContextApi/notes/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const [note, setnote] = useState({title:"",description:"",tag:""})
    
    const handleClick = (e) => {
        e.preventDefault();
       addnote(note.title,note.description,note.tag);
    
    }


    const onChange = (e) => {

        setnote({...note,[e.target.name]:e.target.value})
        
    }





  return (
      <div>
           <div className="container my-3 mx-4">
      <h1 className="container mx-2">Add a Note</h1>
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control my-2" id="title" name="title" aria-describedby="title"onChange={onChange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control my-2" id="description" name="description" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control my-2" id="tag" name="tag" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
              </form>
              </div>
    </div>
  )
}
