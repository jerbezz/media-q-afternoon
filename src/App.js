import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className='splash'>
          <nav className='nav-bar'>
            <div className='nav-logo'>Start Bootstrap</div>
            <div className='nav-buttons'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
              <div className='hamburger'><i class="fas fa-bars"></i></div>
          </nav>
          <div className='top-content'>
            <h3>Welcome to Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>tell me more</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
