import React,{useContext} from 'react'

export const Home = () => {
  const context = useContext(contextValue);
  const { notes, setnotes } = context;
  return (
    <div className="container my-3 mx-4">
      <h1 className="container mx-2">Add a Note</h1>
      <form>
  <div className="form-group">
    <label htmlfor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     <h1>Your Note</h1>
    </div>
  )
}
