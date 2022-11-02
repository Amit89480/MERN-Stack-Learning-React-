import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
able to use this app.import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
