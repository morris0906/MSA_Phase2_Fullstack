import React from 'react';
import './App.css';
import { Divider } from '@material-ui/core';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi, welcome to this demo website!
        </h1>
        <a
          className="App-link"
          href="https://ruliweb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          루리웹_링크
        </a>
      </header>
      <Divider />
      <div className="Share">
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
