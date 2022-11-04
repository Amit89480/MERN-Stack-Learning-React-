import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [credentials, setcredentials] = useState({ name:"",email: "", password: "",cpassword:"" });
    let navigate = useNavigate();

    const onChange = (e) => {

        setcredentials({ ...credentials,[e.target.name]:e.target.value});
        
    }

    const handleSubmit =async(e) => {
        e.preventDefault();
        const { name, email, password } =credentials
     
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            
            method: 'POST',
            headers: {
                'content-type': 'application/json'
               
            },
            body:JSON.stringify({name,email,password})
           
        })
        const json = await response.json();
        console.log(json)
        
        if (json.success) {
            //saved the auth token and redirect
            localStorage.setItem('token', json.authtoken)
           
            navigate("/")
        }
        else {
           props.showAlert("Inval")
        }
       
        
    }



  return (
      <div className='container'> 
          <form onSubmit={handleSubmit}>
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
