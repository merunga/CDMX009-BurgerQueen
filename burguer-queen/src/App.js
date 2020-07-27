import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
 
} from "react-router-dom"
import Login from './components/Login/Login';
import Roles from './components/Roles/Roles';
import Kitchen from './components/Kitchen/Kitchen';
import Floor from './components/Floor/Floor';
import TableStatus from './components/TableStatus/TableStatus';
import NewTable from './components/NewTable/NewTable';
import { theWatcher } from './controllers';

function App() {
  const [orden, setOrden] = React.useState([])
  const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
  theWatcher(setFirebaseUser);
}, [])
return firebaseUser !== false ? (
 
    <Router>
  <Switch>
  <Route path="/roles/piso/mesaNueva">
    <NewTable 
    orden={orden}
    setOrden={setOrden}/>
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
  <Route path="/roles" ruta={Roles}>
      <Roles />
  </Route>
  <Route path="/">
    <Login />
  </Route>
</Switch>
</Router>
) : (
  <div>Cargando...</div>
)

}

export default App;