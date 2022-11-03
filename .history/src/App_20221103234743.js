import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NoteState from './ContextApi/notes/NoteState';
import { Alert } from "./Components/Alert"
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';


function App() {
  return (
    <>
      <NoteState>
      <Router>
          <NavBar />
          <Alert message="this is a alert componenets"/>
          <div className="container">
   <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/about" element={<Login />} />
         <Route exact path="/about" element={<Signup />} />
            </Routes>
            </div>
        </Router>
      
      </NoteState>
      


    
    </>
  );
}

export default App;
