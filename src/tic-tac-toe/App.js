import './App.css';

import React, { Component } from 'react';

import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className='title black-text'>Tic Tac Toe</p>
        <p className="App-intro">
          <Game></Game>
        </p>
        <div>
				<p className='black-text'>
					copyright © {new Date().getFullYear()} All Rights reserved
				</p>
			</div>
      </div>
    );
  }
}

export default App;
