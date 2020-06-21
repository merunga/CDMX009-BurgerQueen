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
import TableStatus from './components/TableStatus';
import NewTable from './components/NewTable';

function App() {
  return (
    <Router>

      <Switch>
        <Route path= "/roles/piso/mesaNueva">
          <NewTable/>
        </Route>
       <Route path="/roles/piso/:id">
        <TableStatus
        
        />
       </Route>
        <Route path= "/roles/piso">
          <Floor/>
          
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
           

          </div>
        </Route>
      </Switch>
    </Router>




  );
}

export default App;
