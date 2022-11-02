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
import { Alert } from './components/Alert';


function App() {
  return (
    <>
      <NoteState>
      <Router>
          <NavBar />
          <Alert message=/>
          <div className="container">
   <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
            </Routes>
            </div>
        </Router>
      
      </NoteState>
      


    
    </>
  );
}

export default App;
