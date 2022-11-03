import React, { useContext, useEffect, useRef ,useState} from "react";
import noteContext from "../ContextApi/notes/noteContext";
import { AddNote } from "./AddNote";
import { NotesItems } from "./NotesItems";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getnotes ,editnote} = context;
  useEffect(() => {
    getnotes();
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);
    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const updatenote = (currentnote) => {
   
      console.log(ref.current.click());
      setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag});
    };
   
    
    
    
    const handleClick = () => {
        editnote(note.id,note.etitle,note.edescription,note.etag);
        refclose.current.click();

      
    
    }


    const onChange = (e) => {

        setnote({...note,[e.target.name]:e.target.value})
        
    }

  return (
    <>
      <AddNote />

      <button
              ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Update Note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="etitle"
                  name="etitle"
                  aria-describedby="title" value={note.etitle}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="edescription"
                  name="edescription" value={note.edescription}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tag">Tag</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="etag"
                                  name="etag"
                                  value={note.etag}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
                          <button onClick={ handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
              <h1 className="container mx-4">Your Note</h1>
              {notes.length==0&&"No Notes To Display!},        {notes.map((note) => {
          return (
            <NotesItems key={note._id} updatenote={updatenote} note={note} />
          );
        })}
      </div>
    </>
  );
};
