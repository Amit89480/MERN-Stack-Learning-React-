import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
            localStorage.setItem('token', json.authtoken); 
            history("/");

        }
        else{
            alert("Users Exists");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
   
    
    
    
    
    return (
        <>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" credentials={credentials.name } aria-describedby="name"  onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="email" credentials={credentials.email } onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"credentials={credentials.password } onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label for="cpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}

export default Signup
