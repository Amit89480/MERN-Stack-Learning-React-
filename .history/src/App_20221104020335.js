import './App.css';
import { useState } from 'react';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NoteState from './ContextApi/notes/NoteState';
import { Alert  from "./Components/Alert"
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <NoteState>
      <Router>
          <NavBar />
          <Alert message="this is a alert componenets"/>
          <div className="container">
   <Routes>
              <Route exact path="/" element={<Home showAlert={ showAlert} />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/Login" element={<Login showAlert={ showAlert} />} />
              <Route exact path="/Signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
            </div>
        </Router>
      
      </NoteState>
      


    
    </>
  );
}

export default App;
