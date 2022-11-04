import React,{useContext,useState} from 'react'
import noteContext from '../ContextApi/notes/noteContext';

export const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const [note, setnote] = useState({title:"",description:"",tag:""})
    
    const handleClick = (e) => {
        e.preventDefault();
       addnote(note.title,note.description,note.tag);
      setnote({ title: "", description: "", tag: "" }); 
    
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
    <input type="text" className="form-control my-2" id="title" name="title" value={note.title} aria-describedby="title"   minLength={5} required onChange={onChange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control my-2" id="description" name="description"   value={note.description} minLength={5} required onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control my-2" id="tag" name="tag" value={note.tag} onChange={onChange}/>
  </div>
 
  <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
              </form>
              </div>
    </div>
  )
}
