import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home';
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
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
