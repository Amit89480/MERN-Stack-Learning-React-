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
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
