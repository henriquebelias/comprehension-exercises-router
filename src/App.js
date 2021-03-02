import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route
            path="/strict-access"
            render={(props) => <StrictAccess {...props} user={{username: "joao", password: "1234"}} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
