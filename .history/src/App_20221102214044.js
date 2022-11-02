import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';

import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";
import NoteState from './ContextApi/notes/NoteState';


function App() {
  return (
    <>
      <NoteState></NoteState>
      <Router>
      <NavBar/>
   <Routes>
         <Route path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
        </Routes>
        </Router>


    
    </>
  );
}

export default App;
