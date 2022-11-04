import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    let history = useNavigate();
   
    const handleSubmit = async (e) => {
        const  {name,email,password}=credentials
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            history("/");
            props.showAlert("User Created Successfully","success")

        }
        else{
           props.showAlert("Invalid details","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
   
    
    
    
    
    return (
        <>
        <form onSubmit={handleSubmit}>
          <h2>Sign up for using iNotebook</h2>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" credentials={credentials.name } aria-describedby="name"  onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="email" credentials={credentials.email } onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"credentials={credentials.password } onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="container">
          <strong>If user Already exists Please Login</strong>
          <Link className="mx-2"  to='/login'>Login</Link>
     </div>
        </>
    )
}

export default Signup
