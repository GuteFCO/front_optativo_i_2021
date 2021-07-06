import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Pedidos from './pages/Pedidos';
import Pedido from './pages/Pedido';

/*
<Route exact path="/" render={
  (routerProps) => (
    <Login test={'Hola'} {...routerProps} />
  )
} />
*/


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={Login} />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/pedidos/:uuid" children={Pedido} />
        <Route path="/pedidos">
          <Pedidos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
