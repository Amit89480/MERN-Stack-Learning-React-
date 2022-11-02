import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';

import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
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
