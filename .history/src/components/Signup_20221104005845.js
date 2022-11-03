import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate = useNavigate();

    const onChange = (e) => {

        setcredentials({ ...credentials,[e.target.name]:e.target.value});
        
    }

    const handleSubmit =async(e) => {
        e.preventDefault();
     
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
               
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
           
        })
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //saved the auth token and redirect
            localStorage.setItem('token', json.authtoken)
           
           navigate("/")
            
        }
        else {
            alert("invalid")
        }
        
    }



  return (
      <div className='container'> 
          <form on>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={onChange}placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword"  onChange={onChange} placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
