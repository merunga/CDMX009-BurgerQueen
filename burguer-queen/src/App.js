import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
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
  <Route path="/roles/piso/mesaNueva">
    <NewTable />
  </Route>
  <Route path="/roles/piso/:id">
    <TableStatus />
  </Route>
  <Route path="/roles/piso">
    <Floor />
  </Route>
  <Route path="/roles/cocina">
    <Kitchen />
  </Route>
  <Route path="/roles">
    <Roles />
  </Route>
  <Route path="/">
    <Login />
  </Route>
</Switch>
</Router>


  );
}

export default App;