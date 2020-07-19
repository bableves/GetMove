import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './routes';
import MenuBar from './menu/MenuBar';

const App = () => (
  <Router>
    <MenuBar />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <div style={{ background: 'black' }}>
          <Home />
        </div>
      </Route>
    </Switch>
  </Router>
);

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
