import React from 'react'

export const Login = () => {

    const handleSubmit =async(e) => {
        e.preventDefault();
        fetch()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTlkMmI1NzQxZTRmMGE2OTU2M2UxIn0sImlhdCI6MTY2NzE0NTAwM30.B7LBe8boHcCBysODlTJAQ7l9BjS0hkiNZp2LvXboll8'
            },
            body: JSON.stringify({title,description,tag})
        })
        
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
