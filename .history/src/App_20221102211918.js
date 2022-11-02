import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';

import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />

      <Home />
      
    </>
  );
}

export default App;
