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
      <Router>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Router>
      </div>
    </Router>
    </>
  );
}

export default App;
