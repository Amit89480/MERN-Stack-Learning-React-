import React from 'react'

export const Login = () => {
    const [credentials, setcredentials] = useState({email:"",password:""})
    const onChange = (e) => {

        setcredentials({ email: credentials.email, password: credentials.password });
        
    }

    const handleSubmit =async(e) => {
        e.preventDefault();
     
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
               
            },
            body:JSON.stringify({email,password})
           
        })
        const json = await response.json();
        console.log(json)
        
    }




  return (
    <div>
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control " id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"value={credentials.email} onChange={onChange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control my-2" id="password" name="password" placeholder="Password" value= onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary my-2" >Submit</button>
</form>

          


    </div>
  )
}
