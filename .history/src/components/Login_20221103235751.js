import React from 'react'

export const Login = () => {

    const handleSubmit =async(e) => {
        e.preventDefault();
     
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify({title,description,tag})
        })
        const json = await response.json();
        
    }




  return (
    <div>
<form>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
</form>

          


    </div>
  )
}
