import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header__container">
            <h1 className="header__title">Hello, I'm Co</h1>
            <div className="empty__container"></div>
          </div>
        </header>
        <div className="main__container">
          <div className="content__container">
          </div>
          <div className="menu__container">
            <ul className="menu__list">
              <li className="menu__title">about me</li>
              <li className="menu__title">my work</li>
              <li className="menu__title">contact me</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
