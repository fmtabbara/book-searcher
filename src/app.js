import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

import './styles/styles.css';

const App = () => (
  <div id="app-container">
    <div id="top-nav">
      <h1>Book Locator</h1>
      <SearchBar />
    </div>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
