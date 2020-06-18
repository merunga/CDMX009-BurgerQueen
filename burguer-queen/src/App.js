import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //NavLink
} from "react-router-dom"
import Login from './components/Login';
import Roles from './components/Roles';
import Kitchen from './components/Kitchen';
import Floor from './components/Floor';

function App() {
  return (
    <Router>

      <Switch>
       
        <Route path= "/roles/piso">
          <Floor/>
          <div></div>
        </Route>
        <Route path="/roles/cocina">
          <Kitchen />
        </Route>
        <Route path="/roles">
        <Roles />
          <div >
            <Link to="/roles/cocina" className="btn btn-danger"> COCINNA </Link> <br/>
            <Link to="/roles/piso" className="btn btn-danger"> PISO </Link>
          </div>
          
        </Route>
        <Route path="/">
          <Login />
          <div className="btn-group">
            <Link to="/roles" className="btn btn-dark"> Entrar </Link>

          </div>
        </Route>
      </Switch>
    </Router>




  );
}

export default App;
