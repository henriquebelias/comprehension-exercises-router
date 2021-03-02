import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
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
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
